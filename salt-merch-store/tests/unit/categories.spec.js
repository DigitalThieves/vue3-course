import Categories from '@/pages/categories'
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
  it('Should be a Vue Plugin', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/products/:'))
    ).toBeTruthy()
  })
})

describe('Testing Products Page', () => {
  it('Calls getProductBySlug and displays correct title and description', async () => {

    const cat_prod = products.filter(el => el.category === category_slug )
    const category = categories.filter(el => el.category === category_slug )[0] 
    const cat = { ...category, products: cat_prod }
    client.getProductsByCategory.mockResolvedValueOnce(cat)
    const wrapper = mount(Categories, {
      global: {
        plugins: [router],
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]').text()
    expect(title).toEqual(prod.title)
    const description = wrapper.find('[data-testid="description"]').html()
    expect(description.replace(/\s/g, '')).toContain(prod.description.replace(/\s/g, ''))
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })

  it('Tests that router link is being used properly in breadcrumbs', async () => {
    const prod = products.find(el => el.slug = 'salty-black-jacket')
    client.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Categories, {
      global: {
        plugins: [{
          install: app => {
            app.config.globalProperties.$route = {
              params: {
                slug: 'salty-black-jacket'
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
    expect(title[1].text()).toBe(prod.category)
  })

  it('Calls getProductBySlug and displays loading while waiting...', async () => {
    const prod = products[2]
    client.getProductBySlug.mockImplementation(() => new Promise (done => setTimeout(() => done(prod), 1500)) )
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
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays error when error thrown', async () => {
    client.getProductBySlug.mockImplementation(() => { throw new Error('Something went wrong') } )
    const wrapper = mount(Categories, {
      global: {
        plugins: [router],
      },
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="error"]').text()
    expect(title).toContain('error')
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })
})