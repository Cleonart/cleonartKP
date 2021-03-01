<template>	
	<div class="mx-56 pt-4 relative">	

		<!-- add or update packet -->
		<ModalContent ref="modal_packet_mutate">
			<div slot="content">
				<form class="w-full" @submit.prevent="onSubmit()">

					<!-- nama paket -->
			        <p class="text-sm mb-1 text-gray-500">Nama Paket</p>
			        <input required :class="css.input" 
			        	   v-model="packet.packet_name"
			               type="text" placeholder="Ex. Propoelix">

			        <!-- kategori produk -->
			        <p class="text-sm mb-1 text-gray-500">Daftar Produk</p>
			        <div class="flex mb-3">
				        <select v-model="selected_product" required :class="css.input" style="margin-bottom: 0;">
				        	<option value="null">Pilih Produk</option>
				           	<option v-for="(product, index) in products" :value="product.product_id">{{product.product_name}} - Rp. {{formatRupiah(product.product_price)}}</option>
				        </select>
				        <button @click="addToPacketDetail()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 ml-2 sm:w-auto sm:text-sm">Tambah</button>
				    </div>

				    <div class="mb-5">
				    	<p class="font-medium text-sm py-2 rounded-md mb-5 px-3 bg-yellow-100 text-yellow-500" 
				    	   v-if="packet.packet_detail.length == 0">Daftar produk paket kosong</p>
				    	<div v-for="(product, index) in packet.packet_detail" 
				    	     class="border border-blue-300 rounded-md py-2 pl-3 text-sm mb-2 bg-blue-50 text-blue-600 relative">
				    		<span class="font-medium">{{product.product_name}}</span><br>
				    		Rp. {{formatRupiah(product.product_price)}} - 
				    		Jumlah : {{product.product_quantity}}
				    		<div @click="deleteFromPacketDetail(product.product_id)"
				    			 class="absolute right-5 underline cursor-pointer transform top-1/2 -translate-y-2/4">
				    			Hapus
				    		</div>
				    	</div>
				    </div>

			        <div class="grid grid-cols-2 gap-3">

					    <!-- total harga paket -->
			        	<div>
					        <p class="text-sm mb-1 text-gray-500">Harga Seluruh (Sebelum Diskon)</p>
					        <input required disabled :class="css.input"
					        	   v-model="packet.packet_total_price"
					               type="number" placeholder="Rp. 0000">
					    </div>

				        <!-- diskon paket -->
				        <div>
				        	<p class="text-sm mb-1 text-gray-500">Diskon % (angka 0-100)</p>
				        	<input required :class="css.input"
				        		   v-model="packet.packet_disc"
				        		   max="100" 
				               	   type="number" placeholder="Rp. 0000">
				        </div>

				    </div>

				    <p class="text-gray-500 font-medium text-xs mt-2 mb-1">TOTAL SETELAH DISKON</p>
				    <p class="mb-4 text-2xl font-medium">Rp. {{formatRupiah(packet.packet_total_price - (packet.packet_total_price * (packet.packet_disc/100)))}}</p>

				    <div class="mb-0">
						<input type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm" value="Simpan" />
						<button v-if="packet.packet_id" @click="deletePacket(packet.packet_id)" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-red-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-white hover:bg-red-800 bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 ml-2 sm:w-auto sm:text-sm">Hapus Paket</button>
						<button @click="closePacketModal()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 ml-2 sm:w-auto sm:text-sm">Batalkan</button>
					</div>
				</form>
			</div>
		</ModalContent>

		<div class="flex mb-5 mt-3 relative">
			<div>
				<p class="text-3xl font-bold mb-1">Kelola Paket Promosi</p>
				<p class="mb-3 text-gray-400">Promosikan produk melalui paket yang jauh lebih murah</p>
			</div>
			<div class="absolute transform right-0 top-1/2 -translate-y-2/4 flex">
				<input type="text" class="pl-6 pr-7 rounded-full text-sm border-gray-300 border mr-2" placeholder="Cari Paket Disini">
				<p @click="openPacketModal(-1, 'edit')" class="bg-blue-700 text-white font-medium text-sm py-3 px-6 rounded-full hover:opacity-60 cursor-pointer">Tambah Paket baru</p>
			</div>
		</div>

		<!-- paket tidak ditemukan -->
		<p   v-if="packets.length == 0"
			 class="bg-red-100 text-red-500 px-5 py-3 rounded-md font-medium">Katalog Paket Kosong</p>

		<!-- show all packet -->
		<div class="flex flex-wrap -m-2 mb-10">
			<div class="w-1/4 p-2 hover:opacity-80 relative" v-for="packet in packets" @click="openPacketModal(packet.packet_id)">
				<div class="rounded-xl border border-gray-300 h-full rounded py-2 px-4 relative">
					<p class="text-1xl mt-2 mb-3 font-medium">Paket {{packet.packet_name}}</p>

					<div class="flex mb-3">
						<a v-for="product in packet.packet_detail" 
						   class="block relative w-1/4 rounded pr-1 overflow-hidden" style="height: 50px;">
		         			<img v-if="product.product_img" 
		         				 class="object-cover object-center w-full h-full block" 
		         				 :src="product.product_img">
		         		</a>
		         	</div>

		         	<p class="text-sm text-gray-600" 
		         	   v-for="product in packet.packet_detail">{{product.product_quantity}}x - {{product.product_name}}</p>

		         	<div class="w-full mb-20 text-transparent">-----------</div>
		         	
		         	<div class="absolute bottom-0">
			         	<p class="mt-3">
			         		<span class="line-through">Rp {{formatRupiah(packet.packet_total_price)}}</span> 
			         		<span class="py-1 px-2 text-xs bg-red-100 text-red-500 rounded-full font-medium">
			         			-{{packet.packet_disc}}%
			         		</span>
			         	</p>
			         	<p class="mb-4 text-2xl mb-0 font-medium relative">
			         		Rp {{formatRupiah(packet.packet_total_price - (packet.packet_total_price * (packet.packet_disc/100)))}} 
			         	</p>
			         	<p class="text-sm -mt-3 mb-4 text-gray-500">
			         		Anda hemat Rp {{ formatRupiah((packet.packet_total_price * (packet.packet_disc/100)))}}
			         	</p>
			        </div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
		
	import {ENDPOINT} from '@/function.js';
	import {formatRupiah} from '../../function/function.js';
  	import ModalContent from '../Komponen/modal_content.vue';

  	const axios = require('axios');

	export default{
		data(){
			return{

				css : {
					input : "mt-0 mb-3 pl-3 py-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md border ",
				},

				packet : {
					packet_id          : "",
					packet_name        : "",
					packet_disc        : 0,
					packet_total_price : 0,
					packet_detail      : []
				},

				packets  : [],
				products : [],

				// helper
				selected_product : null,
				ENDPOINT : '',
			}
		},
		watch : {
			"packet.packet_detail" : {
				handler(val){
					this.packet.packet_total_price = 0;
					for(let i = 0; i < this.packet.packet_detail.length; i++){
						this.packet.packet_total_price += (this.packet.packet_detail[i].product_price * this.packet.packet_detail[i].product_quantity);
					}
				},
				deep: true
			}
		},
		methods : {
			
			formatRupiah : function(val) {
				return formatRupiah(String(val));
			},

			reset : function(){
				
				// resetting the packet object
				this.packet = {
					packet_id	       : "",
					packet_name        : "",
					packet_disc        : 0,
					packet_total_price : 0,
					packet_detail      : []
				};

				// resetting the selected product
				this.selected_product = null;
			},

			openPacketModal	: function(id, type="view") {
				var app = this;
				this.reset();

				// insert mode
				if(id == -1){
					app.$refs.modal_packet_mutate.open();
					return;
				}

				// edit mode
				let url = ENDPOINT + "/packet/get.php?id=" + id;
				axios.get(url)
				     .then(response => {
				     	let temporary = response.data;
				     	temporary.packet_disc = parseInt(temporary.packet_disc);
				     	temporary.packet_total_price = 0;
				     	for(let i = 0; i < temporary.packet_detail.length; i++){
				     		temporary.packet_detail[i].product_price    = parseInt(temporary.packet_detail[i].product_price);
				     		temporary.packet_detail[i].product_quantity = parseInt(temporary.packet_detail[i].product_quantity);
				     	}
				     	console.log(temporary);
				     	app.packet = temporary;
				     	app.$refs.modal_packet_mutate.open();
				     })
			},

			closePacketModal : function(){
				this.reset();
				this.$refs.modal_packet_mutate.close();
			},

			addToPacketDetail : function(){
				var app = this;
				
				for(let i = 0; i < this.packet.packet_detail.length; i++){
					if(this.packet.packet_detail[i].product_id == this.selected_product){
						this.packet.packet_detail[i].product_quantity++;
						return;
					}
				}

				let product_data = this.searchProduct(this.selected_product);

				this.packet.packet_detail.push({
					product_id       : product_data.product_id,
					product_name     : product_data.product_name,
					product_price    : product_data.product_price,
					product_quantity : 1
				});
			},

			deleteFromPacketDetail : function(id){
				for(let i = 0; i < this.packet.packet_detail.length; i++){
					if(id == this.packet.packet_detail[i].product_id){
						this.packet.packet_detail.splice(i, 1);
						break;
					}
				}
			},

			searchProduct : function(id){
				for(let i = 0; i < this.products.length; i++){
					if(id == this.products[i].product_id){
						return this.products[i];
					}
				}
			},

			getAllData : function(){
				var app = this;
				let url = ENDPOINT + "/packet/get.php";
				axios.get(url)
					 .then(response => {
					 	app.packets  = response.data.packets;
				     	app.products = response.data.products;
				     	console.log(response);
				     })
			},

			deletePacket : function(id){

				if(!confirm("Anda yakin ingin menghapus	paket ini?")){
					return;
				}

				var app = this;
				let url = ENDPOINT + "/packet/delete.php?id=" + id;
				axios.get(url)
				     .then(response => {
				     	app.packets	= response.data.packets;
				     	app.$refs.modal_packet_mutate.close();
				     	alert("Paket berhasil dihapus");
				     })
			},

			onSubmit : function(){

				if(!confirm("Anda yakin ingin menyimpan data ini?")){
					return;
				}

				let app = this;
				let url = ENDPOINT + "/packet/add_update.php"
				let json_data = JSON.stringify(app.packet);
				axios.post(url, json_data)
					 .then(response => {
					 	app.packets  = response.data.packets;
				     	app.products = response.data.products;
				     	alert("Paket berhasil disimpan");
				     	app.$refs.modal_packet_mutate.close();
					 	console.log(response);
					 })
			}
		},
		components : {
			ModalContent
		},
		created(){
			this.ENDPOINT = ENDPOINT;
			this.getAllData();
		}
	}

</script>