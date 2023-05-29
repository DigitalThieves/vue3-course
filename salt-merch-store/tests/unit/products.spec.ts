import { mount } from '@vue/test-utils'
import client from '@/services/api-client'
import flushPromises from 'flush-promises'
import Products from '@/pages/products.vue'


jest.mock('@/services/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})

const prod = JSON.parse(`
{"id": 9, "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0","price": 64,"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category": "electronics","image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating": {"rate": 3.3,"count": 203},"slug": 9,"colors": [{"color_name": "Black Melange","colorhex": "#000","sizes": [{"size": "one-size","stock": 3},{"size": "two-size","stock": 5}],"images": ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"]},{"color_name": "White Snow","colorhex": "#fff","sizes": [{"size": "one-size","stock": 3},{"size": "two-size","stock": 5}],"images": ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"]}]}
`)

const mockedClient = jest.mocked(client)
describe('Testing Products Component', () => {
  it('Calls getProductBySlug and displays correct title', async () => {
    mockedClient.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Products, {
      global: {
        stubs: ['router-link', 'product-selectables'],
        mocks: {$route: { params: { slug: 'test-nav' } }}
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]').text()
    expect(title).toEqual(prod.title)
    expect(mockedClient.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays loading while waiting...', async () => {
    mockedClient.getProductBySlug.mockImplementation(() => new Promise (done => setTimeout(() => done(prod), 1500)) )
    const wrapper = mount(Products, {
      global: {
        mocks: {
          $route: {
            params: {
              slug: 'salty-black-jacket'
            }
          }
        },
        stubs: ['router-link', 'product-selectables']
      }
    })
    const title = wrapper.find('[data-testid="loading"]').text()
    expect(title).toEqual('Loading...')
    expect(mockedClient.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays error when error thrown', async () => {
    mockedClient.getProductBySlug.mockImplementation(() => { throw new Error('Something went wrong') } )
    const wrapper = mount(Products, {
      global: {
        mocks: {
          $route: {
            params: {
              slug: 'salty-black-jacket'
            }
          }
        },
        stubs: ['router-link', 'product-selectables']
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="error"]').text()
    expect(title).toContain('error')
    expect(mockedClient.getProductBySlug).toHaveBeenCalledTimes(1)
  })
})

describe('Testing Products Page', () => {
  it('Calls getProductBySlug and displays correct title and description', async () => {
    mockedClient.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Products, {
      global: {
        mocks: {
          $route: {
            params: {
              slug: 'salty-black-jacket'
            }
          }
        },
        stubs: ['router-link', 'product-selectables']
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]').text()
    expect(title).toEqual(prod.title)
    const description = wrapper.find('[data-testid="description"]')
    expect(description.exists()).toBe(true)
    expect(description.html().replace(/\s/g, '')).toContain(prod.description.replace(/\s/g, ''))
    expect(mockedClient.getProductBySlug).toHaveBeenCalledTimes(1)
  })

  it('Tests that router link is being used properly in breadcrumbs', async () => {
    mockedClient.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Products, {
      global: {
        mocks: {
          $route: {
            params: {
              slug: 'salty-black-jacket'
            }
          }
        },
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
    mockedClient.getProductBySlug.mockImplementation(() => new Promise (done => setTimeout(() => done(prod), 1500)) )
    const wrapper = mount(Products, {
      global: {
        mocks: {
          $route: {
            params: {
              slug: 'salty-black-jacket'
            }
          }
        },
        stubs: {
          RouterLink: {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      }
    })
    const title = wrapper.find('[data-testid="loading"]').text()
    expect(title).toEqual('Loading...')
    expect(mockedClient.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays error when error thrown', async () => {
    mockedClient.getProductBySlug.mockImplementation(() => { throw new Error('Something went wrong') } )
    const wrapper = mount(Products, {
      global: {
        mocks: {
          $route: {
            params: {
              slug: 'salty-black-jacket'
            }
          }
        },
        stubs: ['router-link', 'product-selectables']
      },
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="error"]').text()
    expect(title).toContain('error')
    expect(mockedClient.getProductBySlug).toHaveBeenCalledTimes(1)
  })
})