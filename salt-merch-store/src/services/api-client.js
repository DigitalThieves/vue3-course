export default {
  getProductBySlug: slug => fetch(`https://fakestoreapi.com/products/${slug}`)
    .then(res=> res.json())
    .then(pr => convertProduct(pr))
    .catch(e => {
      alert('something went wrong, check it out, please');
      throw e
    }),

  getAllProducts: () => fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => data.map(
        pr => convertProduct(pr)
      )
    )
    .catch(e => {
      alert('something went wrong, check it out, please');
      throw e
    }),

  getProductsByCategory: category => fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(data => {
      const products = data.map(
        pr => convertProduct(pr)
      )
      return {
        category,
        products
      }
    }
  ),
}

const convertProduct = pr => ({
    ...pr,
    slug: pr.id,
    colors: [{
      color_name: 'Black Melange',
      colorhex: '#000',
      sizes: [{
        size: 'one-size',
        stock: 3
      }, {
        size: 'two-size',
        stock: 5
      }],
      images: [pr.image, pr.image, pr.image]
    }, {
      color_name: 'White Snow',
      colorhex: '#fff',
      sizes: [{
        size: 'one-size',
        stock: 3
      }, {
        size: 'two-size',
        stock: 5
      }],
      images: [pr.image, pr.image, pr.image]
    }]
  })