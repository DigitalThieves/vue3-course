import { mount } from '@vue/test-utils'
import AppHeader from '@/components/test-examples/AppHeader'

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader) // mounting the component 
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('if logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})