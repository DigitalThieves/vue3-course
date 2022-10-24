import Products from '@/pages/products'
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
    const prod = products.find(el => el.slug = 'salty-black-jacket')
    client.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Products, {
      global: {
        plugins: [router],
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]')
    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual(prod.title)
    const description = wrapper.find('[data-testid="description"]')
    expect(description.exists()).toBe(true)
    expect(description.html().replace(/\s/g, '')).toContain(prod.description.replace(/\s/g, ''))
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })

  it('Tests that router link is being used properly in breadcrumbs', async () => {
    const prod = products.find(el => el.slug = 'salty-black-jacket')
    client.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Products, {
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
    const wrapper = mount(Products, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      }
    })
    const title = wrapper.find('[data-testid="loading"]')
    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual('Loading...')
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays error when error thrown', async () => {
    client.getProductBySlug.mockImplementation(() => { throw new Error('Something went wrong') } )
    const wrapper = mount(Products, {
      global: {
        plugins: [router],
      },
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="error"]')
    expect(title.exists()).toBe(true)
    expect(title.text()).toContain('error')
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })
})