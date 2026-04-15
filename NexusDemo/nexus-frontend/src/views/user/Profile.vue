<template>
  <div class="profile-page">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="profile-content">
      <!-- 用户信息卡片 -->
      <div class="profile-card">
        <div class="card-header">
          <h2>个人信息</h2>
          <el-button type="primary" @click="handleEditProfile">编辑资料</el-button>
        </div>

        <div class="card-body">
          <div class="profile-info">
            <div class="avatar-section">
              <el-avatar :size="100" :src="userAvatar" />
              <el-button type="primary" size="small" @click="handleChangeAvatar">
                更换头像
              </el-button>
            </div>

            <div class="info-details">
              <div class="info-item">
                <span class="label">用户名:</span>
                <span class="value">{{ userInfo.username }}</span>
              </div>
              <div class="info-item">
                <span class="label">邮箱:</span>
                <span class="value">{{ userInfo.email }}</span>
              </div>
              <div class="info-item">
                <span class="label">手机:</span>
                <span class="value">{{ userInfo.phone }}</span>
              </div>
              <div class="info-item">
                <span class="label">注册时间:</span>
                <span class="value">{{ userInfo.registerTime }}</span>
              </div>
              <div class="info-item">
                <span class="label">最后登录:</span>
                <span class="value">{{ userInfo.lastLogin }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 订单统计 -->
      <div class="order-stats">
        <h3>订单统计</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">12</div>
            <div class="stat-label">总订单数</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">8</div>
            <div class="stat-label">待付款</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">3</div>
            <div class="stat-label">待发货</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">1</div>
            <div class="stat-label">待收货</div>
          </div>
        </div>
      </div>

      <!-- 快捷操作 -->
      <div class="quick-actions">
        <h3>快捷操作</h3>
        <div class="actions-grid">
          <el-button type="primary" @click="$router.push('/orders')">
            查看所有订单
          </el-button>
          <el-button type="primary" @click="$router.push('/cart')">
            查看购物车
          </el-button>
          <el-button type="primary" @click="$router.push('/profile/address')">
            管理收货地址
          </el-button>
          <el-button type="primary" @click="$router.push('/profile/favorites')">
            我的收藏
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

// 用户信息
const userInfo = ref({
  username: 'Demo用户',
  email: 'demo@example.com',
  phone: '13800138000',
  registerTime: '2026-01-01',
  lastLogin: '2026-04-14'
})

const userAvatar = computed(() => {
  return userInfo.value.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

// 方法
const handleEditProfile = () => {
  ElMessage.info('编辑功能开发中...')
}

const handleChangeAvatar = () => {
  ElMessage.info('更换头像功能开发中...')
}
</script>

<style scoped>
.profile-page {
  padding-bottom: var(--space-xl);
}

.breadcrumb {
  margin-bottom: var(--space-lg);
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

/* 用户信息卡片 */
.profile-card {
  background-color: var(--card-bg-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color-light);
  padding: var(--space-lg);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.card-header h2 {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
}

.profile-info {
  display: flex;
  gap: var(--space-lg);
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.info-details {
  flex: 1;
}

.info-item {
  display: flex;
  margin-bottom: var(--space-md);
}

.info-item .label {
  width: 80px;
  color: var(--text-secondary);
}

.info-item .value {
  color: var(--text-primary);
  font-weight: 500;
}

/* 订单统计 */
.order-stats {
  background-color: var(--card-bg-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color-light);
  padding: var(--space-lg);
}

.order-stats h3 {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-md);
}

.stat-item {
  text-align: center;
  padding: var(--space-md);
  background-color: var(--bg-color);
  border-radius: var(--border-radius);
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

/* 快捷操作 */
.quick-actions {
  background-color: var(--card-bg-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color-light);
  padding: var(--space-lg);
}

.quick-actions h3 {
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
}

.actions-grid .el-button {
  width: 100%;
}
</style>