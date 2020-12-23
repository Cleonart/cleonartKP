<template>
	<div>

		<!-- header -->
		<div class="w-full border-b-2 border-gray-100 flex">
			<div class="mx-56 pt-4 pb-4">
				<a class="pb-4 pl-2 pr-2 font-medium text-md mr-4">Beranda</a>
				<a class="border-b-2 pb-4 pl-2 pr-2 border-blue-800 font-medium text-md">Profil dan Data Diri</a>
			</div>
		</div>

		<div class="mx-56">

			<div class="mt-5">

				<div class="bg-red-100 pt-4 pb-4 pl-4 rounded mb-8 flex">
					<svg class="w-5 text-red-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
					<p class="text-red-500 font-medium text-sm">Silahkan lengkapi profil dan data diri anda sebelum memulai perjalanan anda sebagai Enterpriser</p>
				</div>

				<!-- START pengaturan profil -->
				<div class="md:grid md:grid-cols-3 md:gap-6">

					<!-- pengaturan profil [judul] -->
					<div class="md:col-span-1">
						<div class="px-4 sm:px-0">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Profil</h3>
							<p class="mt-1 text-sm text-gray-600">Informasi dasar Enterpriser dapat dilihat disini</p>
						</div>
					</div>

					<!-- pengaturan profil [form] -->
		      		<form class="mt-5 md:mt-0 md:col-span-2" @submit.prevent>

		          		<!-- link referral -->
		            	<div class="grid grid-cols-3 gap-6">
		             		<div class="col-span-3 sm:col-span-2">
		                		<label for="link_referral" class="block text-sm text-gray-700 mb-2">
		                  			<p class="font-medium required-field">Link Referral</p>
		                		</label>
		                		<div class="mt-1 flex rounded-md shadow-sm">
		                			<span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm hover:bg-blue-600 hover:text-white">http://localhost:8080/#/</span>
		                			<input required type="text" name="link_referral" id="-ml-1 company_website" class="flex-1 block w-full rounded-none border-2 rounded-r-md sm:text-sm border-gray-300 py-2 pl-3" placeholder="Kode Referral anda, Cth : sehatpintar">
		                		</div>
		                	</div>
		                </div>

		                <!-- avatar -->
		                <div class="mb-5 mt-5">
		                	<label class="block text-sm font-medium text-gray-700">Foto Profil</label>
		                	<div class="mt-2 flex items-center">
		                		<span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
		                			<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
		                		</span>
		                		<button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Ganti Foto Profil</button>
		                	</div>
		                </div>

		                <button type="submit" class="inline-flex justify-center mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Simpan Profil</button>	
		      		</form>
	  			</div>
	  			<!-- END pengaturan profil -->

	  			<div class="py-6"><div class="border-t border-gray-300"></div></div>

	  			<!-- START pengaturan data diri -->
	  			<div class="md:grid md:grid-cols-3 md:gap-6">

	  				<!-- pengaturan data diri [judul] -->
	  				<div class="md:col-span-1">
						<div class="px-4 sm:px-0">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Data Diri</h3>
							<p class="mt-1 text-sm text-gray-600">Pengaturan data diri anda dapat diatur disini</p>
						</div>
					</div>

					<!-- pengaturan data diri [form] -->
					<form class="mt-5 md:mt-0 md:col-span-2" @submit.prevent="onSubmit('personal_data')">
						<div class="grid grid-cols-6 gap-4">

							<!-- nama depan -->
							<div class="col-span-3">
								<label for="link_referral" class="block text-sm text-gray-700 mb-2">
		                  			<p class="font-medium required-field">Nama Depan</p>
		                		</label>
		                		<input required type="text" class="capitalize" v-model="personal_data.name_first" :class="css.input" pattern="[A-Za-z]{1,20}" title="Hanya huruf yang diizinkan" max="40" placeholder="Cth. John">
							</div>

							<!-- nama belakang -->
							<div class="col-span-3">
								<label for="link_referral" class="block text-sm text-gray-700 mb-2">
		                  			<p class="font-medium required-field">Nama Belakang</p>
		                		</label>
		                		<input required type="text" class="capitalize" v-model="personal_data.name_last" :class="css.input" pattern="[A-Za-z]{1,20}" title="Hanya huruf yang diizinkan" max="40" placeholder="Cth. Doe">
							</div>

							<!-- Email -->
							<div class="col-span-4">
								<label for="link_referral" class="block text-sm text-gray-700 mb-2">
		                  			<p class="font-medium required-field">Email</p>
		                  			<span class="text-xs text-gray-500">Email yang telah terdaftar tidak dapat diganti</span>
		                		</label>

		                		<!-- input disabled jika email telah dikonfirmasi -->
		                		<input disabled v-model="personal_data.email.address"
		                		       type="email" :class="css.input + (personal_data.email.verified ? css.input_success : css.input_error ) " 
		                		       max="40" placeholder="Cth. johndoe@gmail.com" class="mb-1">
		                		<span v-if="personal_data.email.verified ? false : true" class="text-sm text-red-500 font-medium">Email belum terverifikasi <a :href="'/#/confirm/email/' + personal_data.email.verified" ><u>Kirim email verifikasi disini</u></a></span>
		                		<span v-if="personal_data.email.verified ? true : false" class="text-sm text-green-500 font-medium">Email telah terverifikasi</span>
							</div>

							<!-- tempat, tanggal lahir -->
							<div class="col-span-6 grid grid-cols-6 gap-5">

								<!-- tempat lahir -->
								<div class="col-span-2">
									<label for="link_referral" class="block text-sm text-gray-700 mb-2">
										<p class="font-medium required-field">Tempat Lahir</p>
		                  			</label>
									<input required type="text" class="capitalize" :class="css.input" v-model="personal_data.born_place" pattern="[A-Za-z]{1,20}" title="Hanya huruf yang diizinkan" max="40" placeholder="Cth. Manado">
								</div>

								<!-- tanggal lahir -->
								<div class="col-span-2">
									<label for="link_referral" class="block text-sm text-gray-700 mb-2">
										<p class="font-medium required-field">Tanggal Lahir</p>
		                  			</label>
		                  			<vc-date-picker is-required  mode="date" v-model="personal_data.born_date" :model-config="modelConfig" :masks="masks">
		                  				<template v-slot="{ inputValue, togglePopover }">
			                  				<div class="flex items-center">
			                  					<input :class="css.input + ' ' + css.date_style"
			                  						   :value="inputValue"
			                  						   placeholder="Pilih tanggal"
								          			   @click="togglePopover({ placement: 'bottom' })"
								          			   v-on:change="onSubmit('tes')"
								          			   readonly/>
								          	</div>
								        </template>
								    </vc-date-picker>
								</div>
							</div>

							<div class="col-span-4">
								<label for="link_referral" class="block text-sm text-gray-700 mb-2">
		                  			<p class="font-medium required-field">Pekerjaan</p>
		                		</label>
		                		<select :class="css.input" v-model="personal_data.job" required>
		                			<option default value="">Pilih Pekerjaan</option>
		                			<option>Swasta</option>
		                			<option>PNS</option>
		                			<option>Professional</option>
		                			<option>Pelajar</option>
		                			<option>Tidak Bekerja</option>
		                		</select>
							</div>
						</div>

						<button type="submit" class="mt-5 inline-flex justify-center mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Simpan Data Diri</button>	
					</form>

	  			</div>

	  			<div class="py-6"><div class="border-t border-gray-300"></div></div>

	  			<!-- START pengaturan profil -->
				<div class="md:grid md:grid-cols-3 md:gap-6">

					<!-- pengaturan profil [judul] -->
					<div class="md:col-span-1">
						<div class="px-4 sm:px-0">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Keamanan</h3>
							<p class="mt-1 text-sm text-gray-600">Kelola akun dan amankan akun anda</p>
						</div>
					</div>

					<!-- pengaturan keamanan [form] -->
		      		<div class="mt-5 md:mt-0 md:col-span-2" @submit.prevent>
		      			<button type="button" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Ubah Password Akun</button>
		      		</div>

	  			</div>
	  			<!-- END pengaturan keamanan -->

			</div>
			{{personal_data}}
		</div>
	</div>
