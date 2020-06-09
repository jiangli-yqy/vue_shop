<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    // 退出功能
    logout () {
      // 销毁本地token，并重定向到登陆页面
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
