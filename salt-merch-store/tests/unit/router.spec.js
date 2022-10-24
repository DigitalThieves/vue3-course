import router from '@/router'

jest.mock('@/services/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})


describe('Testing Router File', () => {
  it('Should have route with \'/\' as path', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(router.options.routes.find(el => el.path.startsWith('/'))).toBeTruthy()
  })
})
