<template>
	<div>
		
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
				packet : {},
				ENDPOINT : "",
			}
		},
		methods : {
			open : function(id){
				var app = this;
				let url = ENDPOINT + "/packet/get.php?id=" + id;
				axios.get(url)
				     .then(response => {
				     	app.packet = response.data;
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