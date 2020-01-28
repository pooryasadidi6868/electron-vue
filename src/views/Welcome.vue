<template>
   <HelloWorld/>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
export default {
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  
};
</script>

<style lang="scss">
@import "../assets/css/fonts.css";
button,input,h1,h2,h3 {
  -webkit-app-region: no-drag;
}
// body{
//   -webkit-app-region: drag;
// }
.v-application   {
    font-family: "IRANSans",sans-serif !important ;  
}


</style>
