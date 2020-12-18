<template>
	<div>
		<img src="../../assets/backdrop_daftar.svg" class="z-1 w-full absolute opacity-25">
		<Header class="relative" />
		
		<!-- modal -->
		<Modal ref="modal">
			<div slot="button">
				<button @click="processData()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">Ya, Daftarkan</button>
				<button @click="$refs.modal.close()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Batalkan</button>
			</div>
		</Modal>

		<section class="text-gray-700 body-font z-2 relative">
			<div class="container mt-5 mx-auto mb-10">

				<!-- pesan pendaftaran berhasil -->
				<transition name="fade" mode="out-in">
					<div v-if="!register_container" class="lg:w-2/6 md:w-3/3 bg-gray-200 rounded-lg p-2 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0">
						<div class="bg-green-100 rounded pt-7">
							<svg class="w-8 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<p class="text-lg text-center font-medium text-green-500 mt-2">Pendaftaran Berhasil</p>
							<p class="mx-10 mt-2 mb-5 text-left text-green-500">Silahkan mengecek email anda untuk melakukan verifikasi email terlebih dahulu sebelum memulai perjalanan anda sebagai Enterpriser</p>
							<router-link to="/login">
								<div class="text-center mx-10 ring-2 ring-green-400 font-medium text-sm pt-2 pb-2 rounded mb-10 text-green-400">LOGIN</div>
							</router-link>
						</div>
					</div>
				</transition>

					
				<!-- form untuk melakukan pendaftaran -->
				<transition name="fade" mode="out-in">
					<form class="lg:w-2/6 md:w-3/3 bg-gray-200 rounded-lg p-8 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0" 
						  @submit.prevent="onSubmit" v-if="register_container">

						<div class="w-full">

							<h2 class="text-gray-900 text-lg font-bold title-font mb-5">Mendaftar Menjadi Enterpriser</h2>
							
							<!-- START error container -->
							<transition name="fade">
								<div class="bg-red-50 rounded mb-3 flex pb-2 pt-3 pl-3.5" v-if="error_container">
									<svg class="w-6 stroke-current text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
									<p class="text-red-400 font-medium text-sm pl-2">{{error_message}}</p>
								</div>
							</transition>
							<!-- END error container -->

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

							<!-- password konfirmasi -->
							<div class="relative mb-2">
								<label for="password" class="leading-7 text-sm text-gray-600">Konfirmasi Password</label>
								<input required type="password" oninvalid="this.setCustomValidity('Masukan password kembali')" oninput="setCustomValidity('')"  v-model="password_again" placeholder="****" id="password" name="password" :class="input.css">
							</div>

							<!-- join button -->
							<button type="submit" class="mt-2 w-full">
								<div class="sm:flex sm:justify-center lg:justify-start w-full">
									<div class="rounded-md shadow w-full" style="user-select: none;">
										<a style="user-select: none;" class="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-sm md:px-7">
											<img class="ml-0 mr-4 inline-block h-7 w-7 rounded-full ring-2 ring-blue-400" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">Bergabung melalui {{name}}
										</a>
									</div>
								</div>
							</button>
							<p class="text-xs text-gray-500 mt-3">Dengan mendaftar anda setuju terhadap syarat dan ketentuan yang bisa saja berlaku</p>
						</div>
					</form>
				</transition>
			</div>
		</section>
	</div>
</template>

<script>

	import {ENDPOINT} from '../../function.js';
	import Header from '../Komponen/header.vue';
	import Modal from '../Komponen/modal.vue';

	const axios = require('axios');

	export default{
		data(){
			return{
				
				// referee data
				id : "",
				name : "",

				// error handler
				error_container : false,
				error_message : '',
				register_container : true,

				modal_state : false,
				password_again : '',

				register_data : {
					enterpriser_name  : "",
					enterpriser_email : "",
					enterpriser_password : "",
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
				
				// start loading
				let loader = this.$loading.show({
                	loader: 'spinner',
            	});

				axios.get(url)
					 .then(function(response){
					 	console.log(response.data);
					 	if(response.data != null) {
					 		app.id   = response.data.enterpriser_id;
					 		app.name = response.data.enterpriser_name;
					 		sessionStorage.setItem("referral_id", response.data.enterpriser_link_referral);
					 	}
					 	else{
					 		app.$router.push("/");
					 	}
					 	loader.hide();
					 })
					 .catch(function(error){
					 	console.log(error);
					 	loader.hide();
					 })
			},

			onSubmit : function(){

				// resetting form and reconstruct form
				this.error_container = false;
				this.error_message	 = "";
				this.enterpriser_link_referee = this.id;

				// validasi jika password sama dengan konfirmasi password
				if(this.register_data.enterpriser_password != this.password_again){
					this.error_container = true;
					this.error_message	 = "Kombinasi password salah";
					this.register_data.enterpriser_password	= "";
					this.password_again	= "";
					return;
				}

				// membuka dan mejalankan popup
				this.$refs.modal.open({
					title : 'Anda yakin?',
					text       : 'Dengan mendaftar anda menjamin semua data yang telah dimasukan telah benar dan tidak ada kesalahan',
					icon       : 'question'
				});
				
			},

			processData : function(){

				this.$refs.modal.close();
				
				// start loading
				let loader = this.$loading.show({
                	loader: 'spinner',
            	});

				var app = this;
				let url = ENDPOINT + "/member/add.php";
				let payload = JSON.stringify(app.register_data);

				axios.post(url, payload)
					.then(function(response){
						console.log(response.data);
						let error_code = response.data.error_code;

						// jika email yang didaftarkan sudah terdaftar
						if(error_code == 'email_already_registered'){
							app.error_container = true;
							app.error_message	 = "Email yang dimasukan sudah terdaftar";
							app.register_data.enterpriser_email     = "";
							app.register_data.enterpriser_password	= "";
							app.password_again	= "";
						}

						// jika pendaftaran berhasil
						else if(error_code == 'success'){
							app.register_container = false;
						}

						loader.hide();

					})
					.catch(function(error){

					})
					
			},

			changeModalState : function(){
				this.modal_state = true;
			}
		},
		
		components : {
			Header,
			Modal
		},

		mounted(){
			this.getData(this.$route.params.id);
			window.scrollTo(0, 0);
			//this.$refs.test.open()
		}
	}
</script>