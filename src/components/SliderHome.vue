<template>
    <div class="trending-now mt-8 mb-12">
        <vue-glide
          :perView="5"
          :gap="15"
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
          <vue-glide-slide>
            <div
            :style="{'background-image':'url(https://i.ibb.co/c11Trcn/saison1.jpg) '}"
            href="/"
            class=" bg-cover bg-center text-white font-black h-40 flex justify-center
            items-center border-2 border-green-700 rounded-lg p-4 ">
            <a target="_blank" href="https://www.netflix.com/fr/title/70143836">Saison 1 <br/> <span class="ml-4"><i class="fas fa-video"></i></span> </a>
            </div>
          </vue-glide-slide>
          <vue-glide-slide>
          <div
            :style="{'background-image':'url(https://i.ibb.co/W28n4Nd/AAAABQTfje-MCYOYrn8-8-SAPAPGms-Xp0h-Bsb-QE09-A5h22-Poz53hmc-Lp-Lk8-Wnx-Af90-W-q-Qe-Ay-HIB-P4yb-ZHFAu.jpg) '}"
            href="/"
            class=" bg-cover bg-center text-white font-black h-40 flex justify-center
            items-center border-2 border-green-700 rounded-lg p-4">
               <a target="_blank" href="https://www.netflix.com/fr/title/70143836">Saison 2 <br/> <span class="ml-4"><i class="fas fa-video"></i></span> </a>
          </div>
          </vue-glide-slide>
          <vue-glide-slide>
           <div
            :style="{'background-image':'url(https://i.ibb.co/XpPQs0W/saison3.jpg) '}"
            href="/"
            class=" bg-cover bg-center text-white font-black h-40 flex justify-center
            items-center border-2 border-green-700 rounded-lg p-4">
               <a target="_blank" href="https://www.netflix.com/fr/title/70143836">Saison 3 <br/> <span class="ml-4"><i class="fas fa-video"></i></span> </a>
          </div>
          </vue-glide-slide>
          <vue-glide-slide>
            <div
            :style="{'background-image':'url(https://i.ibb.co/7t157FD/Saison4.jpg) '}"
            href="/"
            class=" bg-cover bg-center text-white font-black h-40 flex justify-center
            items-center border-2 border-green-700 rounded-lg p-4">
               <a target="_blank" href="https://www.netflix.com/fr/title/70143836">Saison 4 <br/> <span class="ml-4"><i class="fas fa-video"></i></span> </a>
          </div>
          </vue-glide-slide>
          <vue-glide-slide>
             <div
            :style="{'background-image':'url(https://i.ibb.co/KsPbv3M/saison5.jpg) '}"
            href="/"
            class=" bg-cover bg-center text-white font-black h-40 flex justify-center
            items-center border-2 border-green-700 rounded-lg p-4">
               <a target="_blank" href="https://www.netflix.com/fr/title/70143836">Saison 5 <br/> <span class="ml-4"><i class="fas fa-video"></i></span> </a>
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
      </div> <!-- end hero -->
</template>
<script>
export default {
  name: 'SliderHome',
};
</script>
