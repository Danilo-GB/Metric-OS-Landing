<template>
  <!-- Product Area Start -->
  <section class="nuxa-product-area section_100" id="elemProduct">
    <b-container>
      <b-row>
        <b-col lg="12">
          <div class="site-heading" data-aos="fade-down">
            <h2>
              <span>each</span> part of the project<br />
              in your <span>hands</span>
            </h2>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" v-for="(product, key) in products" :key="key">
          <div class="product_item" data-aos="fade-down">
            <div class="product_img">
              <b-img-lazy fluid v-bind:src="product.img" alt="img" />
            </div>
            <div class="product_text">
              <h3>{{ product.title }}</h3>
              <div class="pro-meta">
                <div class="pro-action">
                  <a
                    class="nuxa-btn"
                    :href="product.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Get It Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- Product Area End -->
</template>

<script>
export default {
  name: "ProductArea",
  data() {
    return {
      products: [
        {
          title: "FrontEnd Project",
          img: require("../assets/img/product_1.png"),
          link: "https://github.com/Danilo-GB/MetricOS",
        },
        {
          title: "BackEnd Project",
          img: require("../assets/img/product_2.png"),
          link: "https://github.com/Danilo-GB/MetricOs-services",
        },
        {
          title: "Desktop Aplication",
          img: require("../assets/img/product_3.png"),
          link: "https://bit.ly/metric-os-app",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
