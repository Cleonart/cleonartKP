<template>
	<form @submit.prevent="doLogin()" class="absolute left-1/2 top-1/2 transform -translate-x-2/4 -translate-y-2/4 p-7 rounded border border-gray-200 shadow-md">
		<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-6">
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="w-9 h-9" viewBox="0 0 215.000000 215.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,215.000000) scale(0.100000,-0.100000)" fill="#c81c35" stroke="none">
                  <path d="M1043 1840 c-109 -25 -250 -74 -348 -121 -64 -31 -88 -50 -120 -91
                  -30 -40 -35 -50 -20 -46 11 3 61 18 110 33 85 25 366 78 374 70 2 -2 -9 -7
                  -24 -11 -15 -4 -23 -9 -17 -13 5 -3 12 -15 16 -27 6 -20 0 -22 -101 -39 -157
                  -25 -412 -91 -435 -112 -29 -26 -81 -103 -74 -110 3 -3 61 6 128 20 171 37
                  552 74 564 56 3 -5 -3 -9 -13 -10 -10 0 -13 -3 -5 -6 6 -2 12 -11 12 -19 0 -8
                  2 -14 4 -14 17 0 437 53 464 58 20 4 37 12 39 18 2 5 -29 45 -68 87 l-71 77
                  -76 -1 c-43 0 -124 -6 -182 -13 -58 -7 -109 -11 -114 -8 -5 3 53 27 129 53 76
                  27 142 52 147 57 5 5 -21 36 -56 70 -64 62 -64 62 -123 61 -32 0 -95 -9 -140
                  -19z"/><path d="M960 1372 c-237 -13 -594 -70 -615 -98 -26 -37 -59 -103 -53 -109 4
                  -4 64 -2 135 4 143 12 478 31 563 31 39 0 51 3 40 10 -8 5 -10 10 -5 10 6 0
                  16 13 23 29 15 34 58 86 71 86 5 0 13 3 17 8 4 4 36 7 72 7 56 0 69 -4 101
                  -29 20 -16 46 -47 57 -68 10 -21 24 -41 29 -45 6 -4 -26 -8 -70 -9 -72 -1
                  -199 -14 -167 -18 8 -1 12 -19 12 -56 0 -37 4 -55 13 -55 8 0 7 -4 -3 -11 -11
                  -8 4 -9 55 -4 155 14 568 95 579 114 5 7 -63 112 -101 157 -39 47 -50 48 -388
                  49 -176 0 -340 -1 -365 -3z"/><path d="M270 1044 c1 -11 11 -39 23 -63 16 -34 31 -48 57 -56 78 -27 388 -62
                  696 -81 l110 -6 -3 -27 c-7 -54 1 -56 154 -37 182 22 395 56 412 66 7 4 37 45
                  67 91 37 58 49 86 41 91 -17 11 -421 8 -492 -4 -97 -16 -198 -21 -191 -10 10
                  16 -67 22 -444 32 -195 5 -372 13 -392 16 -33 6 -38 4 -38 -12z"/><path d="M386 791 c15 -28 36 -59 48 -69 28 -26 139 -65 261 -91 55 -12 122
                  -27 150 -33 27 -6 104 -19 170 -29 66 -9 107 -18 90 -19 -16 -1 -24 -4 -17 -7
                  6 -2 12 -13 12 -24 0 -17 8 -19 78 -19 86 0 304 41 329 62 19 16 123 145 123
                  152 0 4 -60 6 -132 7 -332 2 -887 56 -1073 104 -31 8 -58 15 -61 15 -3 0 7
                  -22 22 -49z"/><path d="M530 574 c0 -4 19 -32 43 -62 34 -45 56 -62 112 -87 120 -55 278 -98
                  494 -135 l64 -11 78 77 c43 43 77 80 75 82 -3 2 -73 12 -158 22 -253 32 -598
                  89 -690 116 -10 3 -18 2 -18 -2z"/></g>
            </svg>
            <span class="ml-2 text-xl border-l-2 border-red-500 pl-3">Masuk</span>
        </a>

        <transition name="fade" mode="out-in">

        	<!-- masukan email dan password -->
        	<p v-if="login_status == ''" class="bg-gray-100 text-gray-500 font-medium text-sm pl-4 pt-2 pb-2 rounded">Masukan email dan password</p>

	        <!-- email dan password salah -->
	        <p v-if="login_status == 'invalid'" class="bg-red-100 text-red-500 font-medium text-sm pl-4 pt-2 pb-2 rounded">Email dan Password tidak cocok!</p>

	        <!-- email dan password benar -->
	        <p v-if="login_status == 'valid'" class="bg-green-100 text-green-500 font-medium text-sm pl-4 pt-2 pb-2 rounded">Login berhasil!</p>

	    </transition>

		<!-- email -->
		<div class="relative mb-2 mt-2">
			<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
			<input required type="email" v-model="login_credential.enterpriser_email" oninvalid="this.setCustomValidity('Email harus dimasukan')" oninput="setCustomValidity('')"  placeholder="email@domain.com" id="email" name="email" :class="input.css">
		</div>

		<!-- password -->
		<div class="relative mb-2">
			<label for="password" class="leading-7 text-sm text-gray-600">Password</label>
			<input required type="password" v-model="login_credential.enterpriser_password" oninvalid="this.setCustomValidity('Password harus dimasukan')" oninput="setCustomValidity('')" placeholder="****" id="password" name="password" :class="input.css">
		</div>

		<button type="submit" class="mt-2 w-full">
			<div class="rounded shadow w-full" style="user-select: none;">
				<a style="user-select: none;" class="cursor-pointer w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-sm md:px-7">Masuk</a>
			</div>
		</button>

	</form>
</template>

<script>
	
	import {ENDPOINT} from '../../function.js';
	const axios = require('axios');
	const md5 = require('md5');

	export default{
		data(){
			return{
				login_status : '',
				login_credential : {
						enterpriser_email : '',
						enterpriser_password : ''
				},

				input : {
					css : "w-full bg-white rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				}
			}
		},
		methods : {
			
			doLogin : function(){
				
				this.login_status = "";
				this.login_credential.enterpriser_email = md5(this.login_credential.enterpriser_email);
				this.login_credential.enterpriser_password = md5(this.login_credential.enterpriser_password);

				// start loading
				let loader = this.$loading.show({
                	loader: 'spinner',
            	});

				var app = this;
				let url = ENDPOINT + '/admin/login.php';
				let payload = JSON.stringify(app.login_credential);
				
				this.login_credential.enterpriser_email = "";
				this.login_credential.enterpriser_password = "";

				axios.post(url, payload)
					 .then(function(response){
					 	console.log(response);
					 	app.login_status = response.data.error_code;
					 	loader.hide();

					 	if (app.login_status == 'valid') {
					 		sessionStorage.setItem("id", response.data.id);
					 		sessionStorage.setItem("ref", response.data.ref);
					 		app.$router.replace('/admin');
					 	}

					 })
					 .catch(function(error){

					 })
			}

		}
	}
</script>