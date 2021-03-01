<template>
  <div id="app">

    <!-- header for admin -->
    <Header v-if="show_header_admin" />

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  
  .pointer-cursor{
  	cursor: pointer;
  	transition: all 0.2s ease;
  }

  .pointer-cursor:hover{
  	opacity: 0.5;
  }

  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }

  .required-field{

  }

  .required-field::after{
    content:'*';
    color:red;
  }

</style>

<script type="text/javascript">
  import Header from './views/Enterpriser/header.vue';
  export default{
    components : {
      Header
    },
    data(){
      return{
        show_header_admin : true
      }
    },
    watch : {
      "$route" : function(oldval, newval){
        console.log(this.$route);
        var str = this.$route.path;
        var res = str.split("/");
        if (res[1] == 'admin') {
          this.show_header_admin = true;
        }
        else{
          this.show_header_admin = false;
        }
      }
    },
    
    created(){
        var str = this.$route.path;
        var res = str.split("/");
        if (res[1] == 'admin') {
          this.show_header_admin = true;
        }
        else{
          this.show_header_admin = false;
        }
    }
  }
</script>