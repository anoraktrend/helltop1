<template>
  <div class="min-h-screen flex flex-col bg-white">
    <header class="bg-white">
      <Navbar />
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-50">
      <Footer />
    </footer>
  </div>
</template>
