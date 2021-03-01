<template>
	<div>
		
		<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="fixed z-50 overflow-y-auto" :class="container_class">
		  
		  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
		    
		    <transition name="fade">
			    <div v-if="modal_state" class="fixed inset-0 transition-opacity ease-out duration-599" aria-hidden="true">
			      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
			    </div>
			</transition>
		    
		    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
		    
		    <!-- MODAL BODY -->
		    <transition name="slide_down">
			    <div v-if="modal_state" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
			      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			        <div>
			          <slot name="content"></slot>
			        </div>
			      </div>
			      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
			      	<slot name="button"></slot>
			      </div>
			    </div>
			</transition>
		  </div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				modal_state : false,
				container_class : '',

				// info
				title : '',
				text : '',
				icon : '',
				confirmButtonText : 'Ok',
				confirmButtonColor : '',

				// icon_set
				icons : {
					'warning' : 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
					'question': 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				},

				colors : {
					'warning' : 'yellow',
					'question' : 'blue'
				}
			}
		},

		methods : {
			
			open : function(){
				this.container_class = 'inset-0';
				this.modal_state = true;
				document.getElementsByTagName("body")[0].style = "overflow:hidden";
			},

			close : function(){
				var app = this;
				this.modal_state = false;
				setTimeout(function(){
					app.container_class = '';
				}, 300)
				document.getElementsByTagName("body")[0].style = "overflow:visible"
			}
		}
	}
</script>

<style type="text/css">
	
	.fade-enter-active, .fade-leave-active {
  		transition: opacity .5s;
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  		opacity: 0;
	}

	/* Slide down animation */
	.slide_down-enter-active {
	  transition: all .3s ease;
	}
	.slide_down-leave-active {
	  transition: all .3s ease;
	}
	.slide_down-enter, .slide_down-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	  transform: translateY(-10px);
	  opacity: 0;
	}

	
</style>