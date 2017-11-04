<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from './api/index';
import MyHeader from './components/header.vue';


export default {
  name: 'app',
  components: {
    MyHeader,
  },
}
</script>

<style>
@import './style/base.css';
</style>
