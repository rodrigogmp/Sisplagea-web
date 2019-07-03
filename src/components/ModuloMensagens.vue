<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm12 md12 lg12>
                <h1>Mensagens recebidas</h1>
                <v-divider></v-divider>
                <v-card v-for="mensagem in mensagens" hover wrap v-bind:key="mensagem.id" class="mt-2 pb-0">
                    <v-card-text>
                        {{ mensagem.assunto }}
                        {{ mensagem.destinatario }}
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="show = !show">
                                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card-text>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-card-text>{{ mensagem.destinatario }}</v-card-text>
                            <v-card-text>{{ mensagem.msg }}</v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>           
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

// import axios from 'axios'
// var config = {
//     headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
// }
export default {
    data: () => ({
        mensagens: [
            {
                id: 1,
                assunto: "Este é o assunto da primeira",
                msg: "Essa é a mensagem do primeiro",
                destinatario: "mauriciomvdr@hotmail.com"
            },
            {   
                id: 2,
                assunto: "Este é o assunto da segundo",
                msg: "Essa é a mensagem do segundo",
                destinatario: "mauriciomvdr@gmail.com"
            }
        ],
        show: false
    })
}

</script>
