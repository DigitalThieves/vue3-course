import store from '@/store'
import products from '@/assets/db/products'

beforeEach (() => {
  store.replaceState({
    cart: []
  })
})

const mockedAddProductInput = (product, color, size) => {
  return {
    ...product,
    colors: [{
      ...color,
      sizes: [{
        ...size
      }]
    }]
  }
}

const blue_tshirt_small = mockedAddProductInput(
  products[3],
  products[3].colors[0],
  products[3].colors[0].sizes[0]
)
const black_tshirt_small = mockedAddProductInput(
  products[3],
  products[3].colors[1],
  products[3].colors[1].sizes[0]
)
const blue_tshirt_xl = mockedAddProductInput(
  products[3],
  products[3].colors[0],
  products[3].colors[0].sizes[3]
)
const textilebag = mockedAddProductInput(
  products[2],
  products[2].colors[0],
  products[2].colors[0].sizes[0]
)

describe('Testing adding and removing items to cart', () => {
  test('that cart is empty upon initialization', async () => {
    expect(store.state.cart.length).toEqual(0)
  })
  test('that cart can add and remove a product from cart', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    expect(store.state.cart.length).toEqual(1)
    await store.dispatch('removeItem', store.state.cart.find(el => el.slug === blue_tshirt_small.slug))
    expect(store.state.cart.length).toEqual(0)
  })
  test('that cart has one product with quantity 2 upon dispatch of same product', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', blue_tshirt_small)
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(2)
  })
  test('that cart has two products with quantity 1 upon dispatch of two different products', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', textilebag)
    expect(store.state.cart.length).toEqual(2)
    expect(store.state.cart[0].quantity).toEqual(1)
    expect(store.state.cart[1].quantity).toEqual(1)
  })
  test('that cart has two products with quantity 2 and 1 upon dispatch of new product', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', textilebag)
    expect(store.state.cart.length).toEqual(2)
    expect(store.state.cart.find(el => el.slug === blue_tshirt_small.slug).quantity).toEqual(2)
    expect(store.state.cart.find(el => el.slug === textilebag.slug).quantity).toEqual(1)
  })
  test('that cart has one product with quantity 2 upon dispatch of removal of second product', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', textilebag)
    await store.dispatch('removeItem', store.state.cart.find(el => el.slug === textilebag.slug))
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(2)
  })
  test('that cart has one product with quantity 1 upon dispatch of removal of first product', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('removeItem', store.state.cart.find(el => el.slug === blue_tshirt_small.slug))
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(1)
  })
})

describe('Testing adding and removing same items but with various colors and sizes to cart', () => {
  test('that cart gets two products upon dispatch of products with various colors', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', black_tshirt_small)
    expect(store.state.cart.length).toEqual(2)
    expect(store.state.cart[0].quantity).toEqual(1)
    expect(store.state.cart[1].quantity).toEqual(1)
  })
  test('that cart gets two products upon dispatch of products with various sizes', async () => {
    await store.dispatch('addItem', blue_tshirt_small)
    await store.dispatch('addItem', blue_tshirt_xl)
    expect(store.state.cart.length).toEqual(2)
    expect(store.state.cart[0].quantity).toEqual(1)
    expect(store.state.cart[1].quantity).toEqual(1)
  })
})
