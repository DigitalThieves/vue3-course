import Categories from '@/pages/categories.vue'
import { mount } from '@vue/test-utils'
import client from '@/services/api-client.js'
import flushPromises from 'flush-promises'

jest.mock('@/services/api-client')
beforeEach(() => {
  jest.clearAllMocks()
})

type Client = {
  getProductsBySlug (cat: any): Promise<any>
}

const mocDep = jest.mocked(client)

const json = `
  { "category": "electronics", "description": "hello you", "products": [ { "id": 9, "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ", "price": 64, "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system", "category": "electronics", "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "rating": { "rate": 3.3, "count": 203 }, "slug": 9, "colors": [ { "color_name": "Black Melange", "colorhex": "#000", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" ] }, { "color_name": "White Snow", "colorhex": "#fff", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" ] } ] }, { "id": 10, "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "price": 109, "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "category": "electronics", "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 470 }, "slug": 10, "colors": [ { "color_name": "Black Melange", "colorhex": "#000", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" ] }, { "color_name": "White Snow", "colorhex": "#fff", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" ] } ] }, { "id": 11, "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "price": 109, "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", "category": "electronics", "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 319 }, "slug": 11, "colors": [ { "color_name": "Black Melange", "colorhex": "#000", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" ] }, { "color_name": "White Snow", "colorhex": "#fff", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" ] } ] }, { "id": 12, "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", "price": 114, "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty", "category": "electronics", "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "rating": { "rate": 4.8, "count": 400 }, "slug": 12, "colors": [ { "color_name": "Black Melange", "colorhex": "#000", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" ] }, { "color_name": "White Snow", "colorhex": "#fff", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" ] } ] }, { "id": 13, "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "price": 599, "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz", "category": "electronics", "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "rating": { "rate": 2.9, "count": 250 }, "slug": 13, "colors": [ { "color_name": "Black Melange", "colorhex": "#000", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" ] }, { "color_name": "White Snow", "colorhex": "#fff", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" ] } ] }, { "id": 14, "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", "price": 999.99, "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag", "category": "electronics", "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "rating": { "rate": 2.2, "count": 140 }, "slug": 14, "colors": [ { "color_name": "Black Melange", "colorhex": "#000", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" ] }, { "color_name": "White Snow", "colorhex": "#fff", "sizes": [ { "size": "one-size", "stock": 3 }, { "size": "two-size", "stock": 5 } ], "images": [ "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" ] } ] } ] }
`
const category = JSON.parse(json)

describe('Testing categories page', () => {
  it('Calls getProductsByCategory and displays correct title and description', async () => {
    mocDep.getProductsByCategory.mockResolvedValueOnce(new Promise<typeof category>(res => res(category)))
    const wrapper = mount(Categories, {
      global: {
        stubs: ['router-link'],
        mocks: {
          $route: { params: 'test-cat' }
        }
      },
    })
    await flushPromises()
    const title = wrapper.find('[data-testid="title"]')
    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual(category.category)
    const description = wrapper.find('[data-testid="description"]').text()
    expect(description).toContain(category.description)
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })

  it('Tests that router link is being used properly in breadcrumbs', async () => {
    mocDep.getProductsByCategory.mockResolvedValueOnce(new Promise<typeof category>(res => res(category)))
    const wrapper = mount(Categories, {
      global: {
        mocks: {
          $route: { params: category.category }
        },
        stubs: {
          'router-link': {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      }
    })
    await flushPromises()
    const title = wrapper.findAll('[data-test-id="stubbed-link"]')
    expect(title.length).toBeGreaterThan(0)
    expect(title[0].text()).toBe('SALT MERCH')
  })

  it('Calls getProductsByCategory and displays loading while waiting...', () => {
    mocDep.getProductsByCategory.mockResolvedValueOnce(new Promise<typeof category> (done => setTimeout(() => done(category), 1500)) )
    const wrapper = mount(Categories, {
      global: {
        mocks: {
          $route: { params: category.category }
        },
        stubs: {
          'router-link': {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      }
    })
    const title = wrapper.find('[data-testid="loading"]')
    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual('Loading...')
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })
  it('Calls getProductsByCategory and displays error when error thrown', async () => {
    mocDep.getProductsByCategory.mockResolvedValueOnce(new Promise<typeof category> ((done, err) => err('error')) )
    const wrapper = mount(Categories, {
      global: {
        mocks: {
          $route: { params: category.category }
        },
        stubs: {
          'router-link': {
            template: '<a data-test-id="stubbed-link"><slot /></a>'
          }
        }
      },
    })
    await flushPromises()
    const errorH1 = wrapper.find('[data-testid="error"]')
    expect(errorH1.exists()).toBe(true)
    expect(errorH1.text()).toContain('error')
    expect(client.getProductsByCategory).toHaveBeenCalledTimes(1)
  })
})