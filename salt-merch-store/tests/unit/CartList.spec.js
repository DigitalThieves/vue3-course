import CartList from '@/components/Cart/CartList'
import { mount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'

describe('Testing Router File', () => {
  it('Should be a Vue Plugin with cart route', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/cart'))
    ).toBeTruthy()
  })
})

store.dispatch('addItem', {
    slug: 'baggie-salt-shopping-bag',
    category: 'bags',
    colors: [
      {
        color_name: 'Baggie Black',
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
    title: 'Baggie Salt Shopping Bag',
    description: "<p>Salt makes awesome Shopping Bags. Get yo'self one immediately before they run out. Go on, don't be shy.</p><p>We take orders fo sure!</p>",
  }
)

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


describe('Testing Cart List', () => {
  it('checks if cartList has one item with quantity 1', async () => {
    const wrapper = mount(CartList, {
      global: {
        plugins: [store, router]
      }
    })
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toEqual(1)
    const listItem = listItems[0]
    let liHTML = listItem.html()
    expect(liHTML).toContain('Baggie Salt Shopping Bag / Baggie Black / <span class=\"text-capitalize\">one-size</span')
    expect(liHTML).toContain('<span> Qty: 1</span>')
  })

  it('checks if cartList adds a quantity when plus-button is clicked', async () => {
    const wrapper = mount(CartList, {
      global: {
        plugins: [store, router]
      }
    })
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toEqual(1)
    const listItem = listItems[0]
    const buttons = listItem.findAll('[data-testid="addBtn"]')
    await buttons[0].trigger('click')
    const liHTML = listItem.html()
    expect(liHTML).toContain('Baggie Salt Shopping Bag / Baggie Black / <span class=\"text-capitalize\">one-size</span')
    expect(liHTML).toContain('<span> Qty: 2</span>')
  })
  test('that store has one item with quantity 2', async () => {
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(2)
  })
  test('that cart list grows when adding a different item to list', async () => {
    const wrapper = mount(CartList, {
      global: {
        plugins: [store, router]
      }
    })
    await store.dispatch('addItem', test_item_one)
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toEqual(2)
    expect(store.state.cart.length).toEqual(2)
    expect(listItems.length).toEqual(store.state.cart.length)
    const listItem = listItems[1]
    const buttons = listItem.findAll('[data-testid="addBtn"]')
    await buttons[0].trigger('click')
    await buttons[0].trigger('click')
    await buttons[0].trigger('click')
    await buttons[0].trigger('click')
    let liHTML = listItem.html()
    expect(liHTML).toContain('Test Title / Test Black / <span')
    expect(liHTML).toContain('<span> Qty: 5</span>')

    const button = listItem.find('[data-testid="removeBtn"]')
    await button.trigger('click')
    liHTML = listItem.html()
    expect(liHTML).toContain('<span> Qty: 4</span>')
  })
})


