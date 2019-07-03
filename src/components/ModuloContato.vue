<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center fill-height column>
                <v-flex xs12 sm8 md4>
                    <v-card flat class="mx-auto" min-width="800" elevation="5">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Entre em contato com o professor</div>
                            </div>
                        </v-card-title>
                        <v-container fluid grid-list-lg>
                            <v-layout column>
                                <v-flex>
                                    <v-form ref="form">
                                        <v-text-field v-model="email" label="Seu email" required></v-text-field>
                                        <v-text-field v-model="assunto" :counter="80" label="Assunto" required></v-text-field>
                                        <v-textarea name="input-7-1" label="Mensagem" v-model="mensagem" :counter="540" required></v-textarea>
                                        <input type="file" id="file" ref="file" @change="onFileChange">
                                        <v-layout justify-center>
                                            <v-card-actions>
                                                    <v-btn @click="submit" outline color="info" right :loading="loading">Contatar</v-btn>
                                            </v-card-actions>
                                        </v-layout>
                                    </v-form>
                                    <v-alert :value="alertaSucesso" type="success" transition="scale-transition" dismissible @click="alertaSucesso = false">Mensagem enviada com sucesso!</v-alert>
                                    <v-alert :value="alertaError" type="error" transition="scale-transition" dismissible @click="alertaError = false">{{ mensagemErro }}</v-alert>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
var configFile = {
    headers: {'content-type': 'multipart/form-data'}
}

export default {
    data:() => ({
        email: null,
        assunto: null,
        mensagem: null,
        arquivo: null,
        valido: true,
        alertaSucesso: false,
        alertaError: false,
        mensagemErro: null,
        loading: false
    }),

    methods: {
        onFileChange(file){
            var files = file.target.files            
            if(files.length >= 1){
                this.file = this.$refs.file.files[0]; 
            } else {
                this.file = null
            }
        },

        submit(){
            if(this.email && this.assunto && this.mensagem){
                this.loading = true;

                let formData = new FormData()
                formData.append('email', this.email)
                formData.append('subject', this.assunto)
                formData.append('message', this.mensagem)
                if(this.file){
                    formData.append('file_to_upload', this.file)
                }

                axios({
                    method: 'post',
                    url: 'https://sisplagea-api.herokuapp.com/api/v1/contacts.json',
                    data: formData,
                    headers: configFile.headers
                }).then((response) => {
                    /* Limpando o formulario */
                    this.email = null
                    this.assunto = null
                    this.mensagem = null
                    this.file = null

                    const input = this.$refs.file
                    input.type = 'text'
                    input.type = 'file'

                    this.alertaSucesso = !this.alertaSucesso
                    this.loading = false;
                }).catch((error) => {                    
                    this.alertaError = !this.alertaError
                    this.mensagemErro = "Erro ao enviar a mensagem, por favor tente novamente. Se o erro persistir contate o administrador do sistema" + error
                    this.loading = false
                })
            } else {
                this.alertaError = !this.alertaError
                this.mensagemErro = "Por favor, preencha os campos de 'email', 'assunto' e 'mensagem' para contactar o professor"
            }

        }
    }
}
</script>