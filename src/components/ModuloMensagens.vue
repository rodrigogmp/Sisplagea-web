<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12>
                <h1>Mensagens recebidas</h1>
                <v-divider></v-divider>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-layout justify-center>   
                <v-flex xs8 align-self-center>
                    <template v-if="show">
                        <v-card class="mr-4 mt-4">
                            Have many messages
                        </v-card>
                    </template>
                    <template v-else>                    
                        <v-flex>
                            <center>Escolha uma mensagem ao lado</center>
                        </v-flex>
                    </template>
                </v-flex>
            </v-layout>
            <v-flex xs4>
                <v-card v-for="mensagem in mensagens" hover wrap v-bind:key="mensagem.id" class="mt-2" :link="true" @click="buscarMensagem(mensagem.id)">
                    <v-card-title>{{ mensagem.subject }}</v-card-title>
                    <v-card-text>{{ mensagem.email }}</v-card-text>
                </v-card>           
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import axios from 'axios'
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
}
export default {
    data: () => ({
        mensagens: [],
        show: false,
    }),

    methods: {
        buscarMensagem(idMensagem){
            this.show = !this.show
        }
    },

    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/contacts.json',
            headers: config.headers,            
        }).then((response) => {
            this.mensagens = response.data.contacts
        })
    }
}

</script>
