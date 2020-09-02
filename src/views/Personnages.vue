<script>
import CartCharacter from '../components/CartCharacter.vue';

export default {
  name: 'Personnages',
  components: {
    CartCharacter,
  },
  data() {
    return {
      pending: false,
      loading: false,
      errorQuote: null,
      error: null,
      isOpen: false,
    };
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    },
    quotes() {
      return this.$store.state.quotes;
    },
  },
  mounted() {
    // API request
    this.$store.dispatch('getCharacters');
    this.$store.dispatch('getQuotes');
  },
};
</script>
<template>

  <div class="container mx-auto px-4">
    <section class="my-8 border-2 border-black rounded-lg py-4 px-2 bg-green-700 text-white"
             v-if="error">
      <p>
        Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations.
        Veuillez réessayer ultérieurement.
      </p>
    </section>
    <div class="loaderFlex"><div v-if="pending" class="loader"></div></div>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex  flex-wrap -m-4">
             <CartCharacter v-for="character in characters"
                  :key="character.char_id"
                  :character="character" />
          </div>
        </div>

        <button @click="isOpen = !isOpen"
                  class="flex mx-auto  text-white bg-green-700 border-0 py-2 px-8 rounded text-lg">
                    Charger des citations de Walter White
              <i :class=" isOpen ? 'fas fa-arrow-up ml-4 mt-2': 'fas fa-arrow-down ml-4 mt-2'"></i>
          </button>
      </section>
      <div :class="isOpen ? 'flex': 'hidden'"
            class="  flex-wrap lg:w-4/5 mt-6 sm:mx-auto sm:mb-2 -mx-2">
        <div class="loaderFlex"><div v-if="loading" class="loader"></div></div>
          <div v-for="quote in quotes"
                :key="quote.quote_id" class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    class="text-green-700 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">{{ quote.quote }}</span>
              </div>
            </div>

    </div>
  </div>

</template>
