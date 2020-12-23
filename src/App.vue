<template>
  <div id="app">
    <transition name="fade">
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
