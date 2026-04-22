<template>
  <Navbar />
  <router-view />
  <TeamAndFooter />
</template>

<script setup>
import Navbar from './components/landing/Navbar.vue';
import TeamAndFooter from './components/landing/TeamAndFooter.vue';
</script>