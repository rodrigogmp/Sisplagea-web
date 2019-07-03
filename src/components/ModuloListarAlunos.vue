<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Alunos cadastrados</h1>
                <v-divider></v-divider>
                <v-container fluid grid-list-md>
                    <v-data-iterator :items="alunos" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                        <template v-slot:item="props">
                            <v-layout row justify-center>
                                <v-flex>
                                    <v-card>
                                        <v-list three-line>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title><h3>Nome: {{ props.item.name }} </h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Matricula:</strong> {{ props.item.registration }}</v-list-tile-title>
                                                    <v-list-tile-title><strong>Categoria:</strong> {{ props.item.category }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-content>
                                                    <v-list-tile-action class="align-end">
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn flat v-on="on" @click="dialog = true, buscarAluno(props.item.id)"><v-icon color="green lighten-1">info</v-icon>Info Aluno</v-btn>
                                                            </template>
                                                            <span>Exibir/Editar Informações sobre o aluno</span>
                                                        </v-tooltip>
                                                    </v-list-tile-action>
                                                </v-list-content>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-dialog v-model="dialog" persistent max-width="680px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Aluno: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12 md6 sm6 lg6>
                                                    <v-layout justify-center column>
                                                        <v-flex offset-xs3>
                                                            <v-avatar size="180"><v-img :src="photo_url" /></v-avatar>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                    <v-text-field label="Matrícula" v-bind:value="registration" disabled></v-text-field>
                                                    <v-text-field label="Categoria" v-bind:value="category" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Email" v-bind:value="email" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-bind:value="relevant_informations" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-btn color="info" outline flat :href="redirecionarLattes()"
                                                    target="_blank">Lattes</v-btn>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-flex xs12>
                                                    <v-btn outline flat @click="dialog= false,dialog2 = true">Editar</v-btn>
                                                    <v-btn color="error" outline flat @click="deletarAluno">Deletar</v-btn>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog = false">Cancelar</v-btn>
                                        <v-btn color="info" outline flat @click="dialog = false">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialog2" persistent max-width="860px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Aluno: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Email" v-bind:value="email" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Matrícula" v-bind:value="registration" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Categoria" v-bind:value="category" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-bind:value="relevant_informations" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-btn color="info" outline flat :href="redirecionarLattes()"
                                                    target="_blank">Lattes</v-btn>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-flex xs12>
                                                    <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">{{ alerta_msg }}.</v-alert>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-subheader >Área para editar aluno</v-subheader>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-model="name"></v-text-field>
                                                    <v-text-field label="Matrícula" v-model="registration"></v-text-field>
                                                    <v-text-field label="Lattes" v-model="lattes_link"></v-text-field>
                                                    <v-text-field label="Email" v-model="email"></v-text-field>
                                                </v-flex>
                                                <v-flex xs6>
                                                    <v-flex offset-xs3>
                                                        <v-avatar size="180"><v-img :src="photo_url" /></v-avatar>
                                                    </v-flex>
                                                    <v-layout justify-center>
                                                        <input type="file" id="file" ref="file" @change="onFileChange" accept="image/x-png,image/gif,image/jpeg">
                                                    </v-layout>
                                                </v-flex>
                                                <v-radio-group v-model="category" label="Categoria:">
                                                    <v-layout row>
                                                        <v-radio label="Iniciação Cientifica" value="scientific_research"></v-radio>
                                                        <v-radio label="Mestrado" value="masters_degree"></v-radio>
                                                        <v-radio label="Doutorado" value="doctorate_degree"></v-radio>
                                                        <v-radio label="Pós-Doutorado" value="post_doctoral"></v-radio>
                                                    </v-layout>
                                                </v-radio-group>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-model="relevant_informations"></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog2 = false, dialog = true">Cancelar</v-btn>
                                        <v-btn color="info" outline flat 
                                        @click="atualizarAluno(props.item)">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </template>
                    </v-data-iterator>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import PictureInput from 'vue-picture-input'
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'Content-Type': 'multipart/form-data', 'uid': localStorage.getItem("data['uid']")}
}
export default {
    data: () => ({
        alerta: false,
        alerta_msg: '',
        erro: false,
        erro_msg: '',
        dialog: false,
        dialog2: false,
        url_base: "https://sisplagea-api.herokuapp.com",
        photo_url: '',
        photo_update: '',
        file: null,
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4,
            sortBy: 'name'
        },
        alunos: [{
            id: '',
            name: '',
            category: '',
            email: '',
            registration: '',
            lattes_link: '',
            relevant_informations: '',
            photo_url: ''
        }]
    }),

    components: {
        PictureInput
    },

    props: {
        id: Number,
        name: String,
        category: String,
        email: String,
        registration: String,
        lattes_link: String,
        relevant_informations: String,
        photo_url: String
    },

    methods : {
        atualizarAluno() {
            let formData = new FormData();
            formData.append('name', this.name)
            formData.append('category', this.category)
            formData.append('email', this.email)
            formData.append('registration', this.registration)
            formData.append('lattes_link', this.lattes_link)
            formData.append('relevant_informations', this.relevant_informations)
            formData.append('photo', this.photo_update)
            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/students/'+this.id+'.json',
                headers: config.headers,
                data: formData
            }).then(() => {              
                this.alerta_msg = 'Informações do aluno atualizadas com sucesso.'
                this.alerta = !this.alerta
                setTimeout(this.setAlertaFalse, 3000);
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        buscarAluno(id) {
            axios({
                method: 'get',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/students/'+id+'.json',
                headers: config.headers,

            }).then((response) => {
                this.id = response.data.id
                this.name = response.data.name
                this.category = response.data.category
                this.email = response.data.email
                this.registration = response.data.registration
                this.lattes_link = response.data.lattes_link
                this.relevant_informations = response.data.relevant_informations
                this.photo_url = this.url_base+response.data.photo.url
            }).catch (() => {

            })

        },
        deletarAluno(){
            axios({
                method: 'delete',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/students/'+this.id+'.json',
                headers: config.headers,

            }).then(() => {
                document.location.reload()
            }).catch ((error) => {
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        },
        redirecionarLattes(){
            return this.lattes_link
        },
        onFileChange(file){            
            var files = file.target.files[0];  
            this.photo_update = files
            this.photo_url = URL.createObjectURL(files)
        },
        setErrorFalse(){
            this.erro = false
        },
        setAlertaFalse(){
            this.alerta = false
        }
    },  
    
    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/students.json',
            headers: config.headers,
        }).then((response) => {
            this.alunos = response.data.students
            console.log(this.alunos[20].photo.url)
        }).catch (() => {
            // alert('erro')
        })
    },
}
</script>
