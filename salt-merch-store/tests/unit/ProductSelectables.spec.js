import ProductSelectables from '@/components/ProductSelectables'
import { mount } from '@vue/test-utils'
import products from '@/assets/db/products.json'

describe('ProductSelectables.vue', () => {
  it('Checks if ProductSelectables renders correct amount of selectables given type colors', async () => {
    const product = products[1]
    const wrapper = mount(ProductSelectables, {
      propsData: {
        selectablesType: 'colors',
        selectables: product.colors,
        activeIndex: 0
      }
    })
    const selectables = wrapper.findAll('[data-testid="selectable"]')
    expect(selectables).toHaveLength(product.colors.length)
  })
  it('Checks if ProductSelectables renders correct amount of selectables given type images', async () => {
    const product = products[1]
    const wrapper = mount(ProductSelectables, {
      propsData: {
        selectablesType: 'images',
        selectables: product.colors[0].images,
        activeIndex: 0
      }
    })
    const selectables = wrapper.findAll('[data-testid="selectable"]')
    expect(selectables).toHaveLength(product.colors[0].images.length)
  })
  it('Checks if ProductSelectables renders correct amount of selectables given type sizes', async () => {
    const product = products[1]
    const wrapper = mount(ProductSelectables, {
      propsData: {
        selectablesType: 'sizes',
        selectables: product.colors[0].sizes,
        activeIndex: 0
      }
    })
    const selectables = wrapper.findAll('[data-testid="selectable"]')
    expect(selectables).toHaveLength(product.colors[0].sizes.length)
  })
  it('Checks if ProductSelectables emits the right index at click', async () => {
    const product = products[3]
    const colors_wrapper = mount(ProductSelectables, {
      propsData: {
        selectablesType: 'colors',
        selectables: product.colors,
        activeIndex: 0
      }
    })
    const colors_selectables = colors_wrapper.findAll('[data-testid="selectable"]')
    colors_selectables[product.colors.length - 1].trigger('click')
    const colors_events = colors_wrapper.emitted('update:active-index')
    expect(colors_events).toHaveLength(1)
    expect(colors_events[0][0]).toEqual(product.colors.length - 1)


    const images_wrapper = mount(ProductSelectables, {
      propsData: {
        selectablesType: 'images',
        selectables: product.colors[1].images,
        activeIndex: 0
      }
    })
    const images_selectables = images_wrapper.findAll('[data-testid="selectable"]')
    images_selectables[product.colors[1].images.length - 1].trigger('click')
    const images_events = images_wrapper.emitted('update:active-index')
    expect(images_events).toHaveLength(1)
    expect(images_events[0][0]).toEqual(product.colors[1].images.length - 1)


    const sizes_wrapper = mount(ProductSelectables, {
      propsData: {
        selectablesType: 'sizes',
        selectables: product.colors[1].sizes,
        activeIndex: 0
      }
    })
    const sizes_selectables = sizes_wrapper.findAll('[data-testid="selectable"]')
    sizes_selectables[product.colors[1].sizes.length - 1].trigger('click')
    const sizes_events = sizes_wrapper.emitted('update:active-index')
    expect(sizes_events).toHaveLength(1)
    expect(sizes_events[0][0]).toEqual(product.colors[1].sizes.length - 1)
  })

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
    const colors_events = colors_wrapper.emitted('update:active-index')
    expect(colors_events).toHaveLength(1)
    expect(colors_events[0][0]).toEqual(colors.length - 1)
  })

})


