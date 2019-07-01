<template>
    <v-toolbar app dark clipped-left dense fixed class="light-blue darken-3">
        <v-toolbar-title class="headline">
            <v-icon large>business</v-icon>
            <span> SisPlagea</span>
            <span class="font-weight-light text-uppercase"> - Sistema de Planejamento e Gestão de Atividades</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-if="estaLogado" flat @click="logout">
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
import axios from 'axios'
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
}
export default {
    
  name: 'Navbar',
  props: {
    estaLogado: Boolean
  },
    methods: {
        logout() {
            axios ({
                method: 'delete',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/auth/sign_out',
                headers: config.headers
            }).then((response) => {
                if(response.status == 200){
                    console.log('aqui')
                    localStorage.removeItem("data['at']")
                    localStorage.removeItem("data['c']")
                    localStorage.removeItem("data['ct']")
                    localStorage.removeItem("data['rt']")
                    localStorage.removeItem("data['uid']")
                    window.location.href = '/index.html'
                }
            }).catch(()=>{

            })
        }
    }
}
</script>