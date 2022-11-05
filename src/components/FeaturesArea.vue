<template>
  <!-- Features Area Start -->
  <section class="nuxa-features-area section_100" id="elemFeatured">
    <!-- Dot Shape Strat -->
    <div class="shape-l">
      <b-img-lazy
        alt="shape"
        fluid
        v-bind:src="require('../assets/img/shape-l.png')"
      />
    </div>
    <div class="shape-r">
      <b-img-lazy
        alt="shape"
        fluid
        v-bind:src="require('../assets/img/shape-r.png')"
      />
    </div>
    <!-- Dot Shape End -->
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="site-heading" data-aos="fade-down">
            <h2>
              Many <span>Features</span> are<br />
              <span>Available</span> in The Project
            </h2>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="10" offset-lg="2">
          <b-row>
            <b-col xl="6" md="6" cols="12">
              <div class="feature-box" data-aos="fade-right">
                <div class="feature-icon">
                  <i class="flaticon-crown"></i>
                </div>
                <div class="feature-text">
                  <h3>High Quality</h3>
                  <p>
                    Components designed to increase competitive advantage
                    through the creation of metric dashboards and statistical
                    analysis.
                  </p>
                </div>
              </div>
            </b-col>
            <b-col xl="6" md="6" cols="12">
              <div class="feature-box" data-aos="fade-left">
                <div class="feature-icon">
                  <i class="flaticon-graphic-design"></i>
                </div>
                <div class="feature-text">
                  <h3>Module Abstraction</h3>
                  <p>
                    Independent modules and functionalities to be adapted
                    according to the needs of each company.
                  </p>
                </div>
              </div>
            </b-col>
            <b-col xl="6" md="6" cols="12">
              <div class="feature-box" data-aos="fade-right">
                <div class="feature-icon">
                  <i class="flaticon-digital"></i>
                </div>
                <div class="feature-text">
                  <h3>MySQL and MongoDB</h3>
                  <p>
                    Implementation of the most used relational and
                    non-relational databases in companies.
                  </p>
                </div>
              </div>
            </b-col>
            <b-col xl="6" md="6" cols="12">
              <div class="feature-box" data-aos="fade-left">
                <div class="feature-icon">
                  <i class="flaticon-videocall"></i>
                </div>
                <div class="feature-text">
                  <h3>User Friendly</h3>
                  <p>
                    Simple and understandable code structure so that both final
                    users and programmers can get the most out of it.
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Features Area End -->
</template>

<script>
export default {
  name: "FeaturesArea",
};
</script>

<style scoped></style>
