import MessageDisplay from '@/components/test-examples/MessageDisplay'
import { mount } from '@vue/test-utils'
import client from '@/services/api-client'
import flushPromises from 'flush-promises'
jest.mock('@/services/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db' 
    client.getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)
    await flushPromises()
    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual(mockMessage)
    expect(client.getMessage).toHaveBeenCalledTimes(1)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    client.getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(client.getMessage).toHaveBeenCalledTimes(1)
    const displayedError = wrapper.find('[data-testid="message-error"]').text()
    expect(displayedError).toEqual(mockError)
  })
})