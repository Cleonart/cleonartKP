<template>
	<div class="mx-56">
		<p class="mt-6 bg-green-100 pl-4 py-2 rounded text-green-500 font-medium">Link Referral Anda : <b>{{link}}</b></p>
		<table class="min-w-full leading-normal mt-8">
			<thead>
				<tr>
					<th v-for="item in table_header" class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-bold text-blue-600 uppercase">{{item}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in table_data">
                	<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{{item.level}}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                           	{{item.enterpriser_name}}
                        </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                           	{{item.enterpriser_referee}} ({{item.enterpriser_link_referee}})
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">

	import {ENDPOINT} from '@/function.js'
	const axios = require('axios');

	export default{
		data(){
			return{
				link : 0,
				table_header : ["Level", "Nama Enterpriser", "Referral"],
				table_data : [
					{
						level : 1,
						enterpriser_name : 'Christian',
						enterpriser_referee : 'John Doe',
						enterpriser_link_referee : ""
					}
				]
			}
		},
		methods : {
			getData : function(id){
				var app = this;
				let url = ENDPOINT + "/affiliate/functions.php?id=" + id;
				axios.get(url)
					 .then(function(response){
					 	console.log(response);
					 	app.table_data = response.data;
					 	app.table_data.sort(function(a, b){
					 		if (a.level < b.level) {
					 			return -1;
					 		}
					 		if(a.level > b.level){
					 			return 1;
					 		}
					 		return 0;
					 	})
					 })
			}
		},
		created(){
			this.getData(sessionStorage.getItem("ref"));
			this.link = "localhost:8080/#/" + sessionStorage.getItem("ref"); 
		}
	}
</script>