<template>
  <div class="wrap">
    <main class="main">
      <swiper :options="swiperOption" class="banner">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
          <img :src="slide.picUrl" alt class="img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <vlist></vlist>
    </main>
  </div>
</template>

<script>
import { getbannerlist } from "@/api/banner";
import "swiper/dist/css/swiper.css";
import vlist from './list'
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "rank",
  components: {
    swiper,
    swiperSlide,
    vlist
  },
  data() {
    return {
      swiperSlides: [],
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    this._getbannerlist();
  },
  methods: {
    async _getbannerlist() {
      const result = await getbannerlist();
      this.swiperSlides = result.data.data.slider;
      console.log(result.data.data.slider);
    }
  }
};
</script>

<style>
.swiper-pagination-bullet-active {
  background: lime;
}
</style>
