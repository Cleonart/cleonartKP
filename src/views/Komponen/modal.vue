<template>
	<div>

		<!-- This example requires Tailwind CSS v2.0+ -->
		<div class="fixed z-10 overflow-y-auto" :class="container_class">
		  
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
			        <div class="sm:flex sm:items-start">
			          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10" :class="'bg-' + colors[icon] + '-100'">
			            <!-- Heroicon name: exclamation -->
			            <svg class="h-6 w-6" :class="'text-' + colors['question'] + '-600'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icons[icon]" />
			            </svg>
			          </div>
			          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
			              {{title}}
			            </h3>
			            <div class="mt-2">
			              <p class="text-sm text-gray-500">
			                {{text}}
			              </p>
			            </div>
			          </div>
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
			
			open : function(data){

				// handling title
				if(data.title && data.title != ""){
					this.title = data.title;
				}

				// handling text
				if(data.text && data.text != ""){
					this.text = data.text;
				}

				// handling icon
				if(data.icon && data.icon != ""){
					this.icon = data.icon;
				}

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