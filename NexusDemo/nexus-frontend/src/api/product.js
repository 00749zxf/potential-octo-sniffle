import api from './index'

export const productApi = {
  // 获取产品列表
  getProducts(params = {}) {
    return api.get('/products', { params })
  },

  // 获取产品详情
  getProductById(id) {
    return api.get(`/products/${id}`)
  },

  // 搜索产品
  searchProducts(keyword, params = {}) {
    return api.get('/products/search', {
      params: { q: keyword, ...params }
    })
  },

  // 获取推荐产品
  getFeaturedProducts() {
    return api.get('/products/featured')
  },

  // 获取产品分类
  getCategories() {
    return api.get('/categories')
  },

  // 获取产品评价
  getProductReviews(productId, params = {}) {
    return api.get(`/products/${productId}/reviews`, { params })
  },

  // 添加产品评价
  addProductReview(productId, review) {
    return api.post(`/products/${productId}/reviews`, review)
  }
}