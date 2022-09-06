import CategoriesNav from '@/components/CategoriesNav'
import { mount } from '@vue/test-utils'
import router from '@/router'

describe('Testing Cart Icon', () => {
  it('Checks if CategoriesNav renders correct amount of selectables given type colors', async () => {
    const wrapper = mount(CategoriesNav, {
      global: {
        plugins: [router],
      },
      attrs: {
        class: 'hello'
      }
    })
    expect(wrapper.find('[data-testid="attrs"]').classes('hello')).toBe(true)
  })
  it('Checks if CategoriesNav renders correct amount of selectables given type images', async () => {
    const wrapper = mount(CategoriesNav, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.find('[data-testid="attrs"]').classes().length).toEqual(0)
  })
})