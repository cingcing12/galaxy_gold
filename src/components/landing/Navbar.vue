<script setup>
import { ref } from 'vue'

// Reactive state to track if the mobile menu is open
const isMobileMenuOpen = ref(false)

// Function to toggle the menu open/closed
const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Function to close the menu when a link is clicked
const closeMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white border-b border-gray-100 relative z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center gap-3 group" @click="closeMenu">
  <img 
    src="../../asset/logo.png" 
    alt="Galaxy Gold Logo" 
    class="w-[70px] h-[70px] rounded-full object-cover shadow-md border-2 border-yellow-400/60 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
  >
  <span class="text-xl font-bold text-black tracking-tight group-hover:text-yellow-600 transition-colors duration-300">
    Galaxy Gold
  </span>
</router-link>
      
      <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
        <router-link to="/who-its-for" class="hover:text-black transition">Who its for</router-link>
        <router-link to="/packages" class="hover:text-black transition">Packages</router-link>
        <router-link to="/credit-bundles" class="hover:text-black transition">Credit bundles</router-link>
        <router-link to="/enterprise" class="hover:text-black transition">Enterprise</router-link>
        <router-link to="/how-it-works" class="hover:text-black transition">How it works</router-link>
        <router-link to="/success-stories" class="hover:text-black transition">Success stories</router-link>
        <router-link to="/blog" class="hover:text-black transition">Blog</router-link>
        <router-link to="/about" class="hover:text-black transition">About</router-link>
      </nav>
      
      <router-link to="/consultation" class="hidden lg:block bg-[#fad284] text-gray-900 px-5 py-2 rounded font-bold hover:bg-[#eabb65] transition">
        Book a consultation
      </router-link>

      <button @click="toggleMenu" class="lg:hidden p-2 text-gray-600 hover:text-black focus:outline-none">
        <span class="sr-only">Open main menu</span>
        <svg v-if="!isMobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100">
        <nav class="flex flex-col px-6 py-4 space-y-4 text-base font-semibold text-gray-600">
          <router-link to="/who-its-for" class="hover:text-black transition" @click="closeMenu">Who its for</router-link>
          <router-link to="/packages" class="hover:text-black transition" @click="closeMenu">Packages</router-link>
          <router-link to="/credit-bundles" class="hover:text-black transition" @click="closeMenu">Credit bundles</router-link>
          <router-link to="/enterprise" class="hover:text-black transition" @click="closeMenu">Enterprise</router-link>
          <router-link to="/how-it-works" class="hover:text-black transition" @click="closeMenu">How it works</router-link>
          <router-link to="/success-stories" class="hover:text-black transition" @click="closeMenu">Success stories</router-link>
          <router-link to="/blog" class="hover:text-black transition" @click="closeMenu">Blog</router-link>
          <router-link to="/about" class="hover:text-black transition" @click="closeMenu">About</router-link>
          
          <div class="pt-4 border-t border-gray-100">
            <router-link to="/consultation" class="block w-full text-center bg-[#fad284] text-gray-900 px-5 py-3 rounded font-bold hover:bg-[#eabb65] transition" @click="closeMenu">
              Book a consultation
            </router-link>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>