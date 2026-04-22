<script setup>
// 1. Import all the components we just created
import Hero from '../components/landing/Hero.vue';
import CreditBundles from '../components/landing/CreditBundles.vue';
import SocialProof from '../components/landing/SocialProof.vue';
import Features from '../components/landing/Features.vue';
import TeamAndFooter from '../components/landing/TeamAndFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800">
    
    <Hero />
    <CreditBundles />
    <SocialProof />
    <Features />
    
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>