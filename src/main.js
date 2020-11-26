import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入element-ui
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)
// 引入axios
import axios from '@/utils/request'
Vue.prototype.$axios=axios

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(to)
  let aa=JSON.parse(sessionStorage.getItem('tok'))||''
  console.log(aa)
  if(to.path.indexOf('/')>-1){
    if(to.path=='/login'){
        if(aa!=''){
            next('/home')
        }
      }else{
        if(aa==''){
          next('/login')
        }
      }
  }
  

  next()
})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
