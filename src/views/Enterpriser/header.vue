<template>
	<div>
		<!-- header -->
		<div class="w-full border-b-2 border-gray-100 flex">
			<div class="mx-56 pt-4 pb-4">
				<a v-for="route in routing" :href="route.ref" class="pb-4 pl-2 pr-2 font-medium text-md mr-4" :class="route.active ? 'border-b-2 border-blue-800' : ''">{{route.name}}</a>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		data(){
			return{
				routing : [
					{
						name   : 'Beranda',
						ref    : '/#/admin',
						active : false
					},
					{
						name   : 'Kelola Produk',
						ref    : '/#/admin/product',
						active : false
					},
					{
						name   : 'Kelola Paket',
						ref    : '/#/admin/packet',
						active : false
					},
					{
						name : 'Profil dan Data Diri',
						ref    : '/#/admin/profil',
						active : false
					}
				]
			}
		},

		methods : {

		},

		watch : {
			"$route.name" : function(oldval, newval){
				console.log(this.$route);
				this.routing_view();
			}
		},

		methods : {
			
			routing_view : function(){
				if(this.$route.name == 'Dashboard'){
					this.routing[0].active = true;
					this.routing[1].active = false;
					this.routing[2].active = false;
					this.routing[3].active = false;
				}
				else if(this.$route.name == 'Kelola Produk'){
					this.routing[0].active = false;
					this.routing[1].active = true;
					this.routing[2].active = false;
					this.routing[3].active = false;
				}
				else if(this.$route.name == 'Kelola Paket'){
					this.routing[0].active = false;
					this.routing[1].active = false;
					this.routing[2].active = true;
					this.routing[3].active = false;				
				}
				else if(this.$route.name == 'Profil'){
					this.routing[0].active = false;
					this.routing[1].active = false;
					this.routing[2].active = false;
					this.routing[3].active = true;				
				}
			}

		},
		created(){
			this.routing_view();
		}
	}

</script>