import PictureOverlayedWithText from '@/components/PictureOverlayedWithText'
import { mount } from '@vue/test-utils'

describe('PictureOverlayedWithText.vue', () => {
  it('Checks if PictureOverlayedWithText renders correct amount of selectables given type colors', async () => {
    const wrapper = mount(PictureOverlayedWithText, {
      slots: {
        default: '<h1>default slot</h1>',
        overlay: '<h1>overlay slot</h1>',
      }
    })
    const hOnes = wrapper.findAll('h1')
    expect(hOnes[1].html()).toBe('<h1>default slot</h1>')
    expect(hOnes[0].html()).toBe('<h1>overlay slot</h1>')
  })

  it('Renders slots in the right place', () => {
    const wrapper = mount(PictureOverlayedWithText , {
      slots: {
        default: `
          <div id="default-slot-stub">
            stub
          </div>
        `,
        overlay: `
          <div id="overlay-slot-stub">
            stub
          </div>
        `
      },
    })
    const defContainer = wrapper.find('[data-testid="default-slot-container"]')
    expect(defContainer.exists()).toBe(true)
    const defaultSlotStub = defContainer.find('#default-slot-stub')
    const namedSlotStub = wrapper.find('#overlay-slot-stub')
    expect(defaultSlotStub.exists()).toBe(true)
    expect(namedSlotStub.exists()).toBe(true)
    expect(defaultSlotStub.text()).toBe('stub')
    expect(namedSlotStub.text()).toBe('stub')
  })
})
