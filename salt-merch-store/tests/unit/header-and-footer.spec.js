import App from '@/App'
import { mount } from '@vue/test-utils'
import router from '@/router'

jest.mock('@/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})


describe('Testing Router File for Collection', () => {
  it.only('Should be a Vue Plugin with category route', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/'))
    ).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/')).components
    ).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/')).components.header
    ).toBeTruthy()
  })
})

describe('Testing Products Page', () => {
  it('Calls getAllProducts and displays correct amount of products', async () => {
    client.getAllProducts.mockResolvedValueOnce(products)
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      }
    })
    await flushPromises()
    const title = wrapper.findAll('.row > .col-3.text-decoration-none')
    expect(title).toHaveLength(products.length)
  })
})