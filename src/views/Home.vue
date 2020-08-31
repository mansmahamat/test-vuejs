<template>
  <div class="container mx-auto px-4">
    <HelloWorld msg="Welcome to MANS Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
