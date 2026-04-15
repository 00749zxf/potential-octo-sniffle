import api from './index'

export const orderApi = {
  // 获取订单列表
  getOrders(params = {}) {
    return api.get('/orders', { params })
  },

  // 获取订单详情
  getOrderById(id) {
    return api.get(`/orders/${id}`)
  },

  // 创建订单
  createOrder(orderData) {
    return api.post('/orders', orderData)
  },

  // 取消订单
  cancelOrder(orderId) {
    return api.put(`/orders/${orderId}/cancel`)
  },

  // 确认收货
  confirmReceipt(orderId) {
    return api.put(`/orders/${orderId}/confirm`)
  },

  // 获取支付方式
  getPaymentMethods() {
    return api.get('/orders/payment-methods')
  },

  // 获取配送方式
  getShippingMethods() {
    return api.get('/orders/shipping-methods')
  },

  // 获取订单状态
  getOrderStatus() {
    return api.get('/orders/status')
  }
}