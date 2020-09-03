<template>
  <div class="container mx-auto">
    <div class="my-8">
      <div class="mx-auto container">
        <video  autoplay loop muted  width="1000">
          <source src="@/assets/videoplayback.mp4" type="video/mp4">
        </video>
        <SliderHome />
      </div>
      <Synopsis />
      <MainCharacter />
      <FavouriteHome />
    </div>
  </div>
</template>
<script>
import MainCharacter from '../components/MainCharacter.vue';
import SliderHome from '../components/SliderHome.vue';
import FavouriteHome from '../components/FavouriteHome.vue';
import Synopsis from '../components/Synopsis.vue';

export default {
  name: 'Home',
  components: {
    MainCharacter,
    SliderHome,
    FavouriteHome,
    Synopsis,
  },
  isOpen: false,
};
</script>
