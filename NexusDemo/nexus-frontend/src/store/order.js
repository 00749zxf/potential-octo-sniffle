import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

export const useOrderStore = defineStore('order', () => {
  // 订单列表
  const orders = ref([])
  const currentOrder = ref(null)
  const isLoading = ref(false)

  // 加载订单列表
  const loadOrders = async (params = {}) => {
    try {
      isLoading.value = true
      // TODO: 调用API获取订单列表
      // const response = await api.get('/orders', { params })
      // orders.value = response.data

      // 模拟数据
      orders.value = [
        {
          id: 'ORD20260001',
          status: 'paid',
          statusText: '待发货',
          totalAmount: 4198,
          itemCount: 2,
          createdAt: '2026-04-10 14:30:00',
          items: [
            {
              productId: 1,
              name: '智能手表 Pro Max 2026',
              image: '/images/product1.jpg',
              price: 3299,
              quantity: 1,
              specs: [
                { name: '颜色', value: '深空黑色' },
                { name: '尺寸', value: '45mm' }
              ]
            },
            {
              productId: 2,
              name: '无线耳机 Pro',
              image: '/images/product2.jpg',
              price: 899,
              quantity: 1,
              specs: [
                { name: '颜色', value: '白色' }
              ]
            }
          ],
          shippingAddress: {
            name: '张三',
            phone: '13800138000',
            province: '北京市',
            city: '北京市',
            district: '朝阳区',
            detail: '某某街道123号',
            postalCode: '100000'
          },
          paymentMethod: 'alipay',
          shippingMethod: 'standard',
          shippingFee: 0,
          discountAmount: 300
        },
        {
          id: 'ORD20260002',
          status: 'shipped',
          statusText: '已发货',
          totalAmount: 899,
          itemCount: 1,
          createdAt: '2026-04-08 10:15:00',
          items: [
            {
              productId: 2,
              name: '无线耳机 Pro',
              image: '/images/product2.jpg',
              price: 899,
              quantity: 1,
              specs: [
                { name: '颜色', value: '白色' }
              ]
            }
          ],
          shippingAddress: {
            name: '李四',
            phone: '13900139000',
            province: '上海市',
            city: '上海市',
            district: '浦东新区',
            detail: '某某路456号',
            postalCode: '200000'
          },
          paymentMethod: 'wechat',
          shippingMethod: 'express',
          shippingFee: 10,
          discountAmount: 0,
          trackingNumber: 'SF1234567890',
          shippedAt: '2026-04-09 09:00:00'
        },
        {
          id: 'ORD20260003',
          status: 'completed',
          statusText: '已完成',
          totalAmount: 2999,
          itemCount: 1,
          createdAt: '2026-04-01 16:45:00',
          items: [
            {
              productId: 4,
              name: '运动手环',
              image: '/images/product4.jpg',
              price: 2999,
              quantity: 1,
              specs: [
                { name: '颜色', value: '黑色' }
              ]
            }
          ],
          shippingAddress: {
            name: '王五',
            phone: '13700137000',
            province: '广东省',
            city: '深圳市',
            district: '南山区',
            detail: '某某科技园789号',
            postalCode: '518000'
          },
          paymentMethod: 'alipay',
          shippingMethod: 'standard',
          shippingFee: 0,
          discountAmount: 100,
          completedAt: '2026-04-05 14:30:00'
        }
      ]
    } catch (error) {
      console.error('加载订单列表失败:', error)
      ElMessage.error('加载订单列表失败')
    } finally {
      isLoading.value = false
    }
  }

  // 获取单个订单详情
  const getOrderById = async (id) => {
    try {
      isLoading.value = true
      // TODO: 调用API获取订单详情
      // const response = await api.get(`/orders/${id}`)
      // currentOrder.value = response.data

      // 从现有数据中查找或模拟
      const order = orders.value.find(o => o.id === id)
      if (order) {
        currentOrder.value = order
      } else {
        // 如果找不到，模拟一个
        currentOrder.value = {
          id,
          status: 'paid',
          statusText: '待发货',
          totalAmount: 999,
          itemCount: 1,
          createdAt: '2026-04-14 10:00:00',
          items: [
            {
              productId: 5,
              name: '蓝牙音箱',
              image: '/images/product5.jpg',
              price: 999,
              quantity: 1,
              specs: []
            }
          ],
          shippingAddress: {
            name: '测试用户',
            phone: '13600136000',
            province: '浙江省',
            city: '杭州市',
            district: '西湖区',
            detail: '测试地址',
            postalCode: '310000'
          },
          paymentMethod: 'alipay',
          shippingMethod: 'standard',
          shippingFee: 0,
          discountAmount: 0
        }
      }

      return currentOrder.value
    } catch (error) {
      console.error('获取订单详情失败:', error)
      ElMessage.error('获取订单详情失败')
      throw error
    } finally {
      isLoading.value = false
    }
  }

  // 创建订单
  const createOrder = async (orderData) => {
    try {
      isLoading.value = true
      // TODO: 调用API创建订单
      // const response = await api.post('/orders', orderData)
      // const newOrder = response.data

      // 模拟创建订单
      const newOrder = {
        id: `ORD${Date.now()}`,
        status: 'paid',
        statusText: '待发货',
        totalAmount: orderData.totalAmount,
        itemCount: orderData.items.reduce((count, item) => count + item.quantity, 0),
        createdAt: new Date().toISOString().replace('T', ' ').substr(0, 19),
        items: orderData.items,
        shippingAddress: orderData.shippingAddress,
        paymentMethod: orderData.paymentMethod,
        shippingMethod: orderData.shippingMethod,
        shippingFee: orderData.shippingFee,
        discountAmount: orderData.discountAmount
      }

      // 添加到订单列表
      orders.value.unshift(newOrder)
      currentOrder.value = newOrder

      ElMessage.success('订单创建成功')
      return newOrder
    } catch (error) {
      console.error('创建订单失败:', error)
      ElMessage.error('创建订单失败')
      throw error
    } finally {
      isLoading.value = false
    }
  }

  // 取消订单
  const cancelOrder = async (orderId) => {
    try {
      // TODO: 调用API取消订单
      // await api.put(`/orders/${orderId}/cancel`)

      const order = orders.value.find(o => o.id === orderId)
      if (order && ['pending', 'paid'].includes(order.status)) {
        order.status = 'cancelled'
        order.statusText = '已取消'
        order.cancelledAt = new Date().toISOString().replace('T', ' ').substr(0, 19)
      }

      ElMessage.success('订单已取消')
    } catch (error) {
      console.error('取消订单失败:', error)
      ElMessage.error('取消订单失败')
      throw error
    }
  }

  // 删除订单
  const deleteOrder = async (orderId) => {
    try {
      // TODO: 调用API删除订单
      // await api.delete(`/orders/${orderId}`)

      orders.value = orders.value.filter(o => o.id !== orderId)
      ElMessage.success('订单已删除')
    } catch (error) {
      console.error('删除订单失败:', error)
      ElMessage.error('删除订单失败')
      throw error
    }
  }

  // 确认收货
  const confirmReceipt = async (orderId) => {
    try {
      // TODO: 调用API确认收货
      // await api.put(`/orders/${orderId}/confirm`)

      const order = orders.value.find(o => o.id === orderId)
      if (order && order.status === 'shipped') {
        order.status = 'completed'
        order.statusText = '已完成'
        order.completedAt = new Date().toISOString().replace('T', ' ').substr(0, 19)
      }

      ElMessage.success('确认收货成功')
    } catch (error) {
      console.error('确认收货失败:', error)
      ElMessage.error('确认收货失败')
      throw error
    }
  }

  // 获取订单状态选项
  const getStatusOptions = () => {
    return [
      { value: 'all', label: '全部' },
      { value: 'pending', label: '待付款' },
      { value: 'paid', label: '待发货' },
      { value: 'shipped', label: '已发货' },
      { value: 'completed', label: '已完成' },
      { value: 'cancelled', label: '已取消' }
    ]
  }

  // 获取支付方式选项
  const getPaymentMethodOptions = () => {
    return [
      { value: 'alipay', label: '支付宝', icon: 'Alipay' },
      { value: 'wechat', label: '微信支付', icon: 'Wechat' },
      { value: 'bank', label: '银行卡', icon: 'Bank' },
      { value: 'cash', label: '货到付款', icon: 'Money' }
    ]
  }

  // 获取配送方式选项
  const getShippingMethodOptions = () => {
    return [
      { value: 'standard', label: '标准配送', desc: '3-5个工作日', fee: 0, minAmount: 99 },
      { value: 'express', label: '快递配送', desc: '1-2个工作日', fee: 10, minAmount: 0 },
      { value: 'overnight', label: '次日达', desc: '次日送达', fee: 20, minAmount: 0 }
    ]
  }

  return {
    orders,
    currentOrder,
    isLoading,
    loadOrders,
    getOrderById,
    createOrder,
    cancelOrder,
    confirmReceipt,
    deleteOrder,
    getStatusOptions,
    getPaymentMethodOptions,
    getShippingMethodOptions
  }
})