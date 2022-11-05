<template>
  <div id="app">
    <!-- Start Preloader -->
    <div id="preloader">
      <div class="preload-content">
        <div id="dream-load"></div>
      </div>
    </div>
    <!-- End Preloader -->

    <!--    Header Section-->
    <router-view name="header" />
    <!--    Body Section-->
    <router-view />
    <!--    Footer Section-->
    <router-view name="footer" />
  </div>
</template>
<script>
import scroll from "./mixins/scroll";
import preloader from "./mixins/preloader";
import popup from "./mixins/popup";

export default {
  name: "App",
  mixins: [scroll, preloader, popup],
};
</script>
