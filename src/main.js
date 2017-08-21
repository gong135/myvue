// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import Icon from 'vue-svg-icon/Icon';
import App from './App';
import router from './router';
import * as filters from './filter';
import './styles/main.less';
// import api from './api';

import Video from './component/Video';

Vue.config.productionTip = false;

// api放置位置
// Vue.prototype.$api = api;

// 引入插件
Vue.use(ElementUI);
Vue.component('Icon', Icon);

// 组件
Vue.component('gxm-video', Video);

// 过滤
Vue.filter('toDateString', filters.toDateString);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
