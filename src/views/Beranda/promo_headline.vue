<template>	
	<div>

		<!-- start promo with headline -->
		<div class="container py-18 mx-auto mb-0">
		    <div class="flex flex-wrap px-5">
		      <div class="p-12 md:w-1/2 flex flex-col items-start">
		        <span class="inline-block py-1 px-3 rounded bg-blue-100 text-blue-500 mt-5 text-sm font-medium tracking-widest">#JANGANCUMAKERJA</span>
		        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Kebanyakan orang Hanya Bekerja Mencari Uang</h2>
		        <p class="leading-relaxed mb-1">Semakin tinggi Penghasilan, Semakin Tinggi Pengeluaran, Karena “Gaya Hidup” , Pengeluaran Melambung, Gak Bisa Nabung.  “Tabunglah untuk Hari Tua”, Saat tidak bisa bekerja, siapa yang membiayai Hidup Anda?, Saat Tidak bisa Menghasilkan lagi, Siapa yang membiayai Anda ?</p>
		        <p class="leading-relaxed mb-8 font-medium text-blue-500 rounded bg-blue-100 px-3 py-1">Solusinya adalah ASET, Sudah siapkah ASET kita?</p>
		      </div>
		      <div class="p-12 md:w-1/2 flex flex-col items-start">
		      	<div class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0 bg-yellow-500">
		        	<svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
		        </div>
		        <h2 class="sm:text-3xl text-2xl title-font font-medium text-yellow-400 mt-3 mb-4"><b>Jika anda ingin memiliki deposito senilai Rp 1.000.000.000</b></h2>
		        <p class="leading-relaxed mb-8 text-gray-600">
		        		Menabung 1 juta / bulan membutuhkan waktu 80 tahun<br/>
		        		Menabung 2 juta / bulan membutuhkan waktu 40 tahun<br/>
		        		Menabung 4 juta / bulan membutuhkan waktu 20 tahun<br/>
		        		Menabung 8 juta / bulan membutuhkan waktu 10 tahun<br/>
		        		<span class="text-blue-500 font-medium">Kami beri Tawaran Ke Anda untuk mendapatkan Starting Aset 1 Milyar hanya dalam waktu 3-4 Tahun</span></p>
		      </div>
		    </div>
		</div>
		<!-- end promo with headline -->

		<!-- start headline callback -->
		<div class="bg-blue-600 relative">
			<img src="../../assets/left_top_attr.png" class="w-60 absolute z-0">
			<img src="../../assets/bottom_right_attr.png" class="w-60 absolute right-0 bottom-0 z-0">
      		<div class="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-2 relative">
          		<p class="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl mx-auto">Tidak pake tabung, tidak mengeluarkan uang anda<br/>tidak meninggalkan pekerjaan anda</p>
        		<div class="mt-6 mx-auto flex">
          			<div class="rounded-md shadow mx-auto">
          				<a :href="'/#/' + id + '/register'" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-black bg-yellow-500 pointer-cursor">Bergabung Sekarang</a>
          			</div>
          		</div>
          	</div>
          </div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props : ['id']
	}
</script>