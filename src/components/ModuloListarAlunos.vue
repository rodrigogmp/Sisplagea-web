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
                                                    <v-list-tile-title><strong>Categoria:</strong> {{ props.item.id }}</v-list-tile-title>
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
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Lattes" v-bind:value="lattes_link" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-bind:value="relevant_informations" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn>
                                                <v-btn color="error" outline flat >Deletar</v-btn>
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
                            <v-dialog v-model="dialog2" persistent max-width="680px">
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
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Lattes" v-bind:value="lattes_link" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-bind:value="relevant_informations" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <!-- <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn> -->
                                                <v-flex xs12>
                                                    <v-subheader >Área para editar aluno</v-subheader>
                                                </v-flex>
                                                <v-flex xs12 md6 sm6 lg6>
                                                    <v-layout justify-center>
                                                        <v-flex offset-xs3>
                                                            <v-avatar size="180"><v-img :src="photo_url" /></v-avatar>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-model="name"></v-text-field>
                                                    <v-text-field label="Matrícula" v-model="registration"></v-text-field>
                                                    <v-text-field label="Categoria" v-model="category"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Email" v-model="email"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Lattes" v-model="lattes_link"></v-text-field>
                                                </v-flex>
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
                                        @click="atualizarAluno(props.item), dialog2 = false, dialog= false">Salvar</v-btn>
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
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
}
export default {
    data: () => ({
        dialog: false,
        dialog2: false,
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

        }],
    }),

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
            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/students/'+this.id+'.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    category: this.category,
                    email: this.email,
                    registration: this.registration,
                    lattes_link: this.lattes_link,
                    relevant_informations: this.relevant_informations
                }
            }).then(() => {              
                document.location.reload()
                // this.alerta = !this.alerta
            }).catch(()=>{
                this.erro = true
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
                this.photo_url = 'https://sisplagea-api.herokuapp.com'+response.data.photo.url
            }).catch (() => {

            })

        }
    },  
    
    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/students.json',
            headers: config.headers,
        }).then((response) => {
            this.alunos = response.data.students
        }).catch (() => {
            alert('erro')
        })
    },
}
</script>
