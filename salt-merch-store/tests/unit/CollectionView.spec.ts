import CollectionView from '@/components/CollectionView.vue'
import { DOMWrapper, mount, RouterLinkStub } from '@vue/test-utils'

const prod1 = {
  slug: 'prod1',
  colors: [{
    images: [ 'https://picsum.photos/200/300' ],
    color_name: 'white'
  }],
  title: 'prod1',
  description: 'Some random description you know',
  price: '129'
}

const prod2 = {
  slug: 'prod2',
  colors: [{
    images: [ 'https://picsum.photos/200/300' ],
    color_name: 'black'
  }],
  title: 'prod2',
  description: 'Some random description you know',
  price: '89'
}

describe('Testing components ability to display products & info in a grid', () => {
  it('should display 2 products', () => {
    const wrapper = mount(CollectionView, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        collection: [prod1, prod2]
      }
    })
    const prods = wrapper.findAll('[data-testid="collection-product"]')
    expect(prods.length).toBe(2)
  })
  it('should display 4 products', () => {
    const wrapper = mount(CollectionView, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        collection: [prod1, prod2, prod1, prod2]
      }
    })
    const prods = wrapper.findAll('[data-testid="collection-product"]')
    expect(prods.length).toBe(4)
  })
  it('should display products in grids of two for mobile, three for tablets and 4 for desktop', () => {
    const wrapper = mount(CollectionView, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        collection: [prod1, prod2, prod1, prod2]
      }
    })
    const prods = wrapper.findAll('[data-testid="collection-product"]')
    prods.forEach((prod: DOMWrapper<Element>) => {
      expect(prod.classes()).toContain('col-6')
      expect(prod.classes()).toContain('col-md-4')
      expect(prod.classes()).toContain('col-lg-3')
    })
  })
})
it('should display image, title and price', () => {
  const wrapper = mount(CollectionView, {
    global: {
      stubs: {
        'router-link': RouterLinkStub
      }
    },
    props: {
      collection: [prod1, prod2, prod1, prod2]
    }
  })
  const prods = wrapper.findAll('[data-testid="collection-product"]')
  prods.forEach((prod: DOMWrapper<Element>, i: number) => {
    const product = (i % 2 == 0) ? prod1 : prod2
    expect(prod.find('img').exists()).toBeTruthy()
    expect(prod.find('[data-testid="collection-product-title"]').exists()).toBeTruthy()
    expect(prod.find('[data-testid="collection-product-price"]').exists()).toBeTruthy()
    expect(prod.find('[data-testid="collection-product-title"]').text()).toContain(product.title)
    expect(prod.find('[data-testid="collection-product-price"]').text()).toContain(product.price)
  })
})

describe('Component should be able to filter and search', () => {
  it.skip('should react appropiately to filter options', async () => {
    const wrapper = mount(CollectionView, {
      global: {
        stubs: {
          'router-link': RouterLinkStub,
          'filter-options': true,
          'search-input': true,
        }
      },
      props: {
        collection: [prod1, prod2, prod1, prod2]
      }
    })
    const filter = wrapper.find('filter-options-stub')
    expect(filter.exists()).toBeTruthy()
    await filter.trigger('update:option', {
      price: {
        min: 0,
        max: 100
      }
    })
    const prods = wrapper.findAll('[data-testid="collection-product"]')
    expect(prods.length).toBe(2)
    prods.forEach((prod: DOMWrapper<Element>, i: number) => {
      const product = prod2
      expect(prod.find('[data-testid="collection-product-title"]').text()).toContain(product.title)
      expect(prod.find('[data-testid="collection-product-price"]').text()).toContain(product.price)
    })
  })
  it('should filter from search', async () => {
    const wrapper = mount(CollectionView, {
      global: {
        stubs: {
          'router-link': RouterLinkStub,
          'search-input': true,
          'filter-options': true,
        }
      },
      props: {
        collection: [prod1, prod2, prod1, prod2]
      }
    })
    const search = wrapper.find('search-input-stub')
    expect(search.exists()).toBeTruthy()
    await (wrapper.findComponent('search-input-stub') as any).vm.$emit('search', 'prod1')
    const prods = wrapper.findAll('[data-testid="collection-product"]')
    expect(prods.length).toBe(2)
    prods.forEach((prod: DOMWrapper<Element>, i: number) => {
      const product = prod1
      expect(prod.find('[data-testid="collection-product-title"]').text()).toContain(product.title)
      expect(prod.find('[data-testid="collection-product-price"]').text()).toContain(product.price)
    })
  })
})