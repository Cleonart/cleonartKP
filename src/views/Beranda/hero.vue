<template>
	<div class="relative overflow-hidden -mt-10">
      <div class="max-w-6xl mx-auto">
        <div class="relative z-10 pb-4 sm:pb-0 md:pb-4 lg:max-w-2xl lg:w-full lg:pb-4 xl:pb-5">
          <main class="mt-12 pt-4">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Jadilah bagian dari</span>
                <span class="block text-blue-600 xl:inline md:ml-0 lg:ml-3">Enterpriser Milenial</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Starting aset mulai dari 1 milyar hanya dalam waktu 3-4 tahun, bekerja dengan mudah dan efisien, investasi sempurna untuk masa tua anda</p>

              <!-- join button -->
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a :href="'/#/' + id + '/register ' "  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-7">
                    <img class="ml-0 mr-4 inline-block h-7 w-7 rounded-full ring-2 ring-blue-400" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">Bergabung melalui {{name}}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      	<img class="lg:w-45 py-10 mt-5 mx-auto" style="border-radius: 0 0 100% 100%" src="../../assets/3622092.png">
      </div>
    </div>
</template>

<script>
	export default{
		props: ['id', 'name']
	}
</script>