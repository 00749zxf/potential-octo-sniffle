import api from './index'

export const cartApi = {
  // 获取购物车列表
  getCart() {
    return api.get('/cart')
  },

  // 添加到购物车
  addToCart(item) {
    return api.post('/cart', item)
  },

  // 更新购物车商品数量
  updateCartItem(itemId, quantity) {
    return api.put(`/cart/${itemId}`, { quantity })
  },

  // 删除购物车商品
  removeCartItem(itemId) {
    return api.delete(`/cart/${itemId}`)
  },

  // 清空购物车
  clearCart() {
    return api.delete('/cart/clear')
  },

  // 更新商品选择状态
  updateItemSelection(itemId, selected) {
    return api.put(`/cart/${itemId}/selection`, { selected })
  },

  // 批量更新选择状态
  batchUpdateSelection(itemIds, selected) {
    return api.put('/cart/batch-selection', { itemIds, selected })
  }
}