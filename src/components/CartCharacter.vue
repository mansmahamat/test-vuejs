<template>
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <router-link
                  :to="{ name: 'characterDetail', params: {id: character.char_id }}">
              <div class="block bg-green-700 py-2 px-2 relative h-48 rounded overflow-hidden">
                <img :alt="character.name"
                      class="object-contain object-center w-full h-full block"
                      :src="character.img" >
              </div>
              </router-link>
              <div class="-mt-4 bg-green-700 text-center">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Saison : {{ character.appearance }}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{{ character.name }}</h2>
                <p class="mt-1">{{ character.nickname }}</p>
          <button
          v-if="favList.find((item) => {
    return item.character.char_id === character.char_id;
  })"
          @click.prevent="showError()"

          class="rounded-full w-10 h-10  my-4 bg-gray-200 focus:outline-none
          p-0 border-0 inline-flex items-center justify-center text-red-600 ml-4">
            <svg fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12
                        5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06
                        1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
                          <button
                          v-else
          @click.prevent="addToFavList(), showAlert()"
          class="rounded-full w-10 h-10  my-4 bg-gray-200 focus:outline-none
          p-0 border-0 inline-flex items-center justify-center text-green-600 ml-4">
            <svg fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12
                        5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06
                        1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>

              </div>
            </div>
</template>
<script>
export default {
  name: 'CartCharacter',
  props: ['character'],
  computed: {
    favList() {
      return this.$store.state.favList;
    },
    favItemCount() {
      return this.$store.getters.favItemCount;
    },
  },
  methods: {
    addToFavList() {
      this.$store.dispatch('addCharacterToFav', {
        character: this.character,
        quantity: 1,
      });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Personnage ajouté aux favoris ❤');
    },
    showError() {
      // Use sweetalert2
      this.$swal('Personnage déjà en favori 🤡');
    },
  },
};
</script>
