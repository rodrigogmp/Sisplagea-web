<template>
    <v-toolbar app dark clipped-left dense fixed class="light-blue darken-3">
        <v-toolbar-title class="headline">
            <v-icon large>business</v-icon>
            <span> SisPlagea</span>
            <span class="font-weight-light text-uppercase"> - Sistema de Planejamento e Gestão de Atividades</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-if="estaLogado" flat href="/paginaPrincipal.html">
            <span class="mr-2">Sair</span>
            <v-icon>input</v-icon>
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