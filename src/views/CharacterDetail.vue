<script>

export default {
  name: 'CharacterDetail',
  props: ['id'],
  methods: {
    addToFavList() {
      this.$store.dispatch('addCharacterToFav', {
        character: this.character,
        quantity: 1,
      });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Personnage ajouté aux favoris 🐱‍🏍👏👏');
    },
    showError() {
      // Use sweetalert2
      this.$swal('Personnage déjà en favori 🎃😏');
    },
  },
  data() {
    return {
      // API loading animation, error message, API response
      pending: false,
      error: null,
      characterInfo: null,
    };
  },
  computed: {
    character() {
      return this.$store.state.character;
    },
    favList() {
      return this.$store.state.favList;
    },
  },
  mounted() {
    // API request
    this.$store.dispatch('getCharacter', this.id);
  },
};
</script>

<template>
     <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0">
           <div class="loaderFlex"><div v-if="pending" class="loader"></div></div>
    <div
    id="profile"
    v-for="char in character" v-bind:key="char.id"
    class="w-full lg:w-3/5 rounded-lg
    lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-green-700 text-white mx-6 lg:mx-0">

    <div class="p-4 md:p-12 text-center lg:text-left">
        <div
        class="block lg:hidden rounded-full shadow-xl
         mx-auto -mt-16 h-48 w-48 bg-cover bg-top"
        :style="{'background-image':`url('${char.img}')`}">
        </div>

            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{char.name}}</h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Date de naissance : {{ char.birthday }}
            </p>
           <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Rôle : {{ char.occupation[0] }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Surnom : {{ char.nickname }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Statut : {{ char.status }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Acteur : {{ char.portrayed }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Apparition : Saison {{ char.appearance }}
            </p>

            <div class="pt-12 pb-8">
        <button @click="$router.go(-1)"
                class="text-green-700 focus:outline-none bg-white font-bold py-2 px-4 rounded-full">
                 Retour
        </button>
         <button
          v-if="favList.find((item) => {
    return item.character.char_id === char.id;
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

</div>
<div  v-for="char in character" v-bind:key="char.id" class="w-full lg:w-2/5">

    <img v-bind:src="char.img" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
    <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->

    </div>

</div>
</template>
