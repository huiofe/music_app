<template>
  <div>
    <slider v-if="sliderList.length !== 0">
      <div v-for="item in sliderList" class="slider-item">
        <a :herf="item.linkUrl">
          <img :src="item.picUrl" alt="">
        </a>
      </div>
    </slider>
  </div>
</template>

<script>
import { getSwiperList } from '../api/SwiperList';
import { ERR_OK } from '../api/config';
import Slider from '../components/slider'

export default{
  name: 'recommend',
  data() {
    return {
      sliderList: [],
    }
  },
  components: {
    Slider
  },
  created() {
    this._getSwiperList();
  },
  methods: {
    _getSwiperList() {
      getSwiperList().then((res) => {
         if(res.code === ERR_OK ){
            //console.log(res.data.slider);
            this.sliderList = res.data.slider;
         }
      });
    }
  }
}
</script>

<style>

</style>
