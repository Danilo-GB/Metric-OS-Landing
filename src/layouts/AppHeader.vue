<template>
  <div>
    <!--Navbar Start-->
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <b-container>
        <!-- Navbar Brand -->
        <b-navbar-brand class="logo">
          <b-link to="/">
            <b-img
              v-bind:src="require('../assets/img/logo.png')"
              fluid
              alt="nuxa"
            />
          </b-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" v-scroll-to="'#elemHome'">Home</b-nav-item>
            <b-nav-item href="#" v-scroll-to="'#elemFeatured'"
              >Features</b-nav-item
            >
            <b-nav-item href="#" v-scroll-to="'#elemAbout'">About</b-nav-item>
            <b-nav-item href="#" v-scroll-to="'#elemProduct'"
              >Project</b-nav-item
            >
            <b-nav-item href="https://metric-os-docs.netlify.app/" target="_blank" rel="noopener noreferrer">Docs</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!--Navbar End-->
    <welcome-area />
  </div>
</template>

<script>
import WelcomeArea from "../components/WelcomeArea";

export default {
  name: "AppHeader",
  components: { WelcomeArea },
};
</script>

<style scoped></style>
