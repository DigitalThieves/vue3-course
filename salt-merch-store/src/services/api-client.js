import products from './assets/db/products.json'
import categories from './assets/db/categories.json'

export default {
  getProductBySlug: slug =>
    new Promise(res =>
      setTimeout(
        () => res( products.filter(el => el.slug === slug )[0] ),
        250
      )
    ),
  getAllProducts: () =>
    new Promise(res =>
      setTimeout(
        () => res( products ),
        250
      )
    ),
  getProductsByCategory: category_slug =>
    new Promise(res =>
      setTimeout(
        () => {
          const cat_prod = products.filter(el => el.category === category_slug )
          const category = categories.filter(el => el.category === category_slug )[0] 
          res( { ...category, products: cat_prod } )
        },
        250
      )
    )
}