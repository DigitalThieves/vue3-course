let port = '3001'

const baseUrl = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  port = params.port || port
  return `http://localhost:${port}/api/`
}
const handleRes = async res => {
  if (res.ok)
    return res.json()
  throw new Error((await res.json()).message)
}

export const getProductBySlug = slug => fetch(`${baseUrl()}products/${slug}`).then(handleRes)
export const getAllProducts = () => fetch(`${baseUrl()}products/`).then(handleRes)
export const getProductsByCategory = category => fetch(`${baseUrl()}categories/${category}`).then(handleRes)

export const setProductStock = (slug, cartItem) => fetch(`${baseUrl()}products/${slug}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(cartItem)
}).then(handleRes)

export const resetCart = () => fetch(`${baseUrl()}carts/reset`).then(handleRes)
export const getCart = id => fetch(`${baseUrl()}carts/${id}`).then(handleRes)
export const setCart = (id, item, action) => fetch(`${baseUrl()}carts/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    item,
    [action]: true
  })
}).then(handleRes)
export const setPort = newPort => port = newPort

const allTogether = {
  getProductBySlug,
  getAllProducts,
  getProductsByCategory
}

export default allTogether