import { mount } from '@vue/test-utils'
import Products from '@/pages/products.vue'
import products from '@/assets/db/products.json'

describe('Products.vue', () => {
  it('Renders the Loading... screen when isLoading is set to true', async () => {
    const sizes = products[3].colors[0].sizes
    const wrapper = mount(Products)
    await new Promise( (done, err) => 
      setTimeout(
        async () => {
          await wrapper.setData({
            isLoading: true
          })
          const isLoading = wrapper.find('[data-testid="loading"]')
          try {
            expect(isLoading.text()).toEqual('Loading...')
          } catch (e) {
            err(e)
          }
          done()
        },
        501
      )
      
    )
  })
})
