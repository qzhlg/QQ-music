<template>
    <div class="wrap">
      <vhead></vhead>
      <div class="nav">
          <ul>
              <li>
                  <router-link to="/home/rank">推荐</router-link>
              </li>
             <li>
                  <router-link to="/home/list">排行榜</router-link>
              </li>
             <li>
                  <router-link to="/home/search">搜索</router-link>
              </li>
          </ul>
      </div>
         <router-view></router-view>
    </div>
</template>

<script>
import vhead from '../../components/head'
export default {
    components:{
        vhead
    }
}

</script>

<style>

</style>
