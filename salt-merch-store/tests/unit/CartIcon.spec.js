import CartIcon from '@/components/Cart/CartIcon'
import { mount } from '@vue/test-utils'
import store from '@/store/index'
import router from '@/router'

const test_item_one = {
  slug: 'test-item',
  category: 'bags',
  colors: [
    {
      color_name: 'Test Black',
      colorhex: '#000',
      sizes: [
        {
          size: 'one-size',
          stock: 3
        }
      ],
      images: [
        'images/salt-store-items/shopping-bag/01.jpg'
      ]
    }
  ],
  title: 'Test Title',
  description: "<p>Salt makes awesome Shopping Bags. Get yo'self one immediately before they run out. Go on, don't be shy.</p><p>We take orders fo sure!</p>",
}


describe('Testing Cart Icon', () => {
  it('Checks if CartIcon has zero height by default', async () => {
    const wrapper = mount(CartIcon, {
      global: {
        plugins: [store, router],
        stubs: {
          CartList: {
            template: '<div class="w-full text-left">bunch of stuff</div>'
          }
        }
      }
    })
    const cartIconContainers = wrapper.findAll('[data-testid="expanded-class"]')
    expect(cartIconContainers.length).toEqual(1)
    const cartIconContainer = cartIconContainers[0]
    let classes = cartIconContainer.classes()
    expect(classes).not.toContain('expanded')
  })

  it('Checks if CartIcon has more than zero height after adding a product in cart', async () => {
    const wrapper = mount(CartIcon, {
      global: {
        plugins: [store, router],
        stubs: {
          CartList: {
            template: '<div class="w-full text-left">bunch of stuff</div>'
          }
        }
      }
    })
    const cartIconContainers = wrapper.findAll('[data-testid="expanded-class"]')
    expect(cartIconContainers.length).toEqual(1)
    const cartIconContainer = cartIconContainers[0]
    await store.dispatch('addItem', test_item_one)
    let classes = cartIconContainer.classes()
    expect(classes).toContain('expanded')
    
  })
})


