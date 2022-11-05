<template>
  <!-- Choose Area Start -->
  <section class="nuxa-choose-area section_100">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="6" sm="7">
          <div class="choose-left">
            <div class="site-heading" data-aos="fade-down">
              <h2>
                We are providing <span>best</span> and<br />
                <span>high quality</span> products.
              </h2>
            </div>
            <ul>
              <li class="active choose-box" data-aos="fade-down">
                <div class="choose-icon">
                  <i class="flaticon-crown"></i>
                </div>
                <div class="choose-text">
                  <h3>High Quality</h3>
                  <p>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet
                  </p>
                </div>
              </li>
              <li class="choose-box" data-aos="fade-down">
                <div class="choose-icon">
                  <i class="flaticon-graphic-design"></i>
                </div>
                <div class="choose-text">
                  <h3>Fashionable Design</h3>
                  <p>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet
                  </p>
                </div>
              </li>
              <li class="choose-box" data-aos="fade-down">
                <div class="choose-icon">
                  <i class="flaticon-digital"></i>
                </div>
                <div class="choose-text">
                  <h3>Latest Technology</h3>
                  <p>
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col lg="6" sm="5">
          <div class="choose-right" data-aos="fade-left">
            <b-img-lazy
              fluid
              v-bind:src="require('../assets/img/choose_img.png')"
              alt="product"
              class="moving3"
            ></b-img-lazy>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Choose Area End -->
</template>

<script>
export default {
  name: "ChooseArea",
};
</script>

<style scoped></style>
