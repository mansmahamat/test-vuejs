<template>
    <section class="font-semibold">
        <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                        <router-link
                                    :to="{ name: 'characterDetail', params: {id: 1}}">
                            <img alt="content"
                                class="object-contain object-center h-full w-full"
                                src="@/assets/Walterwhite.jpg">
                        </router-link>
                    </div>
                    <p class="leading-relaxed mt-6 text-base">
                        Walter Hartwell "Walt" White Sr.,
                        également connu sous son pseudonyme clandestin "Heisenberg",
                        est un pilier américain de la drogue. Chimiste et professeur de
                        chimie au lycée d'Albuquerque, au Nouveau-Mexique, il a commencé à
                        fabriquer de la méthamphétamine cristalline après avoir été diagnostiqué
                        d'un cancer du poumon en phase terminale, afin de payer ses traitements
                        et d'assurer l'avenir financier de sa famille.
                    </p>
                        <router-link
                        :to="{ name: 'characterDetail', params: {id: 1}}"
                        tag="button"
                        class="flex mx-auto mt-6 text-white
                            bg-green-700 border-0 py-2 px-5 focus:outline-none rounded-full">
                            Voir son profil
                        </router-link>
                </div>
                <div class="sm:w-1/2 mb-10 px-4">
                    <div class="rounded-lg h-64 overflow-hidden">
                        <img alt="content" class="object-contain object-center h-full w-full"
                            src="@/assets/Jesse_Pinkman2.jpg">
                    </div>
                    <p class="leading-relaxed mt-6 text-base">
                        Jesse Bruce Pinkman est le partenaire de Walter White
                        dans le commerce de la drogue à la méthamphétamine.
                        Jesse est un petit utilisateur, fabricant et revendeur de méthamphétamine.
                        C'est également un étudiant inattentif dans la classe
                        de chimie de Walter White.
                        La propre famille de Jesse l'a expulsé à cause de sa consommation de drogue.
                        Walt traitait souvent Jesse comme un fils qui avait
                        constamment besoin d'une correction sévère.
                    </p>
                    <router-link
                        :to="{ name: 'characterDetail', params: {id: 2}}"
                        tag="button"
                        class="flex mx-auto mt-6 text-white
                            bg-green-700 border-0 py-2 px-5 focus:outline-none rounded-full">
                        Voir son profil
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'MainCharacter',
};
</script>
