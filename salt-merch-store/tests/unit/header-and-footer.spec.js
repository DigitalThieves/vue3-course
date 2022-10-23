import router from '@/router'

jest.mock('@/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})


describe('Testing Router File for Collection', () => {
  it('Should be a Vue Plugin with category route', () => {
    expect(router).toBeTruthy()
    expect(router.currentRoute).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/'))
    ).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/')).components
    ).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/')).components.header
    ).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/about')).components.header
    ).toBeTruthy()
    expect(
      router.options.routes.find(el => el.path.startsWith('/about')).components.header
    ).toBeTruthy()
    console.log(router.options.routes.find(el => el.path.startsWith('/about')).components.header.render())
    expect(
      router.options.routes.find(el => el.path.startsWith('/about')).components.header
    ).toBeTruthy()
  })
})
