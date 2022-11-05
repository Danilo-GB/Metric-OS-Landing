<template>
  <!-- Video Area Start -->
  <section class="nuxa-video-area section_100">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="video-box" data-aos="fade-down">
            <div class="video-inn">
              <b-img-lazy
                fluid
                v-bind:src="require('../assets/img/logo-m.png')"
                alt="about"
                class="moving2"
              />
              <div class="site-heading">
                <h2>
                  <span>Free</span> and <span>Open Source</span> <br />
                  For Everyone.
                </h2>
              </div>
              <p>
                We know the difficulties of keeping our company's metrics
                organized in excel tables, as well as how expensive a dashboard
                solution can be for a small business, so Metric OS will remain
                free and open source for everyone and forever.
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Video Area End -->
</template>

<script>
export default {
  name: "VideoArea",
};
</script>

<style scoped></style>
