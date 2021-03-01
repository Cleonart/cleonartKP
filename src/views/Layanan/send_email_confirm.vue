<template>
	<div>
		<Header/>

		
		<transition name="fade" mode="out-in">

			<!-- mengirim link verifikasi [verify] -->
			<div v-if="message_show == 'verify'" class="shadow-md relative mx-auto w-7/12 my-32 p-7 flex">
				<img class="w-52" src="../../assets/email_verify.svg">
				<div class="ml-9">
					<p class="text-xl font-bold mb-2">Periksa email anda</p>
					<p class="text-gray-500 mb-6 text-base">Email verifikasi akun dikirimkan ke <b class="text-blue-600">{{email_address}}</b><br/>Cek email anda dan silahkan tekan link konfirmasi untuk melanjutkan</p>
					<p class="text-sm text-gray-700">Tidak menerima email? <button @click="sendEmailConfirmation()" class="ml-3 rounded font-medium text-sm border px-3 py-2" :class="timer > 0 ? 'text-gray-800 border-gray-300' : 'bg-blue-800 border-blue-300 text-white'">Kirim Email Lagi <span v-if="timer > 0">dalam {{timer}} detik</span></button></p>
				</div>
			</div>

			<!-- email sudah terverifikasi [verified] -->
			<div v-if="message_show ==  'verified'" class="shadow-md relative mx-auto w-7/12 my-32 p-7 flex">
				<img class="w-52" src="../../assets/email_check.svg">
				<div class="ml-9">
					<p class="text-xl font-bold mb-2">Email sudah terverifikasi</p>
					<p class="text-gray-500 mb-6 text-base">Verifikasi akun untuk email <b class="text-green-500">{{email_address}}</b><br/>Sudah terverifikasi, silahkan tekan login untuk melanjutkan</p>
					<button class="-mt-1 rounded font-medium text-sm border text-white bg-green-500 border-success-300 px-4 py-2">Login ke Sehatque</button>
				</div>
			</div>

			<!-- email tidak teverifikasi [not_registered, link_already_used] -->
			<div v-if="message_show ==  'ban'" class="shadow-md relative mx-auto w-7/12 my-32 p-7 flex">
				<img class="w-52" src="../../assets/email_ban.svg">
				<div class="ml-9">
					<p class="text-xl font-bold mb-2">Email tidak terdaftar</p>
					<p class="text-gray-500 mb-6 text-base">Verifikasi akun untuk email <b class="text-red-500">{{email_address}}</b><br/>Tidak berhasil dilakukan karena email tidak terdaftar</p>
					<router-link to="/"><p class="text-sm text-gray-700">Anda belum terdaftar? <button class="ml-3 rounded font-medium text-sm border text-gray-800 border-gray-300 px-3 py-2">Mendaftar Disini</button></p></router-link>
				</div>
			</div>

			<Spinner v-if="message_show == ''" class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4" />
				
		</transition>
	</div>
</template>

<script type="text/javascript">

	import Header from '../Komponen/header.vue';
	import Footer from '../Komponen/footer.vue';
	import Spinner from '../Komponen/spinner.vue';
	
	import {ENDPOINT} from '../../function.js';
	const axios = require('axios');
	export default{
		data(){
			return{
				email_address : '',
				message_show  : 'verify',

				timer : 60,

			}
		},
		
		components : {
			Header, Footer, Spinner
		},

		methods : {
			sendEmailConfirmation : function(){
				this.message_show = "";
				var app = this;
				var url = ENDPOINT + "/member/email_send_link_verification.php?email_address=" + this.email_address;

				axios.get(url)
					 .then(response => {
					 	let error_code = response.data.error_code;
					 	console.log(response);
					 	switch(error_code){
					 		case 'email_verified' : 
					 			app.message_show = "verified";
					 			break;
					 		case 'email_verify' : 
					 			app.message_show = "verify";
					 			app.sendLinkTimer();
					 			break;
					 		case 'email_not_registered' : 
					 			app.message_show = "ban";
					 			break;
					 	}

					 })
					 .catch(error => {

					 })
			},

			sendLinkTimer : function(){
				var app = this;
				app.timer = 60;
				setInterval(function(){
					if (app.timer > 0) {
						app.timer--;
					}
				}, 1000);
			}

		},
		created(){
			this.email_address = this.$route.params.email_address;
			this.sendEmailConfirmation();
		}	
	}
</script>