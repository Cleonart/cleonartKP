<template>
	<div>

		<!-- modal for view product -->
		<ModalContent ref="modal">
			<div slot="content">
				<div class="flex mt-1">
					<div class="w-2/6 mr-2">
						<a class="block relative w-full h-48 rounded-xl overflow-hidden">
	         				<img v-if="product.product_img" 
	         					 class="object-cover object-center w-full h-full block" 
	         					 :src="product.product_img">
	         				<img v-else class="object-cover object-center w-full h-full block" 
	         					 :src="ENDPOINT + '/product/unnamed.png'">
	        			</a>
        			</div>
					<div class="w-4/6 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.product_category}}</h3>
          				<h2 class="text-gray-900 title-font text-2xl font-bold mb-1">{{product.product_name}} <span class="text rounded bg-yellow-100 text-sm px-1 py-1 text-yellow-500 font-medium">{{product.product_misc}}</span></h2>
				        <div class="mt-3 mb-2">
				        	<div class="text-sm text-gray-500 flex">
				        		<div class="w-1/2">
				        			<p>Harga Umum</p>
				        			<p class="text-gray-800 font-medium text-xl">Rp. {{formatRupiah(product.product_price)}}</p>
				        		</div>
				        		<div class="w-1/2">
				        			<p>Harga Member</p>
				        			<p class="text-gray-800 font-medium text-xl">Rp. {{formatRupiah(product.product_price_member)}}</p>
				        			<p class="mt-1 text-yellow-500 font-medium">Hemat Rp. {{formatRupiah(product.product_price_member - product.product_price)}}</p>
				        		</div>
				            </div>
				        	<p class="text-sm text-gray-500 mt-3">
				        		<b class="text-xs">DESKRIPSI</b><br/>
				        		<span>{{product.product_desc}}</span>
				        	</p>
				        </div>
				    </div>
			   	 </div>
			</div>
		
			<div slot="button">
				<button @click="$refs.modal.close()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Batalkan</button>
			</div>		
		</ModalContent>

	</div>
</template>

<script>
	
	import {ENDPOINT} from '../../function.js';
	import {formatRupiah} from '../../function/function.js';
	import ModalContent	from './modal_content.vue';

	const axios = require('axios');

	export default{
		data(){
			return{
				product : {
					product_category: "PRODUK KESEHATAN",
					product_desc: "",
					product_id: "",
					product_img: "",
					product_link: "",
					product_misc: "",
					product_name: "",
					product_price: "",
					product_price_member: "",
				},
				ENDPOINT : "",
			}
		},
		methods : {
			open : function(id){
				var app = this;
				let url = ENDPOINT + "/product/get.php?id=" + id;
				axios.get(url)
				     .then(response => {
				     	app.product = response.data;
				     	app.$refs.modal.open();
				     })
			},
			formatRupiah : function(val) {
				return formatRupiah(String(val));
			}
		},
		components : {
			ModalContent
		},
		created(){
			this.ENDPOINT = ENDPOINT;
		}
	}
</script>