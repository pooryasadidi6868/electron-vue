<template>
  <v-card flat height="300px">
    
      <v-card
        flat
        width="100%"
        class="white  text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
            elevation="20"
          
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

      </v-card>

    
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
    }),
   
  }
</script>