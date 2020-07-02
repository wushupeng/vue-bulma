<template>
  <div id="app" class="Site">
    <TopBar name="topBar"></TopBar>
    <div class="columns is-gapless Site-content">
      <div id="sideBar" class="column is-2">
        <SideNav class="view two" name="sideBar"></SideNav>
      </div>
      <div class="column" id="right">
        <router-view></router-view>
      </div>
    </div>

    <BottomBar name="bottomBar"></BottomBar>
  </div>
</template>

<script>
import SideNav from "./components/SideNav"
import TopBar from "./components/TopBar"
import BottomBar from "@/components/BottomBar"
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
  },
  components:{
    "SideNav":SideNav,
    "TopBar":TopBar,
    "BottomBar":BottomBar
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
