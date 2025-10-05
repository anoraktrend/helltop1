<script setup>
const menuitems = [
  {
    title: "Sign up",
    url: "https://app.netlify.com/signup",
  },
  {
    title: "Log in",
    url: "https://app.netlify.com/login",
  },
];
</script>

<template>
  <Container>
    <header class="flex flex-row flex-wrap items-center justify-between py-6 gap-x-6 gap-y-4">
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-zinc-800">
          <span class="text-green-500">&#10070;</span> Nuxt Starter
        </a>
      </div>
      <nav class="flex w-auto">
        <ul class="flex flex-row gap-3 text-sm">
          <li v-for="item of menuitems" :key="item.title">
            <a :href="item.url" class="flex px-4 py-2 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </Container>
</template>
