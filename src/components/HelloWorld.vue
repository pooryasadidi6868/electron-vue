<template>
  <v-container class="no-drag">
    <v-row class="mt-12" align="center" justify="center">
      <v-col cols="4">
        <v-img src="../assets/images/power.png"></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-12" justify="center">
      <v-btn to="index"  flat   x-large text>
           <p class= " vorod text-center display-2 font-weight-bold">  بزن بریم !! </p>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import {shell} from "electron";
export default {
  name: 'HelloWorld',

  data: () => ({
   
  }),

  methods:{
    beep(){
        shell.beep();
    }
  }
};
</script>


<style scoped>
.vorod{
text-transform: uppercase;
background: linear-gradient(to top, rgb(3, 238, 238) 10%,rgb(14, 240, 240) 20%, #07e09f 50%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;}
.no-drag{
  -webkit-app-region: no-drag
}
</style>