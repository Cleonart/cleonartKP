<template>
	<div class="bg-blue-100 py-2">
	<div class="px-20 mb-16 mt-10">
		
		<div class="relative transform flex left-1/2 -translate-x-2/4">
			<img src="../../assets/logo.png" class="w-10 h-10 -mt-1 mr-2">
			<h2 class="font-bold text-2xl mb-8" style="font-family: 'Inter'">Kata Mereka Tentang HDI</h2>
		</div>
		
		<div class="grid grid-cols-2 gap-6">
			<div class="bg-blue-700 rounded" v-for="item in testimony">
	          <div class="mx-6 my-8 2xl:mx-10">
	            <img class="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4" :src="item.img" />
	            <h1 class="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 2xl:-mt-20 2xl:mx-8">{{item.caption_title}}</h1>
	            <h2 class="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">{{item.caption_text}}</h2>
	          </div>
	          <div class="-mt-3 relative">
	            <p class="text-white mb-3 text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">{{item.title}}</p>
	            <p class="text-white text-opacity-90 font-medium md:text-base 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2 mb-8">“{{item.text}}”</p>
	          </div>
	        </div>
	    </div>
	</div>
	</div>	
</template>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap');
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				testimony : [
					{
						title : 'Flu Singapura : Mengancam nyawa anak jika dianggap sepele',
						text : 'Dengan menggunakan Produk HDI seperti Clover Honey, Bee Propolis dan Kids3 dapat mempercepat peyembuhan',
						img : 'http://127.0.0.1/netsq/testimony/testimony_1.jpg',
						caption_title : 'Yoanita dan Jose',
						caption_text : 'Flu Singapura'
					},
					{
						title : 'Sempat Menderita TBC Paru-Paru, Azriel Kembali Sehat',
						text : 'Setelah mengkonsumsi Produk HDI Propoelix, pada tanggal 27 Oktober 2018, Azriel dinyatakan bebas dari TBC setelah dilakukan foto ulang',
						img : 'http://127.0.0.1/netsq/testimony/testimony_1.jpg',
						caption_title : 'Azriel',
						caption_text : 'TBC Paru-Paru'
					}
					
				]
			}	
		}
	}
</script>

