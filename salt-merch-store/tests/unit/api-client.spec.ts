import apiClient from '@/services/api-client'

beforeEach(() => {
  jest.clearAllMocks()
})

const prod = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'men\'s clothing',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating:  {
    rate: 3.9,
    count: 120
  }
}

const prod2 = {
  id: 2,
  title: 'Hittepåräven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 209.95,
  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: 'men\'s clothing',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating:  {
    rate: 4.9,
    count: 120
  }
}

describe('Testing Fetchers & Adapters', () => {
  it('should fetch a product and adapt it to Presentation Layer', async () => {
    let calledUrl = ''
    globalThis.fetch = jest.fn(
      async (url: string) => {
        calledUrl = url
        return {
          json: async () => prod
        }
      }
    ) as jest.Mock
    const fetched = await apiClient.getProductBySlug('test-slug')
    expect(calledUrl.endsWith('test-slug')).toBeTruthy()
    expect(fetched.title).toBe(prod.title)
    expect(fetched.colors.length).toBe(2)
    expect(fetched.colors[0].sizes.length).toBe(2)
    expect(fetched.colors[0].sizes[0].stock).toBe(3)
    expect(fetched.colors[0].images.length).toBe(3)
    expect(fetched.colors[0].images[0]).toBe(prod.image)
  })
  it('should fetch all products and adapt it to Presentation Layer', async () => {
    globalThis.fetch = jest.fn(
      async (url: string) => ({
        json: async () => [prod, prod2]
      })
    ) as jest.Mock
    const fetched = await apiClient.getAllProducts()
    expect(fetched.length).toBe(2)
    expect(fetched[0].title).toBe(prod.title)
    expect(fetched[0].colors.length).toBe(2)
    expect(fetched[0].colors[0].sizes.length).toBe(2)
    expect(fetched[0].colors[0].sizes[0].stock).toBe(3)
    expect(fetched[0].colors[0].images.length).toBe(3)
    expect(fetched[0].colors[0].images[0]).toBe(prod.image)
    expect(fetched[1].title).toBe(prod2.title)
    expect(fetched[1].colors.length).toBe(2)
    expect(fetched[1].colors[0].sizes.length).toBe(2)
    expect(fetched[1].colors[0].sizes[0].stock).toBe(3)
    expect(fetched[1].colors[0].images.length).toBe(3)
    expect(fetched[1].colors[0].images[0]).toBe(prod2.image)
  })
  it('should fetch all products belonging to a category and adapt it to Presentation Layer', async () => {
    let calledUrl = '';
    globalThis.fetch = jest.fn(
      async (url: string) => {
        calledUrl = url
        return {
          json: async () => [prod, prod2]
        }
      }
    ) as jest.Mock
    const fetched = await apiClient.getProductsByCategory('test-slug')
    expect(fetched.category).toBe('test-slug')
    expect(calledUrl.endsWith('test-slug')).toBeTruthy()
    expect(fetched.products.length).toBe(2)
    expect(fetched.products[0].title).toBe(prod.title)
    expect(fetched.products[0].colors.length).toBe(2)
    expect(fetched.products[0].colors[0].sizes.length).toBe(2)
    expect(fetched.products[0].colors[0].sizes[0].stock).toBe(3)
    expect(fetched.products[0].colors[0].images.length).toBe(3)
    expect(fetched.products[0].colors[0].images[0]).toBe(prod.image)
    expect(fetched.products[1].title).toBe(prod2.title)
    expect(fetched.products[1].colors.length).toBe(2)
    expect(fetched.products[1].colors[0].sizes.length).toBe(2)
    expect(fetched.products[1].colors[0].sizes[0].stock).toBe(3)
    expect(fetched.products[1].colors[0].images.length).toBe(3)
    expect(fetched.products[1].colors[0].images[0]).toBe(prod2.image)
  })
})