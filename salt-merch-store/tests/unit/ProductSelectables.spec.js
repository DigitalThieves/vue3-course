import { mount } from '@vue/test-utils'
import ProductSelectables from '@/components/ProductSelectables.vue'
import products from '@/assets/db/products.json'

describe('ProductSelectables.vue', () => {
  it('Renders the correct amount of selectable sizes', () => {
    const sizes = products[3].colors[0].sizes
    const wrapper = mount(ProductSelectables, {
      props: {
        selectablesType: 'sizes',
        selectables: sizes,
        activeIndex: 0
      },
    })
    const selectables = wrapper.findAll('[data-testid="selectable"]')
    expect(selectables).toHaveLength(sizes.length)
  })
  it('Renders the correct amount of selectable sizes', () => {
    const sizes = products[3].colors[0].sizes
    const wrapper = mount(ProductSelectables, {
      props: {
        selectablesType: 'sizes',
        selectables: sizes,
        activeIndex: 2
      },
    })
    const selectables = wrapper.findAll('[data-testid="selectable"]')
    expect(selectables[2].attributes().class).toContain('bg-dark text-white')
  })
})
