### 1.安装nodejs环境

### 2.vue-cli官方文档参考，使用vue-cli创建脚手架工程

#### 	1)创建项目

```powershell
vue create 项目名称
```

####     2) 安装 vue-router 组件

```powershell
npm install vue-router -S
```

#### 	3)安装 antd 组件

```powershell
npm install ant-design-vue -S
```

### 3. main.js配置

​	1)导入antd组件

```javascript
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
```

​	2)导入路由

```javascript
import router from './router';
Vue.use(router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

### 4.开发登录页面 or 布局

​	1) 创建文件夹 layout ，存放布局相关

​	2) layout文件夹下创建 components 组件文件夹，存放布局细分相关

​	3) 此处根据antd官方文档编写布局。router下配置index.js文件，配置路由。并在导航栏文件中遍历。

### 5.开发步骤

​	1) 设计页面布局、侧边栏、logo、主题部分

​	2) 侧边栏路由设计，编写 router 路由文件

​	3) 编写 pages 

​			
