<template>
  <div>
    <!-- Start Features Component -->
    <features-area />
    <!-- End Features Component -->

    <!-- Start About Component -->
    <about-area />
    <!-- End About Component -->

    <!-- Video Component Start -->
    <video-area />
    <!-- Video Component End -->

    <!-- Choose Component Start -->
    <!-- <choose-area/> -->
    <!-- Choose Component End -->

    <!-- Product Component Start -->
    <product-area />
    <!-- Product Component End -->

    <!-- Faq Component Start -->
    <!-- <faq-area /> -->
    <!-- Faq Component End -->

    <!-- Testimonial Section Start -->
    <!-- <testimonial-area/> -->
    <!-- Testimonial Section End -->

    <!-- Contact Component Start -->
    <!-- <contact-area /> -->
    <!-- Contact Component End -->
  </div>
</template>
<script>
import FeaturesArea from "../components/FeaturesArea";
import AboutArea from "../components/AboutArea";
import VideoArea from "../components/VideoArea";
import ChooseArea from "../components/ChooseArea";
import ProductArea from "../components/ProductArea";
import FaqArea from "../components/FaqArea";
import ContactArea from "../components/ContactArea";
import TestimonialArea from "../components/TestimonialArea";

export default {
  name: "Home",
  components: {
    TestimonialArea,
    ContactArea,
    FaqArea,
    ChooseArea,
    VideoArea,
    AboutArea,
    FeaturesArea,
    ProductArea,
  },
};
</script>
