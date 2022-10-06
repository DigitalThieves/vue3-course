import { mount } from '@vue/test-utils'
import Products from '@/pages/products.vue'
import products from '@/assets/db/products.json'

describe('Products.vue', () => {
  it('Renders the Loading... screen when isLoading is set to true', async () => {
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
  it('Renders the Error screen when isLoading is set to true', async () => {
    // const sizes = products[3].colors[0].sizes
    const wrapper = mount(Products)
    await new Promise( (done, err) => 
      setTimeout(
        async () => {
          await wrapper.setData({
            error: 'Err Message',
          })
          const error = wrapper.find('[data-testid="error"]')
          try {
            expect(error.text()).toEqual('Err Message')
          } catch (e) {
            err(e)
          }
          done()
        },
        501
      )
      
    )
  })
  it('Renders the title and description when product is set', async () => {
    const product = products[3]
    const wrapper = mount(Products)
    await new Promise( (done, err) => 
      setTimeout(
        async () => {
          await wrapper.setData({
            product
          })
          const title = wrapper.find('[data-testid="title"]')
          const description = wrapper.find('[data-testid="description"]')
          try {
            expect(title.text()).toEqual(product.title)
            expect(description.html().replaceAll(/\n|\t|( {2})/g, '')).toContain(`<div data-testid="description">${product.description.trim()}</div>`)
          } catch (e) {
            err(e)
          }
          done()
        },
        501
      )
    )
  })
  it('Tests that both currentColor computed value work as expected', () => {
    const product = products[3]
    const colorIndex = 1
    const localThis = {
      product,
      colorIndex
    }
    expect(Products.computed.currentColor.call(localThis)).toBe(product.colors[colorIndex])
  })
  it('Tests that currentImage computed value work as expected', () => {
    const currentColor = products[3].colors[1]
    const localThis = {
      imgIndex: 1,
      currentColor
    }
    expect(Products.computed.currentImage.call(localThis)).toEqual(currentColor.images[1])
  })
})
