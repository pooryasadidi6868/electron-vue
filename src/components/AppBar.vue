<template>
 <v-app-bar
        flat
        color="white"
        app
       >
      <v-tooltip class="no-drag" bottom>
          <template v-slot:activator="{ on }">
             <v-btn @click="close"  text v-on="on">
                   <v-icon  class="ml-5" color="cyan" >mdi-close</v-icon>
             </v-btn>
          </template>
              <span> بستن</span>
      </v-tooltip>
      
      <v-tooltip class="no-drag" bottom>
          <template v-slot:activator="{ on }">
             <v-btn flat @click="maximize"  text v-on="on">
                   <v-icon  class="ml-5" color="cyan" >mdi-checkbox-blank-outline</v-icon>
             </v-btn>
          </template>
                <span> بزرگ شو </span>
       </v-tooltip>


       <v-tooltip class="no-drag" bottom>
          <template v-slot:activator="{ on }">
             <v-btn @click="minimize" text v-on="on">
                   <v-icon  class="ml-5" color="cyan" >mdi-minus</v-icon>
             </v-btn>
          </template>
          <span>کوچک شو</span>
       </v-tooltip>

      <v-spacer></v-spacer>
 
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink ml-2"
          contain
          src="../../public/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>


      <v-tooltip class="no-drag" bottom>
          <template v-slot:activator="{ on }">
             <v-btn @click="minimize" x-small text v-on="on">
                   <v-icon   color="cyan" >mdi-arrow-left</v-icon>
             </v-btn>
          </template>
          <span> بازگشت به صفخه قبل</span>
       </v-tooltip>
 </v-app-bar>
</template>

<script>
import {remote, Notification} from "electron";
export default {

  data(){
        return {
     

          }
    },


  methods:{

            close(){
                  let win =remote.getCurrentWindow();
                  win.close();
            },

            minimize(){
                  let win =remote.getCurrentWindow();
                  win.minimize();
            },

            maximize(){
                  new Notification('سلام',{
                  body:'first notification!!'
                  })

                  


            }
  }
   
}
</script>