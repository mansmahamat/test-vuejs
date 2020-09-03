<template>
  <div id="app" class="bg-gray-900 text-white">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style >
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
