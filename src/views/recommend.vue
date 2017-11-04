<template>
  <div>
    tuijian
  </div>
</template>

<script>
import { getSwiperList } from '../api/SwiperList';
import { ERR_OK } from '../api/config';

export default{
  name: 'recommend',
  data() {
    return {}
  },
  created() {
    this._getSwiperList();
  },
  methods: {
    _getSwiperList() {
      getSwiperList().then((res) => {
         if(res.code === ERR_OK ){
            console.log(res.data);
         }
      });
    }
  }
}
</script>

<style>

</style>
