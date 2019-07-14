import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
console.log(routes)
Vue.use(Router)

const router= new Router({
  mode:'history',
  routes
})

/**
 * 导航的前置守卫用路由来拦截
 * to 新的路由
 * from 当前路由
 * 
 */
router.beforeEach((to,from,next) =>{
  console.log(to)
  const requireAuth=to.meta.autorization
  if(requireAuth){
    //判断路由页面是否需要登陆态
    const token=window.$store.state.Login.token
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router