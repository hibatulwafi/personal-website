<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Hero,
    About,
    Portfolio,
    Footer,
  },
};
</script>
