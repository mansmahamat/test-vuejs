/* eslint-disable no-return-assign */
<script>
import axios from 'axios';

export default {
  name: 'Personnages',
  data() {
    return {
      pending: false,
    };
  },
  mounted() {
    // API request using axios to restcountries.eu
    this.pending = true;
    axios
      .get('https://www.breakingbadapi.com/api/characters')
      .then((response) => { (this.charactersInfo = response.data); })
      .catch((error) => { (this.error = error); })
      .finally(() => { this.pending = false; });
  },
};
</script>
<template>
  <div class="container mx-auto px-4">
    <h1>This is an PERSONAGE page page</h1>
    <div class="loaderFlex"><div v-if="pending" class="loader"></div></div>
    <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
              CATEGORY
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed mb-3">
              Photo booth fam kinfolk ngs jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round" viewBox="0 0 24 24">
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    <ul>
       <li v-for="character in charactersInfo" :key="character.char_id">
        {{ character.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped>
/* loading animation */
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #2f855a;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-bottom: 100px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loaderFlex {
  display: flex;
  justify-content: center;
}
</style>
