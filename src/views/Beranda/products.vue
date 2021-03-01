<template>
  <div>
    <ModalViewProduct ref="modal"></ModalViewProduct>
    <div class="container px-10 mb-10 pt-10 mx-auto">
      <div class="flex">
        <svg fill="none" viewBox="0 0 24 24" class="w-9 -mt-10" stroke="rgba(29, 78, 216)">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
        <div class="ml-4">
          <h1 class="text-3xl text-left font-medium title-font text-gray-800 mb-1">
            Produk-Produk Unggulan
          </h1>
          <p class="text-gray-600 mb-7">
            Lihat produk-produk unggulan HDI dibawah ini
          </p>
      </div>
    </div>

    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:opacity-80 cursor-pointer" 
           style="transition: all 0.2s ease" v-for="item in product" 
           @click="$refs.modal.open(item.product_id)" >
          <a class="block relative h-48 rounded overflow-hidden">
            <img v-if="item.product_img" class="object-cover object-center w-full h-full block" 
                 :src="item.product_img">
            <img v-else class="object-cover object-center w-full h-full block" 
                 :src="ENDPOINT + '/product/unnamed.png'">
          </a>
          
          <div class="mt-4">

            <!-- title -->
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
              {{item.product_category}}
            </h3>
            <h2 class="text-gray-900 title-font text-2xl font-bold mb-1">
              {{item.product_name}}<br/>
              <span class="text rounded bg-yellow-100 text-sm px-1 py-1 text-yellow-500 font-medium">
                {{item.product_misc}}
              </span>
            </h2>

            <!-- price -->
            <div class="flex mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" 
                   stroke="#2ecc71"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <p class="mt-1 text-lg mb-2 ml-2 font-medium">{{formatRupiah(item.product_price)}}</p>
            </div>

            <!-- Promo Harga -->
            <div class="flex bg-yellow-100 p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-9" fill="rgba(245, 158, 11)"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <p class="text-yellow-500 text-sm ml-3 py-1">
                <del>{{formatRupiah(item.product_price)}}</del> 
                <b>{{formatRupiah(item.product_price_member)}}</b><br/>jika anda member
              </p>
            </div>
        </div>
      </div>
    </div>

    <div class="flex mt-9">
      <svg fill="none" viewBox="0 0 24 24" class="w-9 -mt-10" stroke="rgba(29, 78, 216)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
      <div class="ml-4">
        <h1 class="text-3xl text-left font-medium title-font text-gray-800 mb-1">Paket Unggulan</h1>
        <p class="text-gray-600 mb-7">Lelah dengan memilih produk? dengan paket lebih mudah</p>
      </div>
    </div>

    <!-- show all packet -->
    <div class="flex flex-wrap -m-2 mb-10">
      <div class="w-1/4 p-2 hover:opacity-80 relative" v-for="packet in packet" @click="openPacketModal(packet.packet_id)">
        <div class="rounded-md border border-gray-300 h-full rounded py-2 px-6 relative">
          <p class="text-1xl mt-2 mb-3 font-medium">Paket {{packet.packet_name}}</p>

          <div class="flex mb-3">
            <a v-for="product in packet.packet_detail" 
               class="block relative w-1/4 rounded pr-1 overflow-hidden" style="height: 50px;">
                  <img v-if="product.product_img" 
                     class="object-cover object-center w-full h-full block" 
                     :src="product.product_img">
                </a>
              </div>

              <p class="text-sm text-gray-600" 
                 v-for="product in packet.packet_detail">{{product.product_quantity}}x - {{product.product_name}}</p>

              <div class="w-full mb-20 text-transparent">-----------</div>
              
              <div class="absolute bottom-0">
                <p class="mt-3">
                  <span class="line-through">{{formatRupiah(packet.packet_total_price)}}</span> 
                  <span class="py-1 px-2 text-xs bg-red-100 text-red-500 rounded-full font-medium">
                    -{{packet.packet_disc}}%
                  </span>
                </p>
                <p class="mb-4 text-2xl mb-0 font-medium relative">
                  {{formatRupiah(packet.packet_total_price - (packet.packet_total_price * (packet.packet_disc/100)))}} 
                </p>
                <p class="text-sm -mt-3 mb-4 text-gray-500">
                  Anda hemat Rp {{ formatRupiah((packet.packet_total_price * (packet.packet_disc/100)))}}
                </p>
              </div>
        </div>
      </div>
    </div>
  </div>
	</div>
</template>

<script type="text/javascript">
  
  import {ENDPOINT} from '@/function.js'
  import {formatRupiah} from '../../function/function.js';
  import ModalViewProduct from '../Komponen/modal_view_product.vue';

  export default{
    props : ['product', 'packet'],
    data(){
      return{
        ENDPOINT : ''
      }
    },
    components : {
      ModalViewProduct
    },
    methods : {
      formatRupiah : function(value){
        return formatRupiah(String(value), "");
      }
    },
    created(){
      this.ENDPOINT = ENDPOINT;
      console.log(this.product);
    }
  }
</script>