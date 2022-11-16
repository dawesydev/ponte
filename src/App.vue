<script setup>
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import MissionStatement from "./components/MissionStatement.vue";
import Promo from "./components/Promo.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <header>
    <Nav />
  </header>
  <main>
    <Hero />
    <Promo />
    <MissionStatement />
  </main>
  <Footer />
</template>