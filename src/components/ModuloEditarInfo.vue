<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg8>
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
                        <v-layout justify-center>
                            <v-flex xs6 align-self-center>
                                <v-avatar size="180"><v-img :src="photo_url" /></v-avatar>
                                <v-spacer></v-spacer>
                                <v-layout justify-center>
                                    <input type="file" id="file" ref="file" @change="onChangeImage" accept="image/x-png,image/gif,image/jpeg">
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-layout>
                    <v-textarea name="input-7-1" label="Sobre" v-model="informacoes.about"></v-textarea>
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
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'Content-Type': 'multipart/form-data', 'uid': localStorage.getItem("data['uid']")}
}

export default {
    data: () => ({
        informacoes: '',
        loading: false,
        alertaSucess: false,
        alertaError: false,
        url_base: "https://sisplagea-api.herokuapp.com",
        photo_update: '',
        photo_url: '',
        file: null
    }), 

    components: {
        PictureInput
    },

    methods: {
        onChangeImage(file){
            var files = file.target.files[0];  
            this.photo_update = files
            this.photo_url = URL.createObjectURL(files)
        },

        atualizarInformacoes(){
            this.loading = true;
            
            let formData = new FormData();
            formData.append('name', this.informacoes.name)
            formData.append('formation', this.informacoes.formation)
            formData.append('department', this.informacoes.department)
            formData.append('room', this.informacoes.room)
            formData.append('phone_number', this.informacoes.phone_number)
            formData.append('about', this.informacoes.about)
            formData.append('photo', this.photo_update)

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
            this.photo_url = this.url_base+this.informacoes.photo.url
            //console.log(this.disciplina)
            //console.log(base_url+this.informacoes.photo.url)
        }).catch (() => {
            alert('erro')
        });
    }
}
</script>