import api from './index'

export const authApi = {
  // 登录
  login(credentials) {
    return api.post('/auth/login', credentials)
  },

  // 注册
  register(userData) {
    return api.post('/auth/register', userData)
  },

  // 获取用户信息
  getProfile() {
    return api.get('/auth/profile')
  },

  // 更新用户信息
  updateProfile(profileData) {
    return api.put('/auth/profile', profileData)
  },

  // 修改密码
  changePassword(passwordData) {
    return api.put('/auth/password', passwordData)
  },

  // 退出登录
  logout() {
    return api.post('/auth/logout')
  }
}