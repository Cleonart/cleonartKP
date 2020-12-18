<template>
	<div>
		<img src="../../assets/backdrop_fluid.svg" class="w-full transform opacity-30 absolute top-1/2 -translate-y-2/4">
		<div class="mx-auto text-center py-5 rounded absolute transform top-1/2 -translate-y-2/4 left-1/2 -translate-x-2/4" :class="'bg-' + color + '-100 ' + 'text-' + color + '-500'">
			<div class="ml-7 mr-7">
				<svg class="w-10 mx-auto mt-3" :class="'text-' + color + '-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icons[color]" /></svg>
				<p class="font-medium mb-1 mt-2">{{title}}</p>
				<p class="w-80 mb-6">{{text}}</p>
				<router-link to="/login">
					<div class="text-center mx-5 ring-2 font-medium text-sm pt-2 pb-2 rounded mb-5" :class="'ring-' + color + '-400 ' + 'text-' + color + '-400 ' ">LOGIN</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	import {ENDPOINT} from '../../function.js';
	const axios = require('axios');

	export default{
		data(){
			return{
				title : '',
				text  : '',
				color : '',
				icons : {
					'red' : 'M6 18L18 6M6 6l12 12',
					'green' : 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
					'yellow' : 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
				}
			}
		},
		methods : {
			confirmEmail : function(){
				var app = this;
				let url = ENDPOINT + '/member/confirm_email.php?auth_code=' + this.$route.params.auth_code;
				axios.get(url)
					.then(function(response){
						console.log(response);
						if(response.data.error_code == 'link_expired'){
							app.title = "Link Aktivasi tidak berfungsi";
							app.text  = "Link yang anda masukan kadaluarsa, sudah pernah digunakan sebelumnya atau tidak valid, silahkan periksa link anda sekali lagi";
							app.color = "yellow";
						}
						else if(response.data.error_code == 'success'){
							app.title = "Verifikasi akun berhasil dilakukan";
							app.text  = "Akun anda telah behasil diaktivasi, silahkan login untuk memulai perjalanan anda sebagai Enterpriser";
							app.color = "green";
						}
					})
					.catch(function(error){
						app.title = "Proses Gagal";
						app.text  = "Silahkan periksa koneksi internet anda dan kemudian coba dalam beberapa saat lagi";
						app.color = "red";
					})
			}
		},

		created(){
			this.confirmEmail();
		}
	}
</script>