<script>
import axios from 'axios';

export default {
  name: 'character-detail',
  data() {
    return {
      // API loading animation, error message, API response
      pending: false,
      error: null,
      characterInfo: null,
    };
  },
  mounted() {
    this.pending = true;
    // API request to load country data
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${this.$route.params.character}`)
      .then((response) => {
        (this.characterInfo = response.data);
      })
      .catch((error) => { (this.error = error); console.log(error); })
      .finally(() => { this.pending = false; });
  },
};
</script>

<template>
     <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0">
           <div class="loaderFlex"><div v-if="pending" class="loader"></div></div>
    <div
    id="profile"
    v-for="character in characterInfo" v-bind:key="character.id"
    class="w-full lg:w-3/5 rounded-lg
    lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-green-700 text-white mx-6 lg:mx-0">

    <div class="p-4 md:p-12 text-center lg:text-left">
        <div
        class="block lg:hidden rounded-full shadow-xl
         mx-auto -mt-16 h-48 w-48 bg-cover bg-top"
        :style="{'background-image':`url('${character.img}')`}">
        </div>

            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{character.name}}</h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Date de naissance : {{ character.birthday }}
            </p>
           <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Rôle : {{ character.occupation[0] }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Surnom : {{ character.nickname }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Statut : {{ character.status }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Acteur : {{ character.portrayed }}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Apparition : Saison {{ character.appearance }}
            </p>

            <div class="pt-12 pb-8">
        <button @click="$router.go(-1)"
                class="text-green-700 bg-white font-bold py-2 px-4 rounded-full">
                 Retour
        </button>
        </div>
    </div>

</div>
<div  v-for="character in characterInfo" v-bind:key="character.id" class="w-full lg:w-2/5">

    <img v-bind:src="character.img" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
    <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->

    </div>

</div>
</template>
