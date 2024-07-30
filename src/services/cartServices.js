import { api } from './provider.js'

export const fetchCart = () => api.get('/')
export const addItemToCart = (item) => api.post('/', item)
export const removeItemFromCart = (id) => api.delete(`/${id}`)
export const updateCartItem = (id, newData) => api.put(`/${id}`, newData)
