import { mount } from '@vue/test-utils'
import PictureOverlayedWithText from '@/components/PictureOverlayedWithText.vue'

describe('PictureOverlayedWithText.vue', () => {
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
    const defaultSlotStub = defContainer.find('#default-slot-stub')
    const namedSlotStub = wrapper.find('#overlay-slot-stub')
    expect(defaultSlotStub.exists()).toBe(true)
    expect(namedSlotStub.exists()).toBe(true)
    expect(defaultSlotStub.text()).toBe('stub')
    expect(namedSlotStub.text()).toBe('stub')
  })
})
