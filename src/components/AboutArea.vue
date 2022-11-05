<template>
  <!-- About Area Start -->
  <section class="nuxa-about-area section_100" id="elemAbout">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6">
          <div class="about-left">
            <b-img-lazy
              fluid
              v-bind:src="require('../assets/img/about.png')"
              alt="about"
              class="moving2"
            />
          </div>
        </b-col>
        <b-col lg="6">
          <div class="about-right" data-aos="fade-left">
            <div class="site-heading">
              <h2>
                <span>Metric OS</span> an open source project for
                <span>small businesses.</span>
              </h2>
            </div>
            <p>
              HI! Metric OS is an open source solution focused on providing
              metric dashboards to small businesses so that they can better
              analyze and control their information.
            </p>
            <b-list-group flush>
              <b-list-group-item class="border-0 p-0"
                ><i class="fa fa-check"></i> Connect to your MySQL or MongoDB
                database</b-list-group-item
              >
              <b-list-group-item class="border-0 p-0"
                ><i class="fa fa-check"></i> Create Dashboards of metrics or
                statistical analysis</b-list-group-item
              >
              <b-list-group-item class="border-0 p-0"
                ><i class="fa fa-check"></i> Add charts with information in real
                time.</b-list-group-item
              >
              <b-list-group-item class="border-0 p-0"
                ><i class="fa fa-check"></i> Move and size according to your
                viewing needs</b-list-group-item
              >
              <b-list-group-item class="border-0 p-0"
                ><i class="fa fa-check"></i> Create your own components and add
                them directly to your application</b-list-group-item
              >
            </b-list-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- About Area End -->
</template>

<script>
export default {
  name: "AboutArea",
};
</script>

<style scoped></style>
