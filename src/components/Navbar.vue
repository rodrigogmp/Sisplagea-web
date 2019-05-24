<template>
    <v-toolbar app dark clipped-left dense fixed absolute class="light-blue darken-3">
        <v-toolbar-title class="headline">
            <v-icon large>business</v-icon>
            <span> SisPlagea</span>
            <span class="font-weight-light text-uppercase"> - Sistema de Planejamento de Atividades</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-if="estaLogado" flat href="/home.html">
            <span class="mr-2">Rafael Durelli</span>
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn v-else flat href="/login.html">
            <span class="mr-2">Login</span>
            <v-icon>account_circle</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    estaLogado: Boolean
  }
}
</script>