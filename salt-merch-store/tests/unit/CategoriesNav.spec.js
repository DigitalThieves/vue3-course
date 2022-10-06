import { mount } from '@vue/test-utils'
import CategoriesNav from '@/components/CategoriesNav.vue'

describe('CategoriesNav.vue', () => {
  it('Renders slots in the right place', () => {
    const gibberish = 'whatever doesnt matter just gonna test it'
    const wrapper = mount(CategoriesNav , {
      attrs: {
        'data-test-attributes': gibberish
      }
    })
    const rootWAttr = wrapper.find('[data-testid="root-w-attr"]')
    expect(rootWAttr.attributes()['data-test-attributes']).toBe(gibberish)
    const rootWoAttr = wrapper.find('[data-testid="root-wo-attr"]')
    expect(rootWoAttr.attributes()['data-test-attributes']).not.toBe(gibberish)
  })
})
