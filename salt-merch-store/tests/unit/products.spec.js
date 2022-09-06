import Products from '@/pages/products'
import products from '@/assets/db/products.json'
import { mount } from '@vue/test-utils'
import client from '@/services/api-client'
import flushPromises from 'flush-promises'
import router from '@/router'

jest.mock('@/services/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('', () => {
  it('Calls getProductBySlug and displays correct title', async () => {
    const prod = products[2]
    client.getProductBySlug.mockResolvedValueOnce(prod)
    const wrapper = mount(Products, {
      global: {
        plugins: [router]
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]').text()
    expect(title).toEqual(prod.title)
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays loading while waiting...', async () => {
    const prod = products[2]
    client.getProductBySlug.mockImplementation(() => new Promise (done => setTimeout(() => done(prod), 1500)) )
    const wrapper = mount(Products, {
      global: {
        plugins: [router]
      }
    })
    const title = wrapper.find('[data-testid="loading"]').text()
    expect(title).toEqual('Loading...')
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductBySlug and displays error when error thrown', async () => {
    client.getProductBySlug.mockImplementation(() => { throw new Error('Something went wrong') } )
    const wrapper = mount(Products, {
      global: {
        plugins: [router]
      }
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="error"]').text()
    expect(title).toContain('error')
    expect(client.getProductBySlug).toHaveBeenCalledTimes(1)
  })

})