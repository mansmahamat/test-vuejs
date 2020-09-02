<template>
    <div class="font-sans antialiased" id="app">
      <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <router-link to="/">
        <img alt="Vue logo" src="../assets/breakingBad.png" class=" ml-6 h-12">
        </router-link>
      </div>
      <div class="block sm:hidden">
        <button @click="isOpen = !isOpen" class=" buttonNav hover:border-white">
          <svg  v-if="!isOpen" class="fill-current h-3 w-3 text-green-700" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
          <p v-if="isOpen">x</p>
        </button>
      </div>
      <div :class="isOpen ? 'block': 'hidden'"
            class="w-full flex-grow sm:flex  sm:items-center sm:w-auto">
        <div class=" text-center text-xl font-extrabold text-green-700 sm:flex-grow">
        <router-link to="/"
        class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter mr-6">
          Accueil
        </router-link>
        <router-link to="/personnages"
                      class="block mt-4 sm:inline-block sm:mt-0 text-teal-lighter mr-4 ">
          Tout les personnages
        </router-link>
        <router-link to="/favourites"
                      class="block mt-4 sm:inline-block sm:mt-0 text-teal-lighter mr-4 ">
          Favoris
        </router-link>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