</template>

<script type="text/javascript">
	
	import {ENDPOINT} from '@/function.js'

	export default{
		data(){
			return{
				css : {
					input : "mt-0 pl-4 py-2 w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 ",
					input_success : ' text-green-600 font-medium bg-green-100 border-green-300',
					input_error : 'text-red-600 font-medium bg-red-100 border-red-300',
					date_style : '',
				},

				profil_data : {
					link_referral : '',
					avatar_img    : ''
				},

				personal_data : {
					name_first : '',
					name_last  : null,
					email : {
						address  : 'zredhard@gmail.com',
						verified : false // 'active' or null
					},
					born_place : null,
					born_date  : "",
					job        : ""
				},

				// date config
				modelConfig: {
					type: 'string',
					mask: 'YYYY-MM-DD',
				},

				masks : {
					input: 'DD-MM-YYYY',
				}
			}
		},

		methods : {

			onSubmit : function(form_id){
				var app  = this;
				let data = null;
				let url  = ENDPOINT + "/";
				this.css.date_style = "";

				let json_data = {
					enterpriser_id : 'd',
					payload : form_id == 'profil_data' ? app.profil_data : app.personal_data 
				};
				
				// [profil data]
				if(form_id == 'profil_data'){
					data = JSON.stringify(this.profil_data);
				}

				// [personal data]
				else if(form_id == 'personal_data'){
					if(this.personal_data.born_date == null){
						this.css.date_style = this.css.input_error;
						return;
					}
					data = JSON.stringify(this.personal_data);
				}

				// mengirim data ke API
				axios.post(url, data)
					 .then(function(response) {
						// body...
					 })
					 .catch(function(error){

					 })

			}

		}
	}
</script>