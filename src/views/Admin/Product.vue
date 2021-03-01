<template>
	<div class="mx-56 pt-4 pb-4 relative">
		
		<ModalViewProduct ref="modal"></ModalViewProduct>

		<!-- modal for add or edit product -->
		<ModalContent ref="product_modal">
			<div slot="content">
				<div class="grid grid-cols-3 mt-1">

					<div class="mr-2 col-span-1">

	         				<file-pond
								:server="ENDPOINT + '/pond/'"
								class="mt-3 mb-1"
					        	ref="file" 
					        	:files="product.product_img"
					        	instantUpload="false"
					        	label-idle="Upload disini.."
					        	multiple="false"
					        	max-file-size="5MB"/>

        			</div>

					<form @submit.prevent="onSubmit()" class="mt-0 ml-4 col-span-2">

						<!-- nama produk -->
			            <p class="text-sm mb-1 text-gray-500">Nama Produk</p>
			            <input required :class="css.input" 
			            	   v-model="product.product_name" 
			            	   type="text" placeholder="Ex. Propoelix">

			           	<!-- nama produk -->
			            <p class="text-sm mb-1 text-gray-500">Detail Singkat</p>
			            <input required :class="css.input" 
			            	   v-model="product.product_misc" 
			            	   type="text" placeholder="Ex. 60 Tablet">

			            <div class="flex">

			            	<!-- harga umum -->
			            	<div>
			            		<p class="text-sm mb-1 text-gray-500">Harga Umum</p>
			            		<input required v-model="product.product_price"
			            			   :class="css.input" type="number" placeholder="Ex. 5000">
			            	</div>

			            	<!-- harga member -->
			            	<div class="ml-3"> 
			            		<p class="text-sm mb-1 text-gray-500">Harga Member</p>
			            		<input required v-model="product.product_price_member"
			            			   :class="css.input" type="number" placeholder="Ex. 2500">
			            	</div>

			            </div>
			            
			            <!-- kategori produk -->
			            <p class="text-sm mb-1 text-gray-500">Kategori Produk</p>
			            <select v-model="product.product_category" required :class="css.input">
			            	<option>NUTRISI KESEHATAN</option>
			            	<option>PERSONAL CARE</option>
			            	<option>BEAUTY</option>
			            	<option>SKINCARE</option>
			            </select>

			            <!-- kategori produk -->
			            <p class="text-sm mb-1 text-gray-500">Deskripsi Singkat</p>
			            <textarea v-model="product.product_desc" required rows="4" :class="css.input" class="pr-3"></textarea>

			            <input type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-auto sm:text-sm" value="Simpan" />
			            <button @click="$refs.product_modal.close()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 ml-2 sm:w-auto sm:text-sm">Batalkan</button>
				    </form>
			   	 </div>
			</div>

		</ModalContent>
		
		<div class="flex mb-5 mt-3 relative">
			<div>
				<p class="text-3xl font-bold mb-1">Kelola Produk</p>
				<p class="mb-3 text-gray-400">Lakukan pengelolaan produk disini</p>
			</div>
			<div class="absolute transform right-0 top-1/2 -translate-y-2/4 flex">
				<input type="text" class="pl-6 pr-7 rounded-full text-sm border-gray-300 border mr-2" placeholder="Cari Produk Disini">
				<p @click="openProductModal(-1, 'edit')" class="bg-blue-700 text-white font-medium text-sm py-3 px-6 rounded-full hover:opacity-60 cursor-pointer">Tambah Produk baru</p>
			</div>
		</div>
		
		<div class="flex flex-wrap -m-2 mb-10">
			<div class="w-1/4 p-2 hover:opacity-80" v-for="product in products">
				<div class="rounded-xl relative">
					<a class="block relative h-56 rounded-xl overflow-hidden">
						<img v-if="product.product_img == ''" class="object-cover object-center w-full h-full block" :src="ENDPOINT + '/product/unnamed.png'" alt="date">
         				<img v-else class="object-cover object-center w-full h-full block" :src="product.product_img">
        			</a>
        			<div class="absolute top-0 flex mt-1 ml-1 z-20">
        				<p class="bg-green-500 text-white font-medium text-xs mr-1 py-2 px-3 rounded-md hover:opacity-60 cursor-pointer" @click="openProductModal(product.product_id, 'edit')">Sunting</p>
        				<p @click="deleteProduct(product.product_id)" class="bg-red-500 text-white font-medium text-xs py-2 px-3 rounded-md hover:opacity-60 cursor-pointer">Hapus</p>
        			</div>
        			<div class="absolute bottom-0 rounded-xl bg-gradient-to-t from-black to-transparent w-full">
        				<div class="ml-3 mb-5 mt-20 z-10 cursor-pointer" @click="openProductModal(product.product_id)">
        					<span class="text-xs text-white px-2 py-1 -ml-1 bg-yellow-100 text-yellow-500 font-bold rounded-full" style="font-size: 0.6rem">{{product.product_category}}</span>
							<p class="text-md text-white font-medium mb-1 mt-2">{{product.product_name}}</p>
							<span class="text-xs bg-yellow-100 rounded-full -ml-1 text-yellow-500 py-1 px-2 text-white font-medium mb-1 mt-2">{{product.product_misc}}</span>
							<p class="text-xs text-white font-medium mt-1">Umum : Rp. {{formatRupiah(product.product_price)}}</p>
							<p class="text-xs text-white font-medium">Member : Rp. {{formatRupiah(product.product_price_member)}}</p>
        				</div>
        			</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import vueFilePond, { setOptions } from 'vue-filepond';
	import 'filepond/dist/filepond.min.css';
	import {formatRupiah} from '../../function/function.js';
  	import ModalContent from '../Komponen/modal_content.vue';
  	import ModalViewProduct from '../Komponen/modal_view_product.vue';
	import {ENDPOINT} from '@/function.js'
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import FilePondPluginFileRename from 'filepond-plugin-file-rename';
	import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
	
	const axios = require('axios');
	const FilePond = vueFilePond(FilePondPluginImagePreview, FilePondPluginFileRename);
	
	// rename function
	setOptions({
		fileRenameFunction: (file) => {
			var date     = new Date();
			var dateTime = date.getFullYear() + "" + date.getDate() + "" + date.getMonth() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
			return dateTime + `${file.extension}`;
		}
	});

	export default{
		data(){
			return{
				css : {
					input : "mt-0 mb-3 pl-3 py-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md border ",
				},
				product : {
					product_category: "NUTRISI KESEHATAN",
					product_desc: "",
					product_id: "",
					product_img: "",
					product_link: "",
					product_misc: "",
					product_name: "",
					product_price: "",
					product_price_member: "",
				},
				products : [],
				ENDPOINT : '',
			}
		},
		methods : {
			getAllProduct : function(){
				var app = this;
				let url = ENDPOINT + "/product/get.php";

				axios.get(url)
					 .then(response => {
					 	app.products = response.data;
					 	console.table(response.data);
					 })
					 .catch(error => {
					 	console.log(error);
					 })
			},

			deleteProduct : function(id){
				var app = this;

				if(!confirm("Anda yakin ingin menghapus data ini?")){
					return;
				}

				let url = ENDPOINT + "/product/delete.php?id=" + id;
				axios.get(url)
				     .then(response => {
				     	
				     	if(response.data.error_code){
				     		alert("Gagal menghapus produk\nPesan : Produk terdaftar di paket");
				     	}
				     	else{
				     		alert("Data Berhasil Dihapus");
				     		app.products = response.data;
				     	}

				     })
			},

			formatRupiah : function(data){
				return formatRupiah(String(data));
			},

			openProductModal : function (id, type="view") {
				var app = this;
				let url = ENDPOINT + "/product/get.php?id=" + id;
				axios.get(url)
					 .then(response => {
					 	app.product = response.data;
					 	console.log(response.data);
					 	
					 	if(type == 'view'){
					 		app.$refs.modal.open(id);
					 	}

					 	else{
					 		if (id == -1) {
					 			app.product = {
					 				product_category: "PRODUK KESEHATAN",
									product_desc: "",
									product_id: "",
									product_img: "",
									product_link: "",
									product_misc: "",
									product_name: "",
									product_price: "",
									product_price_member: "",
					 			}
					 		}
					 		app.$refs.product_modal.open();
					 	}
					});
				
			},

			onSubmit : function(){
				var app = this;
				let url = ENDPOINT + "/product/add_update.php";
				
				if(this.$refs.file.getFile() == null || this.$refs.file.getFile() == "null"){
					alert("Harus mengupload gambar..");
					return;
				}

				if(!confirm("Anda yakin ingin menyimpan data ini?")){
					return;
				}

				this.$refs.file.processFile()
					.then(response => {
						let server_id = app.$refs.file.getFile().serverId;
						let filename  = app.$refs.file.getFile().filename;
						app.product.product_img = ENDPOINT + "/product/" + server_id + "/" + filename;
						let json = JSON.stringify(app.product);
						axios.post(url, json)
				     		.then(response_data => {
				     			app.products = response_data.data;
				     			console.log(response_data);
				     			alert("Pengubahan data behasil dilakukan..");
				     			app.$refs.product_modal.close();
				     		})
				     		.catch(error_data => {
				     			console.log(error_data);
				     			alert("Terjadi kesalahan dalam menyimpan data");
				     		})
					})
					.catch(error => {
						alert("Error saat mengupload file..");
					});
				
			}
		},
		components : {
			ModalContent,
			ModalViewProduct
		},
		created(){
			this.getAllProduct();
			this.ENDPOINT = ENDPOINT;
			
		}
	}
</script>