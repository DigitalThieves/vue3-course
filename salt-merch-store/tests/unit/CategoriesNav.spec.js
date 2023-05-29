import CategoriesNav from '@/components/CategoriesNav'
import { mount } from '@vue/test-utils'

describe('CategoriesNav.vue', () => {
  it('Checks if CategoriesNav renders correct amount of selectables given type colors', async () => {
    const wrapper = mount(CategoriesNav, {
      global: {
        stubs: ['router-link']
      },
      attrs: {
        class: 'hello'
      }
    })
    expect(wrapper.find('[data-testid="root-w-attr"]').classes('hello')).toBe(true)
  })
  it('Checks if CategoriesNav renders correct amount of selectables given type images', async () => {
    const wrapper = mount(CategoriesNav, {
      global: {
        stubs: ['router-link']
      },
    })
    expect(wrapper.find('[data-testid="root-w-attr"]').classes().length).toEqual(0)
  })
  it('Renders slots in the right place', () => {
    const gibberish = 'whatever doesnt matter just gonna test it'
    const wrapper = mount(CategoriesNav , {
      attrs: {
        'data-test-attributes': gibberish
      },
      global: {
        stubs: {
          RouterLink: {
            template: '<a><slot /></a>'
          }
        }
      }
    })
    const rootWAttr = wrapper.find('[data-testid="root-w-attr"]')
    expect(rootWAttr.attributes()['data-test-attributes']).toBe(gibberish)
    const rootsWoAttr = wrapper.findAll('[data-testid="root-wo-attr"]')
    rootsWoAttr.forEach(rootWoAttr => expect(rootWoAttr.attributes()['data-test-attributes']).not.toBe(gibberish))
  })
})
