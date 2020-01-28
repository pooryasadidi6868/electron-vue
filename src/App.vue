<template>
  <v-app >
    <AppBar/>
    <v-content >
       <v-container class="no-drag">
         <router-view></router-view>
       </v-container>
       
    </v-content>
     
  </v-app>
 
</template>

<script>
import AppBar from './components/AppBar';

export default {
  components:{
    AppBar,
    
  }
  
}
</script>

<style scoped>
.no-drag{
   -webkit-app-region: no-drag;
}
</style>