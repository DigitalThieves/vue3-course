import products from './assets/db/products.json'

export default {
  getProductBySlug: slug =>
    new Promise(res =>
      setTimeout(
        () => res( products.filter(el => el.slug === slug )[0] ),
        500
      )
    )
}