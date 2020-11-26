<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <!-- 路由 -->
            <router-view/>
        </transition>
    </section>
</template>

<script>
// 主要引用 router-view
export default {
}
</script>

<style lang="less">
.app-main {
  margin: 0 24px 24px;
  height: calc(100vh - 64px - 24px - 40px);
  padding: 24px;
  border-radius: 5px;
  background: #ffffff;
}
</style>