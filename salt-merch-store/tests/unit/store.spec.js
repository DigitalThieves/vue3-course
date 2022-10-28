import store from '@/store'
import products from '@/assets/db/products'

describe('Testing that store does what its suppose to do', () => {
  test('that cart is empty upon initialization', async () => {
    expect(store.state.cart.length).toEqual(0)
  })
  test('that cart gets one product upon dispatch', async () => {
    await store.dispatch('addItem', products[2])
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(1)
  })
  test('that cart still has one product with quantity 2 upon dispatch of same product', async () => {
    await store.dispatch('addItem', products[2])
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(2)
  })
  test('that cart has two products with quantity 2 and 1 upon dispatch of new product', async () => {
    await store.dispatch('addItem', products[3])
    expect(store.state.cart.length).toEqual(2)
    expect(store.state.cart.find(el => el.slug === products[2].slug).quantity).toEqual(2)
    expect(store.state.cart.find(el => el.slug === products[3].slug).quantity).toEqual(1)
  })
  test('that cart has one product with quantity 2 upon dispatch of removal of second product', async () => {
    await store.dispatch('removeItem', store.state.cart.find(el => el.slug === products[3].slug))
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(2)
  })
  test('that cart has one product with quantity 2 upon dispatch of removal of first product', async () => {
    await store.dispatch('removeItem', store.state.cart.find(el => el.slug === products[2].slug))
    expect(store.state.cart.length).toEqual(1)
    expect(store.state.cart[0].quantity).toEqual(1)
  })
})