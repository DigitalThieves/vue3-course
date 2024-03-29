import LoginForm from '@/components/test-examples/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]') // Find text input

    input.setValue('Adam Jahr') // Set value for text input
    wrapper.trigger('submit') // Simulate form submission

    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
  it('does same as previous test but element found using data-testid', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('[data-testid="name-input"]') // Find text input

    input.setValue('Adam Jahr') // Set value for text input
    wrapper.trigger('submit') // Simulate form submission

    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})