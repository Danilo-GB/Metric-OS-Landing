<template>
  <!-- Testimonial Section Start -->
  <section class="nuxa-testimonial-area section_100" id="elemTestimonial">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="site-heading" data-aos="fade-down">
            <h2>Some <span>reviews</span> from <br> our clients</h2>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <div class="testimonial-pos">
            <h3>feedback</h3>
          </div>
        </b-col>
        <b-col lg="12">
          <div class="testimonial-slider owl-carousel">
            <carousel
                :autoplay="true"
                :autoplayTimeout="6000"
                :loop="true"
                :navigationEnabled="true"
                :paginationEnabled="false"
                :per-page="1"
                :speed="2000"
                navigationNextLabel="<i class='fa fa-chevron-right'></i>"
                navigationPrevLabel="<i class='fa fa-chevron-left'></i>"
            >
              <slide>
                <div class="testimonial-item">
                  <div class="client-image">
                    <b-img alt="testimonial" v-bind:src="require('../assets/img/t3.png')"/>
                  </div>
                  <div class="testimonial-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius
                      blandit Lorem sit dix dolor sit. consectetur adipiscing. Nulla mauris dolor, gravida a varius
                      blandit, Lorem ipsum dolor sit Lorem ipsum dolor sit. consectetur adipiscing elit. </p>
                  </div>
                  <div class="testimonial-meta">
                    <h3>Lina doris</h3>
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-half-o"></i></li>
                    </ul>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="testimonial-item">
                  <div class="client-image">
                    <b-img alt="testimonial" v-bind:src="require('../assets/img/t1.png')"/>
                  </div>
                  <div class="testimonial-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius
                      blandit, Lorem ipsum dolor sit. consectetur adipiscing. Nulla mauris dolor, gravida a varius
                      blandit, Lorem ipsum dolor sit Lorem ipsum dolor sit. consectetur adipiscing elit. </p>
                  </div>
                  <div class="testimonial-meta">
                    <h3>knot williams</h3>
                    <ul>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-half-o"></i></li>
                    </ul>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Testimonial Section End -->
</template>

<script>
export default {
  name: "TestimonialArea"
}
</script>

<style scoped>

</style>
