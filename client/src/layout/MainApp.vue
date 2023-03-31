<template>
  <div class="relative">
    <Socials class="absolute"/>
    <Header />
  </div>

  <main class="min-h-screen">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script setup>
import Header from '../components/Header/Header.vue'
import Footer from '../components/Footer/Footer.vue'
import Socials from '../components/Socials/Socials.vue'
</script>
<style lang="css"></style>
