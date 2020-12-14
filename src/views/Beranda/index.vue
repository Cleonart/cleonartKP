<template>
	<div>
		<Header/>
    	<Hero :id="id" :name="name"/>
    	<PromoHeadline/>
    	<PromoFeatures :id="id"/>
    	<Products/>
    	<Callback :id="id"/>
    	<Footer/>
	</div>
</template>

<style type="text/css">
	@import '../../../node_modules/tailwindcss/dist/tailwind.css'
</style>

<script type="text/javascript">

	import {ENDPOINT} from '@/function.js'

  	import Hero from '@/views/Beranda/hero.vue'
	import Callback from '@/views/Beranda/callback.vue'
  	import PromoHeadline from '@/views/Beranda/promo_headline.vue'
	import PromoFeatures from '@/views/Beranda/promo_features.vue'
  	import Products from '@/views/Beranda/products.vue'
  	import Header from '@/views/Komponen/header.vue'
	import Footer from '@/views/Komponen/footer.vue'

  	const axios = require('axios');

	export default{
		data(){
			return{
				id : '',
        		name : ''
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
			}
		},
		components: {
      		Hero,
			Callback,
      		PromoHeadline,
			PromoFeatures,
      		Footer,
      		Header,
      		Products
		},
		created(){
			this.id = this.$route.params.id;
			this.getData(this.id);
		}
	}
</script>