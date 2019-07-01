<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Editar informações</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="informacoes.name" :counter="254" label="Nome" required
                    ></v-text-field>
                    <v-layout justify-center>
                        <v-flex xs12 md6 sm6 lg6>
                            <v-text-field v-model="informacoes.formation" label="Formacao" required
                            ></v-text-field>
                            <v-text-field v-model="informacoes.department"  label="Departamento" required
                            ></v-text-field>
                            <v-text-field v-model="informacoes.room" label="Sala" required
                            ></v-text-field>
                            <v-text-field v-model="informacoes.phone_number" label="Telefone" required />
                        </v-flex>
                        <v-flex xs12 md6 sm6 lg6>
                            <v-layout justify-center column>
                                <v-flex xs6>
                                    <picture-input
                                        ref="pictureInput" 
                                        @change="onChangeImage"
                                        width="150" 
                                        height="150" 
                                        margin="1"
                                        accept="image/jpeg,image/png" 
                                        size="5"
                                        radius="50" 
                                        buttonClass="v-btn"
                                        removeButtonClass="v-btn"                                        
                                        :plain="false"
                                        :removable="true"
                                        :customStrings="{
                                            upload: '<h1>Bummer!</h1>',
                                            drag: 'Adicione sua foto',
                                        }">
                                    </picture-input>
                                    <!-- <v-avatar size="180"><v-img :src="require('@/assets/durelli.png')" contain></v-img></v-avatar> -->
                                </v-flex>
                                <!--
                                <v-flex offset-xs3>
                                    <input type="file" accept="image/x-png,image/gif,image/jpeg">
                                </v-flex>
                                -->
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-textarea name="input-7-1" label="Sobre"></v-textarea>
                    <v-btn @click="atualizarInformacoes" outline color="info" right :loading="loading">Atualizar</v-btn>
                </form>
                <v-alert :value="alertaSucess" type="success" transition="scale-transition" dismissible @click="alertaSucess = false">Informações pessoais alteradas com sucesso.</v-alert>
                <v-alert :value="alertaError" type="error" transition="scale-transition" dismissible @click="alertaError = false">Erro ao atualizar informações, tente novamente.</v-alert>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import PictureInput from 'vue-picture-input';

var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
}

export default {
    data: () => ({
        informacoes: '',
        loading: false,
        alertaSucess: false,
        alertaError: false,
        url_base: "https://sisplagea-api.herokuapp.com",
        avatar: ''
    }), 

    components: {
        PictureInput
    },

    methods: {
        onChangeImage(){
            alert("U.u")
        },

        atualizarInformacoes(){
            this.loading = true;
            
            let formData = new FormData();
            formData.append('name', this.informacoes.name)
            formData.append('formation', this.informacoes.formation)
            formData.append('department', this.informacoes.department)
            formData.append('room', this.informacoes.room)
            formData.append('phone_number', this.informacoes.phone_number)

            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/users.json',
                data: formData,
                headers: config.headers,
            }).then((response) => {
                this.informacoes = response.data
                this.alertaSucess = !this.alertaSucess
                this.loading = false
            }).catch((error) => {
                alert(error)
                this.alertaError = !this.alertaError
                this.loading = false
            })            
        }
    },

    mounted() {        
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/users/info.json',
        }).then((response) => {
            this.informacoes = response.data
            //console.log(this.disciplina)
        }).catch (() => {
            alert('erro')
        });
    }
}
</script>