<template>
 <div>
   <v-row>
     <v-col md="1"> 
       <v-card elevation="1" >
          <v-navigation-drawer
          v-model="drawer"
          dark
          mini-variant
          mini-variant-width="60"
          permanent
          
          >
            <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="../assets/images/pooryasadidi.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
            
          >

            <v-list-item
              link
              to="bvb"
              v-for="item in items"
              :key="item.title"
              
            >
              <v-tooltip class="pl-3" right>
               <template v-slot:activator="{ on }">
                 <v-list-item-action v-on="on">
                   <v-icon >{{item.icon}}</v-icon>
                 </v-list-item-action>  
               </template>
               <span >{{item.title}}</span>
              </v-tooltip>
          

              <v-list-item-content>
                <v-list-item-title>سلام</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
       
          </v-navigation-drawer>

       </v-card>
     </v-col>
     <v-col md="10">
        <v-sheet elevation="1" >سلام</v-sheet>
     </v-col>
   </v-row>
   <v-row justify="center">  <Footer/>  </v-row>
 </div>

</template>
<script>
import Footer from '../components/Footer';
export default {
  components:{
    Footer
  },
  data(){
    return{
      drawer:true,
      items: [
          { title: 'ورود', icon: 'mdi-login' },
          { title: ' خروج', icon: 'mdi-exit-run' },
          { title: 'نمونه ', icon: 'mdi-account-multiple' },
          { title: 'نمونه ', icon: 'mdi-bookmark' },
          { title: 'نمونه ', icon: 'mdi-folder-image' },
          { title: ' نمونه', icon: 'mdi-star' },
          { title: ' نمونه ', icon: 'mdi-folder-image' },
          { title: 'گیتهاب', icon: 'mdi-github-circle' },
          { title: 'شب/روز', icon: 'mdi-theme-light-dark' },
        ],
        links: ['خانه', 'ارتباط', 'تنظیمات'],
        mini: true,
    }
  }
}
</script>

<style scoped>
.no-drag{
  -webkit-app-region: no-drag;
}
</style>