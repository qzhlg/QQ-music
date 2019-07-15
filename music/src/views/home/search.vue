<template>
  <main class="main">
    <div class="search">
      <input type="text" v-model="keyval"/>
      <span>取消</span>
      <div class="content">
        <ul  v-for="value in fSearch" :key="value.id" class="tit">
          <li>
           <span  v-html="value.title"></span>
           <span v-html="value.singerName"></span>
     
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { getList } from "../../api/list";
export default {
  name: "search",
  data() {
    return {
      keyval:'',
      listcon: []
    };
  },
  mounted() {
    this._getsearch();
  },
  methods: {
    async _getsearch() {
      const result = await getList();
      console.log(result.data.data.song);
      this.listcon = result.data.data.song;
    }
  },
  computed: {
    fSearch() {
      if(this.keyval){
       return this.listcon.filter((value) =>{
        
          return value.title.includes(this.keyval)
        })
      }
      
    }
  }
};
</script>

<style>

</style>
