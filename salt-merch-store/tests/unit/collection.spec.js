import Collection from '@/pages/collection'
import products from '@/assets/db/products.json'
import { mount } from '@vue/test-utils'
import client from '@/services/api-client'
import flushPromises from 'flush-promises'
import router from '@/router'

jest.mock('@/services/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})


describe('Testing Router File for Collection', () => {
  it('Should be a Vue Plugin with category route', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/collection'))
    ).toBeTruthy()
  })
})

describe('Testing Collections Page', () => {
  it('Calls getAllProducts and displays correct amount of products', async () => {
    client.getAllProducts.mockResolvedValueOnce(products)
    const wrapper = mount(Collection, {
      global: {
        plugins: [router],
      }
    })
    await flushPromises()
    const title = wrapper.findAll('.row > .col-3.text-decoration-none')
    expect(title).toHaveLength(products.length)
  })

  it('Tests that router link is being used properly in breadcrumbs', async () => {
    client.getAllProducts.mockResolvedValueOnce(products)
    const wrapper = mount(Collection, {
      global: {
        plugins: [router],
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
})