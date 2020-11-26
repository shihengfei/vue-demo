<template>
  <a-layout id="components-layout">
    <a-layout-sider :trigger="null">
      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <AppMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
// 引入布局组件
import { AppMain, Sidebar } from "./components/index";

// Antd 布局相关
export default {
  // 注册组件
  components: {
    AppMain,
    Sidebar,
  },
};
</script>

<style>
#components-layout {
  height: 100vh;
}
</style>
