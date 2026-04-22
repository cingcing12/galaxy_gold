<script setup></script>
<template>
  <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        Your videos edited right, <br/>
        <span class="bg-[#fce6b6] px-2 leading-relaxed">100% stress free</span>
      </h1>
      <p class="text-lg text-gray-500 mb-8 max-w-md">
        We've helped 812 video creators edit 16,043 videos and counting. Are you next?
      </p>
      <div class="flex flex-wrap gap-4">
        <button class="bg-[#fad284] text-gray-900 px-6 py-3 rounded font-bold hover:bg-[#eabb65] transition">Learn more!</button>
        <button class="bg-gray-100 text-gray-800 px-6 py-3 rounded font-bold hover:bg-gray-200 transition">Free video editing cheat sheet</button>
      </div>
    </div>
    <div class="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden shadow-xl">
      <video src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" class="opacity-60 object-cover w-full h-full absolute" alt="Founder Video" />
      <svg class="w-16 h-16 text-white absolute cursor-pointer hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </div>
  </section>
</template>