// 注册全局组件，做成一个组件的集合发出去
import Button from './button/index';

const components = [
  Button,
];

const install = (Vue) => {
  if (install.installed) return;
  components.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach(component => Vue.component(component.name, component));
    } else {
      Vue.component(item.name, item);
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  Button,
};
