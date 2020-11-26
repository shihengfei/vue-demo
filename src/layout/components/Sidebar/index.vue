<template>
  <div class="app-sider">
    <!-- 侧边栏，设计 logo -->
    <!-- 菜单，解析路由文件的配置渲染 -->
    <!-- <a-menu>
            <a-menu-item>菜单项</a-menu-item>
                 <a-sub-menu title="子菜单">
                    <a-menu-item>子菜单项</a-menu-item>
                </a-sub-menu>
          </a-menu> -->
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="[currentRouterPath]"
    >
      <!-- 渲染菜单 -->
      <template v-for="route in routes">
        <!-- 与 routes 对应，判断是否有子菜单 -->
        <template v-if="!route.children">
          <!-- antd 标签 -->
          <a-menu-item :key="route.path">
            <!-- router 标签，路由至目标页面,router-view -->
            <router-link :to="route.path" :key="route.path">
              <span>{{ route.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
        <!-- 存在子菜单 -->
        <template v-else>
          <a-sub-menu :key="route.path">
            <!-- 父菜单标题 -->
            <span slot="title">
              <span>{{ route.title }}</span>
            </span>
            <!-- 遍历子菜单 -->
            <template v-for="item in route.children">
              <a-menu-item :key="item.path">
                <router-link :key="item.path" :to="item.path">
                  <span>{{ item.title }}</span>
                </router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
// 引入 node 库，拼接 path
import { resolve } from 'path'
// 遍历 router 下的配置路由渲染
export default {
  name: "Sidebar",
  computed: {
    routes() {
      // this.$router.options.routes 获取到配置路由数组
      return (
        this.$router.options.routes
          // 过滤需要隐藏的路由 hidden 属性为 true
          .filter((route) => !route.hidden)
          // 返回新的数组-菜单数据
          .map((route) => {
            // 判断是否存在子路由
            if (route.children.length === 1) {
              return {
                // 路由 path
                path: resolve(route.path, route.children[0].path),
                // 菜单名
                title: route.children[0].meta.title,
                // 图标
                icon: route.children[0].meta.title,
              };
            } else {
              // 存在子路由，需要进一步遍历
              return {
                path: route.path,
                title: route.meta.title,
                icon: route.meta.title,
                // 此处可递归操作
                children: route.children
                  .filter((item) => !item.hidden)
                  .map((item) => {
                    return {
                      // 路由 path
                      path: resolve(route.path, item.path),
                      // 菜单名
                      title: item.meta.title,
                      // 图标
                      icon: item.meta.title,
                    };
                  }),
              };
            }
          })
      );
    },
    // 当前选中菜单
    currentRouterPath() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="less">
.ant-menu-dark .ant-menu-item {
  color: #ffffff;
}
</style>