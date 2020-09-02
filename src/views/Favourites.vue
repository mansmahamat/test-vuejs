<template>
  <div class="container mx-auto px-4">
    <p v-if="favList.length === 0"
    class="text-center text-white text-2xl font-bold mt-10 bg-green-700 px-4 py-4 rounded-full">
      Aucun personnage favori pour l'instant 😪<br/> Ajoutez en 🚀
    </p>
    <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-2">
      <div v-for="item in favList"
          :key="item.character.char_id"
      class="p-2 lg:w-1/3  md:w-1/2 w-full">
        <div
        class="h-full w-64 flex items-center bg-green-700 border-green-200 border-4 p-4 rounded-lg">
          <router-link
                  :to="{ name: 'characterDetail', params: {id: item.character.char_id}}">
          <img :alt="item.character.name"
          class="w-24 h-24 bg-gray-100 object-cover object-top flex-shrink-0 rounded-full mr-4"
                :src="item.character.img">
          <div class="flex-grow">
            <h2 class="text-white font-extrabold">{{ item.character.name }}</h2>
            <p class="text-red-500 font-bold bg-white">A.K.A {{ item.character.nickname }}</p>
          </div>
          </router-link>
          <button @click.prevent="removeFavFromList(item.character), showAlert()"
          class="bg-white font-black py-2 px-2 rounded-lg text-red-700">
            Suppimer
          </button>
        </div>
      </div>
    </div>
    <button @click="$router.go(-1)"
    class="text-center mt-10 py-4 px-4  bg-black text-white">Retour</button>
  </div>
</section>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Favourites',
  computed: {
    favList() {
      return this.$store.state.favList;
    },
    favItemCount() {
      return this.$store.getters.favItemCount;
    },
  },
  methods: {
    removeFavFromList(character) {
      this.$store.dispatch('removeFavFromList', character);
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Personnage supprimé des favoris ');
    },
  },
};
</script>
