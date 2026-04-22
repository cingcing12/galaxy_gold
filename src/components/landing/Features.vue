<script setup></script>
<template>
  <div>
    <section class="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
      <div class="order-2 md:order-1 flex justify-center">
        <div class="w-64 h-64 bg-teal-100 rounded-full flex items-center justify-center relative">
          <div class="absolute w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-transparent border-b-teal-600 top-10 left-10"></div>
          <div class="absolute w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-transparent border-b-teal-500 bottom-10 right-10"></div>
          <svg class="w-12 h-12 text-white absolute z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">"How unlimited is 'unlimited'?"</h3>
        <p class="text-gray-500 mb-4">There's absolutely NO limit to the amount of video projects you can submit to us - and we offer a plan that allows you to make as many revisions as you'd like.</p>
        <p class="text-gray-500">Your editor will work on one video at a time for a fast turnaround and quality you'll be proud of, with no unnecessary back-and-forth slowing you down.</p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
      <div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">"Can you help me beat my deadlines?"</h3>
        <p class="text-gray-500 mb-4">With Video Husky you can keep your momentum going as we get your first draft back to you within 1-3 business days depending on the project complexity. After that, your revisions will be turned around in just 1 day.</p>
        <p class="text-gray-500">Your account manager will oversee the entire workflow so you can comfortably hit deadlines AND have one less thing to worry about.</p>
      </div>
      <div class="flex justify-center">
        <div class="w-full max-w-sm h-64 bg-slate-100 rounded-xl relative overflow-hidden flex items-end justify-center pb-4">
           <div class="absolute inset-0 bg-gradient-to-b from-blue-100 to-teal-100 opacity-50"></div>
           <div class="w-20 h-20 bg-amber-800 relative z-10 rounded-t-sm border-b-4 border-amber-900">
             <div class="w-full h-0 border-l-[45px] border-r-[45px] border-b-[30px] border-transparent border-b-amber-700 absolute -top-[30px] -left-[5px]"></div>
           </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 text-center">
      <div class="max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">You're just 3 easy steps away from never having to edit another video</h2>
      </div>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Offload your assets to us</h3>
          <p class="text-gray-500 text-sm">Join Video Husky and send us your footage and editing instructions in minutes.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Get your first draft in 1-3 business days</h3>
          <p class="text-gray-500 text-sm">97.5% of video requests take 2 business days or less to edit so you can focus on filming more!</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Request any revisions, then start your next project!</h3>
          <p class="text-gray-500 text-sm">Share your feedback with your editor. Once you're happy, we'll start your next video.</p>
        </div>
      </div>
    </section>
  </div>
</template>