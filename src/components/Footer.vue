<template>
<footer class="bg-green-700 mt-10 h-auto py-10 text-sm">
            <div class="max-w-5xl mx-auto pb-8 mb-6 border-b border-green-700 px-4 lg:px-0">
                <div class="flex flex-wrap items-start justify-start">
                    <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
                        <h5 class="font-semibold text-white mb-2">Breaking Bad</h5>
                    </div>

                    <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
                        <h5 class="font-semibold text-white  mb-2">Comment ça marche ?</h5>
                    </div>

                    <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
                        <h5 class="font-semibold text-white mb-2">
                            <a href="https://breakingbadapi.com/" target="_blank">
                                API Breaking Bad
                            </a>
                        </h5>
                    </div>

                    <div class="lg:w-1/4 w-full">
                        <div class="flex items-baseline text-white justify-start mb-2">
                            <a href="https://www.linkedin.com/in/mansour-mahamat-salle-138b73138/"
                                class="mr-2"
                                target="_blank">
                                <i class="fab fa-linkedin text-2xl"></i>
                            </a>

                            <a href="https://github.com/mansmahamat" target="_blank" class="mr-2">
                                <i class="fab fa-github-square text-2xl"></i>
                            </a>

                            <a href="http://mansour-mahamat.fr/" target="_blank">
                                <i class="fas fa-globe-africa text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-5xl mx-auto flex items-center px-4 lg:px-0">
                <i class="fas fa-award text-white text-xl  "></i>
                <p class=" font-medium text-white text-base pl-2">
                    &copy; 2020 Breaking Bad API, Inc. All rights reserved.</p>
            </div>
        </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
