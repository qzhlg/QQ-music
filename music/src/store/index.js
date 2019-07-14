import Vue from 'vue'
import Vuex from 'vuex'
import Login from './module/login'
Vue.use(Vuex)
const store = new Vuex.Store({
    //非严格模式,
    strict:false,
    modules:{
        Login
    }
})
window.$store=store
export default store