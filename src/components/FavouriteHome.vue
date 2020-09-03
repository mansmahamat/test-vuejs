<template>
<div v-if="favList.length > 0"
      class="continue-watching px-6 mt-10 mb-12 overflow-hidden">
        <h3 class="mb-1 font-bold">Vos Favoris</h3>

        <vue-glide
          :perView="5"
          :gap="20"
          :peek="{ before: 0, after: 70 }"
          :breakpoints="{
            1024: {
              perView: 3
            },
            800: {
              perView: 2,
            },
            576: {
              perView: 1,
              peek: {
                before: 0,
                after: 0,
              }
            }
          }"
        >

          <vue-glide-slide
          v-for="item in favList"
          :key="item.character.char_id">
            <div
            :style="{'background-image':`url('${item.character.img}')`}"
            href="/"
            class=" bg-cover bg-top text-white font-black h-48 flex justify-center
            items-center border-2 border-green-700 rounded-lg p-4">
             <router-link
                  :to="{ name: 'characterDetail', params: {id: item.character.char_id}}">
               <p class="mt-20 bg-white text-sm text-green-700 text-center rounded-full px-2  font-black" href="https://www.netflix.com/fr/title/70143836">{{ item.character.name }} </p>
             </router-link>
          </div>
          </vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<"
            class="absolute w-8 h-8 rounded-full bg-gray-500"
            style="top:calc(50% - 16px); left: 10px">
              <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                <path d="M0 12l10.975 11
                2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
              </svg>
            </button>
            <button data-glide-dir=">"
              class="absolute w-8 h-8 rounded-full bg-gray-500"
              style="top:calc(50% - 16px); right: 10px">
              <svg width="18" height="18" viewBox="0 0 24 24" style="margin-left: 6px">
                <path d="M13.025 1l-2.847
                2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
              </svg>
            </button>
          </template>
        </vue-glide>
      </div> <!-- end favourite -->
</template>
<script>
export default {
  name: 'FavouriteHome',
  computed: {
    favList() {
      return this.$store.state.favList;
    },
  },
};
</script>
