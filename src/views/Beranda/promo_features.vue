<template>
	<div>
		<section class="text-gray-700 body-font">
		  <div class="container px-5 pt-10 mx-auto">

		  	<!-- start title -->
		    <div class="flex flex-col text-center w-full mb-8">
		      <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-4">SEHATQUE NETWORK</h2>
		      <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-800">Sudah siap menjadi Enterpriser Milenial?</h1>
		      <p class="lg:w-2/3 mx-auto mt-2 text-lg text-gray-600">Dapatkan pelatihan dan ebook <b>senilai jutaan rupiah</b> serta<br/> Website Pribadi Sebagai Tools Bisnis Secara Gratis</p>
		    </div>
		    <!-- end title -->

		    <!-- start item -->
		    <div class="flex flex-wrap">
		      <div class="p-4 md:w-1/4" v-for="item in list">
		        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
		        	<div class="flex items-center mb-3">
            			<div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0" :class="item.color">
            			    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                				<path :d="item.svg"></path>
              				</svg>
            			</div>
            			<h2 class="text-gray-900 text-lg title-font font-medium">{{item.title}}</h2>
          			</div>		
		          <div class="flex-grow">
		            <p class="leading-relaxed text-base">{{item.caption}}</p>
		            <a class="mt-3 text-blue-500 inline-flex items-center pointer-cursor" :href="'/#/' + id + '/' + item.link">Pelajari lebih lanjut
		              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
		                <path d="M5 12h14M12 5l7 7-7 7"></path>
		              </svg>
		            </a>
		          </div>
		        </div>
		      </div>
		    </div>
		    <!-- end item -->

		  </div>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default{
		props : ['id'],
		data(){
			return{
				list : [
					{	
						title : "Bisnis Online",
						caption : "Ribuan tawaran bisnis dengan iming iming ratusan juta perbulan. Tapi apakah anda tahu, bisnis mana yang..",
						svg   : "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
						link  : 'bisnis-online',
						color : 'bg-blue-500'

					},
					{
						title : "Alasan Utama",
						caption : "Negara maju ditentukan dari jumlah pengusahannya,Maka dengan bisnis kita akan mendapatkan",
						svg : "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
						link : 'alasan-utama',
						color : 'bg-yellow-500'
					},
					{
						title : "Keuntungan",
						caption : "Wonderful life Kesehtan yang prima sampai usia senja Penghasilan tidak terbatas Bebas waktu",
						svg : "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
						link : 'keuntungan',
						color : 'bg-indigo-500'
					},
					{
						title : "Cara Menjalankan",
						caption : "Dalam menjalankan bisnis ini perlu diingat esensi dari bisnis ini adalah: membangun saluran saluran distribusi",
						svg : "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
						link : 'cara-menjalankan',
						color : 'bg-green-500'
					},
				]
			}
		}
	}
</script>
