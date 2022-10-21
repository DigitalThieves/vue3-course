import Categories from '@/pages/categories'
import categories from '@/assets/db/categories.json'
import products from '@/assets/db/products.json'
import { mount } from '@vue/test-utils'
import client from '@/api-client'
import flushPromises from 'flush-promises'
import router from '@/router'

jest.mock('@/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})


describe('Testing Router File', () => {
  it('Should be a Vue Plugin with category route', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/categories/:'))
    ).toBeTruthy()
  })
})

describe('Testing Products Page', () => {
  it('Calls getProductsByCategory and displays correct title and description', async () => {
    const cat_prod = products.filter(el => el.category === 'bags' )
    const category = categories.filter(el => el.category === 'bags' )[0] 
    const cat = { ...category, products: cat_prod }
    client.getProductsByCategory.mockResolvedValueOnce(cat)
    const wrapper = mount(Categories, {
      global: {
        plugins: [router],
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]').text()
    expect(title).toEqual(cat.title)
    const description = wrapper.find('[data-testid="description"]').text()
    expect(description).toContain(cat.description)
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })

  it('Tests that router link is being used properly in breadcrumbs', async () => {
    const cat_prod = products.filter(el => el.category === 'bags' )
    const category = categories.filter(el => el.category === 'bags' )[0] 
    const cat = { ...category, products: cat_prod }
    client.getProductsByCategory.mockResolvedValueOnce(cat)
    const wrapper = mount(Categories, {
      global: {
        plugins: [{
          install: app => {
            app.config.globalProperties.$route = {
              params: {
                slug: category.category
              }
            }
          }
        }],
        stubs: {
          RouterLink: {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      }
    })
    await flushPromises()
    const title = wrapper.findAll('[data-test-id="stubbed-link"]')
    expect(title.length).toBeGreaterThan(0)
    expect(title[0].text()).toBe('SALT MERCH')
  })

  it('Calls getProductsByCategory and displays loading while waiting...', async () => {
    const cat_prod = products.filter(el => el.category === 'bags' )
    const category = categories.filter(el => el.category === 'bags' )[0] 
    const cat = { ...category, products: cat_prod }
    client.getProductsByCategory.mockImplementation(() => new Promise (done => setTimeout(() => done(cat), 1500)) )
    const wrapper = mount(Categories, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      }
    })
    const title = wrapper.find('[data-testid="loading"]').text()
    expect(title).toEqual('Loading...')
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductsByCategory and displays error when error thrown', async () => {
    client.getProductsByCategory.mockImplementation(() => { throw new Error('Something went wrong') } )
    const wrapper = mount(Categories, {
      global: {
        plugins: [router],
      },
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="error"]').text()
    expect(title).toContain('error')
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })
})