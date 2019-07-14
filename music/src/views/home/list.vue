<template>
  <main class="main">
    <div class="content">
      <ul v-for="list in listcon" :key="list.id" class="list">
        <li>
          <p v-text="list.rank"></p>
          <p v-text="list.rankValue"></p>
        </li>
        <li v-lazy-container="{ selector: 'img' }">
          <router-link
            :to="{
            path:'/detail',
            query:{
              id:list.songId
            }
            }"
          >
            <img
              :data-src="`http://y.gtimg.cn/music/photo_new/T002R90x90M000${list.albumMid}.jpg?max_age=2592000`"
              alt
            />
          </router-link>
        </li>

        <li>
          <p v-text="list.title"></p>
          <p v-html="list.singerName"></p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { getList } from "../../api/list";
export default {
  name: "list",
  data() {
    return {
      listcon: []
    };
  },
  mounted() {
    this._getlist();
  },
  methods: {
    async _getlist() {
      const result = await getList();

      console.log(result.data.data.song);
      this.listcon = result.data.data.song;
    }
  }
};
</script>

<style>
</style>
