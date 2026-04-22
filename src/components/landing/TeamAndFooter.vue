<script setup></script>
<template>
  <div>
    <section class="max-w-5xl mx-auto px-6 py-16">
      <div class="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 mb-12 rounded overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" class="object-cover w-full h-full" alt="Team Husky">
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white -mt-24 mx-4 md:mx-12 p-8 shadow-sm relative z-10">
        <div class="md:col-span-1">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">About Team Galaxy</h2>
          <button class="bg-gray-200 text-gray-700 px-6 py-2 rounded font-medium hover:bg-gray-300 transition flex items-center gap-2">
            Read our story
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div class="md:col-span-2 space-y-6 text-gray-500">
          <p>Video Husky is a happy team of editors, account manager, customer success agents, a head of operations, and me, Justin the founder!</p>
          <p>But it didn't start off that way.</p>
          <p>While running video ads as a Facebook marketer, I got stuck under a huge workload and increasing pressure to meet client demands, with no clear way forward.</p>
          <p>Until I teamed up with an editor to try something different...</p>
        </div>
      </div>
    </section>

    <section class="bg-[#f8fbfa] py-24 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">With Video Husky you'll never waste another minute editing</h2>
        <p class="text-gray-500 mb-10 text-lg">Join hundreds of other video creators who've freed themselves from editing their own videos.</p>
        <button class="bg-[#fad284] text-gray-900 px-8 py-3 rounded font-bold hover:bg-[#eabb65] transition">Learn more!</button>
      </div>
    </section>

    <footer class="bg-[#f0f7fa] pt-20 relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-16 relative z-10 text-center md:text-left">
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Video Galaxy</h4>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-gray-800">Customer success stories</a></li>
            <li><a href="#" class="hover:text-gray-800">Packages</a></li>
            <li><a href="#" class="hover:text-gray-800">Credit bundles</a></li>
            <li><a href="#" class="hover:text-gray-800">About</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Who it's for</h4>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-gray-800">Creators & small businesses</a></li>
            <li><a href="#" class="hover:text-gray-800">Vloggers & medium businesses</a></li>
            <li><a href="#" class="hover:text-gray-800">Advanced creators</a></li>
            <li><a href="#" class="hover:text-gray-800">100% dedicated editing service</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Support</h4>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-gray-800">How it works</a></li>
            <li><a href="#" class="hover:text-gray-800">Reviews</a></li>
            <li><a href="#" class="hover:text-gray-800">FAQs</a></li>
            <li><a href="#" class="hover:text-gray-800">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-4">Useful links</h4>
          <ul class="space-y-3 text-gray-500">
            <li><a href="#" class="hover:text-gray-800">The Videocraft Show</a></li>
            <li><a href="#" class="hover:text-gray-800">Privacy</a></li>
            <li><a href="#" class="hover:text-gray-800">Terms & conditions</a></li>
            <li><a href="#" class="hover:text-gray-800">Affiliate Program</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center text-xs font-bold text-gray-400 tracking-widest uppercase mb-16 relative z-10">COPYRIGHT 2026 © ALL RIGHTS RESERVED. VIDEO HUSKY LLC</div>
      <div class="w-full h-48 relative flex items-end justify-center pointer-events-none mt-10">
         <div class="absolute bottom-0 w-full flex items-end justify-center opacity-40">
            <div class="w-0 h-0 border-l-[300px] border-r-[300px] border-b-[200px] border-transparent border-b-teal-700 -mb-10"></div>
            <div class="w-0 h-0 border-l-[400px] border-r-[400px] border-b-[250px] border-transparent border-b-gray-300 absolute left-0"></div>
            <div class="w-0 h-0 border-l-[250px] border-r-[250px] border-b-[150px] border-transparent border-b-white absolute right-10"></div>
         </div>
         <div class="w-full h-16 bg-white absolute bottom-0 z-20"></div>
      </div>
    </footer>
  </div>
</template>