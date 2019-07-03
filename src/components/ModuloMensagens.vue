<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12>
                <h1>Mensagens recebidas</h1>
                <v-divider></v-divider>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs8 align-self-center>
                <v-layout justify-space-between>
                    <v-container>
                        <template v-if="show">
                            <v-flex xs12>
                                <v-card>
                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline">Assunto: {{ message.subject }}</h3>
                                            <v-divider class="mb-4"></v-divider>
                                            <div><strong>Enviado por: {{ message.email }} </strong></div>
                                            <v-divider></v-divider>
                                        </div>
                                    </v-card-title>
                                    <v-card-text> {{ message.message }} </v-card-text>
                                    <template v-if="message.file_to_upload.url != null">
                                        <v-divider></v-divider>
                                        <v-btn icon flat :href="url_base+message.file_to_upload.url" target="_blank">
                                            <v-icon class="material-icons">attach_file</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-divider></v-divider>
                                    <v-card-actions>
                                        <v-btn outline flat color="info" @click="show = false">Fechar</v-btn>
                                        <v-btn outline flat color="error" @click="deletarMensagem(), show = false">Deletar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </template>
                        <template v-else>   
                            <v-flex xs12>
                                <center>Escolha uma mensagem ao lado</center>
                            </v-flex>
                        </template>
                    </v-container>
                </v-layout>
            </v-flex>
            <v-flex xs4>
                <v-layout>
                    <v-container id="scroll-target" style="max-height: 400px" class="scroll-y">
                        <v-flex xs12>
                            <strong>{{ qtd_msgs }} mensagens</strong>
                            <v-card v-for="mensagem in mensagens" hover wrap v-bind:key="mensagem.id" class="mt-2" :link="true" @click="buscarMensagem(mensagem)">
                                <v-card-title>{{ mensagem.subject }}</v-card-title>
                                <v-card-text>{{ mensagem.email }}</v-card-text>
                            </v-card>           
                        </v-flex>
                    </v-container>
                </v-layout>
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
        message: [],
        qtd_msgs: 0,
        url_base: 'https://sisplagea-api.herokuapp.com',
        show: false,
    }),

    methods: {
        buscarMensagem(mensagem){
            this.show = true
            this.message = mensagem
        },
        deletarMensagem(){
            console.log('aa')
            axios({
                method: 'delete',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/contacts/'+this.message.id,
                headers: config.headers,

            }).then(() => {
                document.location.reload()
            }).catch ((error) => {
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        }
    },

    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/contacts.json',
            headers: config.headers,            
        }).then((response) => {
            this.mensagens = response.data.contacts
            this.qtd_msgs = this.mensagens.length
        })
    }
}

</script>
