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
  it('Sets active classes on active index', () => {
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
    expect(selectables[1].attributes().class).not.toContain('bg-dark text-white')
  })
  it('Emits event with correct index when an item at index is clicked', () => {
    const colors = products[3].colors
    const colors_wrapper = mount(ProductSelectables, {
      props: {
        selectablesType: 'colors',
        selectables: colors,
        activeIndex: 0
      },
    })
    const colors_selectables = colors_wrapper.findAll('[data-testid="selectable"]')
    colors_selectables[colors.length - 1].trigger('click')
    const colors_events = colors_wrapper.emitted('update:activeIndex')
    expect(colors_events).toHaveLength(1)
    expect(colors_events[0][0]).toEqual(colors.length - 1)
  })
})
