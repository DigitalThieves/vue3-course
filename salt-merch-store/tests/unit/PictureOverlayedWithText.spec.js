import PictureOverlayedWithText from '@/components/PictureOverlayedWithText'
import { mount } from '@vue/test-utils'

describe('Testing Cart Icon', () => {
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
})
