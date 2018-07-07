// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import '../static/css/base.css';
import store from './vuex/store.js';
import '../static/font/iconfont.css';

import '../static/font/iconfont.js';
import MuseUI from 'muse-ui';  
import 'muse-ui/dist/muse-ui.css'; 
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll';
import axios from 'axios';
import Lazyload from 'vue-lazyload';

Vue.use(Lazyload,{
    preLoad: 1,
    attempt: 1

});
Vue.prototype.axios = axios;
Vue.use(MuseUI); 
Vue.use(Vuex);
Vue.use(IScrollView,IScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  
 
  components: { App },
  template: '<App/>',

})
