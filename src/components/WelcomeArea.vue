<template>
  <!-- Welcome Area Start -->
  <section class="nuxa-welcome-area fix" id="elemHome">
    <!-- Shape Start -->
    <b-img-lazy
      alt="img"
      class="welcome-shape"
      fluid
      v-bind:src="require('../assets/img/hero_bg.png')"
    />
    <!-- Shape End -->
    <b-container>
      <b-row class="align-items-center">
        <b-col cols="12" md="6">
          <div class="welcome-text" data-aos="fade-right">
            <h2>A <span>Dashboard</span> For Everyone</h2>
            <p>
              Discover an open source solution for the visualization and
              analysis of metrics in your organization.
            </p>
            <a class="nuxa-btn" href="#" v-scroll-to="'#elemProduct'"
              >Start Now</a
            >
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="welcome-image" data-aos="fade-left">
            <b-img-lazy
              alt="img"
              class="moving1"
              fluid
              v-bind:src="require('../assets/img/hero_img.png')"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Welcome Area End -->
</template>

<script>
export default {
  name: "WelcomeArea",
};
</script>

<style scoped></style>
