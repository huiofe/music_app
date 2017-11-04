<template>
  <div class="header">
    <ul class="clearfix">
      <li><router-link to="/recommend">推荐</router-link></li>
      <li><router-link to="/rankingList">排行榜</router-link></li>
      <li><router-link to="/search">搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'header',
    data() {
      return {}
    },
    methods: {},
    mounted() {}
  }
</script>

<style lang="less" type="text/less" rel="stylesheet/less">
@import '../style/common.less';

.header{
  ul{ width: 100%; height: 1rem; padding: 0 20%; background: @mainBg;
    li{ width: 33.33%; height: 100%; line-height: 1rem; text-align: center; float: left;
      a{ color: @white; font-size: @tabFontSize;}
    }
  }
}
</style>
