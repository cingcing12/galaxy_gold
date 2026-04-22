<script setup>
// Define the package data as an array to make the template cleaner and easier to update
const packages = [
  {
    name: 'Eskimo',
    image: 'https://cdn-icons-png.flaticon.com/512/1864/1864514.png', // Placeholder Husky icon
    description: 'Looking to up your YouTube game or need help editing and publishing more videos? Then this one is for you.',
    price: '$849 p/m',
    bgColor: 'bg-[#a1c4d4]' // Example background color for the circle
  },
  {
    name: 'Siberian',
    image: 'https://cdn-icons-png.flaticon.com/512/3595/3595995.png', // Placeholder Husky icon
    description: 'All the benfits of an in-house editor without the vetting, hiring, managing and costs of a full time editor.',
    price: '$1,590 p/m',
    bgColor: 'bg-[#00a89d]'
  },
  {
    name: 'St. Bernard',
    image: 'https://cdn-icons-png.flaticon.com/512/1864/1864455.png', // Placeholder Dog icon
    description: '100% dedicated editing service for anyone wanting to scale up their video content efforts.',
    price: '$2,749 p/m',
    bgColor: 'bg-[#7c9cb4]'
  }
];
</script>

<template>
  <div class="bg-[#f8fbfa] py-20 px-6">
    <div class="max-w-6xl mx-auto text-center">
      
      <h2 class="text-4xl md:text-5xl font-extrabold text-[#2d3748] mb-4">Packages</h2>
      <p class="text-lg text-gray-500 mb-16 font-light">Select a package for more details.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        
        <div 
          v-for="(pkg, index) in packages" 
          :key="index"
          class="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div :class="[pkg.bgColor, 'w-24 h-24 rounded-full flex items-center justify-center mb-6 overflow-hidden']">
            <img :src="pkg.image" :alt="pkg.name" class="w-16 h-16 object-contain" />
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-4">{{ pkg.name }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed text-center mb-8 flex-grow">
            {{ pkg.description }}
          </p>

          <div class="text-2xl font-bold text-gray-800 mb-8">
            {{ pkg.price }}
          </div>

          <button class="w-full bg-[#fad284] text-gray-900 py-3 font-bold hover:bg-[#eabb65] transition-colors rounded-sm">
            Find out more
          </button>
        </div>

      </div>

      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#2d3748] mb-6">Still not sure?</h2>
        <p class="text-gray-500 text-lg mb-8 font-light">
          Click below to take a 90 second quiz and discover which editing package suits your needs best!
        </p>
        <button class="bg-[#fad284] text-gray-900 px-8 py-3 font-bold hover:bg-[#eabb65] transition-colors rounded-sm">
          Take quiz!
        </button>
      </div>

    </div>
  </div>
</template>