<template>
  <div id="app" class="Site">
    <div class="columns is-gapless Site-content">
      <div id="sideBar" class="column is-2">
        <router-view class="view two" name="sideBar"></router-view>
      </div>
      <div class="column" id="right">
        <router-view class="view one" name="topBar"></router-view>
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
@import "~bulma/css/bulma.css";
@import "~font-awesome/css/font-awesome.min.css";
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
</style>
