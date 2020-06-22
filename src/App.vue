<template>
  <div id="app">
    <h1>Nested Named Views</h1>
    <router-view class="view one" name="topBar"></router-view>
    <div class="columns">
      <div class="column is-four-fifths">
        <router-view class="view two" name="sideBar"></router-view>
      </div>
      <div class="column">
        <router-view class="view four" name="body"></router-view>
      </div>
    </div>

    <router-view class="view three" name="bottomBar"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted: function() {
    this.$router.push({ path: "/home" });
  },
  methods: {
    changeLangEvent() {
      // if(this.$i18n.locale ==='zh-CN'){
      //     this.$i18n.locale = 'en-US';
      // }else{
      //   this.$i18n.locale = 'zh-CN';
      // }
      if (this.$i18n.locale === "ja") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "ja";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
