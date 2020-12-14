<template>
	<div>
		<Header/>
		<section class="text-gray-700 body-font">
			<div class="container mt-5 mx-auto mb-10">
			
				<form class="lg:w-6/6 md:w-1/3 bg-gray-200 rounded-lg p-8 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0" @submit.prevent="onSubmit">
					<h2 class="text-gray-900 text-lg font-bold title-font mb-5">Mendaftar Menjadi Enterpriser</h2>
					
					<!-- nama lengkap -->
					<div class="relative mb-2">
						<label for="full_name" class="leading-7 text-sm text-gray-600">Nama Lengkap</label>
						<input required oninvalid="this.setCustomValidity('Nama lengkap harus dimasukan')" oninput="setCustomValidity('')" v-model="register_data.enterpriser_name" type="text" placeholder="John Doe" id="full_name" name="full_name" :class="input.css">
					</div>

					<!-- email -->
					<div class="relative mb-2">
						<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
						<input required type="email" oninvalid="this.setCustomValidity('Email harus dimasukan')" oninput="setCustomValidity('')" v-model="register_data.enterpriser_email" placeholder="email@domain.com" id="email" name="email" :class="input.css">
					</div>

					<!-- password -->
					<div class="relative mb-2">
						<label for="password" class="leading-7 text-sm text-gray-600">Password</label>
						<input required type="password" oninvalid="this.setCustomValidity('Password harus dimasukan')" oninput="setCustomValidity('')"  v-model="register_data.enterpriser_password" placeholder="****" id="password" name="password" :class="input.css">
					</div>

					<!-- nomor telepon -->
					<div class="relative mb-2">
						<label for="telephone-number" class="leading-7 text-sm text-gray-600">No Telepon</label>
						<input required type="number" oninvalid="this.setCustomValidity('Nomor Telepon harus dimasukan')" oninput="setCustomValidity('')"  v-model="register_data.enterpriser_telephone_number" placeholder="08xx xxxx xxxx" id="telephone-number" name="telephone-number" :class="input.css">
					</div>

					<!-- Link Referal -->
					<div class="relative mb-2">
						<label for="email" class="leading-7 text-sm text-gray-600">Buat Link Referal</label>
						<input required type="text" oninvalid="this.setCustomValidity('Link Referal harus dimasukan')" oninput="setCustomValidity('')" v-model="register_data.enterpriser_link_referral" placeholder="Cth. john20" id="text" name="text" :class="input.css">
					</div>

					<!-- join button -->
					<button type="submit" class="mt-2">
						<div class="sm:flex sm:justify-center lg:justify-start w-full">
							<div class="rounded-md shadow w-full" style="user-select: none;">
								<a style="user-select: none;" class="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-sm md:px-7">
									<img class="ml-0 mr-4 inline-block h-7 w-7 rounded-full ring-2 ring-blue-400" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">Bergabung melalui {{name}}
								</a>
							</div>
						</div>
					</button>
					<p class="text-xs text-gray-500 mt-3">Dengan mendaftar anda setuju terhadap syarat dan ketentuan yang bisa saja berlaku</p>
				</form>
			</div>
		</section>
	</div>
</template>

<script>

	import {ENDPOINT} from '../../function.js';
	import Header from '../Komponen/header.vue';
	const axios = require('axios');

	export default{
		data(){
			return{
				
				// referee data
				id : "",
				name : "",

				register_data : {
					enterpriser_name  : "",
					enterpriser_email : "",
					enterpriser_password : "",
					enterpriser_telephone_number : "",
					enterpriser_link_referee : "",
					enterpriser_link_referral : "",
				},

				input : {
					css : "w-full bg-white rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				}
			}
		},
		methods : {
			getData : function(id){
				var app = this;
				let url = ENDPOINT + "/member/get.php?id=" + id;
				axios.get(url)
					 .then(function(response){
					 	console.log(response.data);
					 	if(response.data != null) {
					 		app.name = response.data.enterpriser_name;
					 		sessionStorage.setItem("referral_id", response.data.enterpriser_link_referral);
					 	}
					 	else{
					 		app.$router.push("/");
					 	}
					 })
					 .catch(function(error){
					 	console.log(error);
					 })
			},

			onSubmit : function(){
				var app = this;
				let url = ENDPOINT + "/member/add.php";
				let payload = JSON.stringify(app.register_data);
				this.enterpriser_link_referee = this.id;

				axios.post(url, payload)
					.then(function(response){
						console.log(response.data);
						alert("Berhasil didaftarkan");
					})
					.catch(function(error){

					})
			},
		},
		components : {
			Header
		},
		created(){
			this.getData(this.$route.params.id);
		}
	}
</script>