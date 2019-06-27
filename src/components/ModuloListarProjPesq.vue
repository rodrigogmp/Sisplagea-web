<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Projetos cadastrados</h1>
                <v-divider></v-divider>
                <v-container fluid grid-list-md>
                    <v-data-iterator :items="projetos" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                        <template v-slot:item="props">
                            <v-layout row justify-center>
                                <v-flex>
                                    <v-card>
                                        <v-list three-line>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title><h3>Nome: {{ props.item.name }}</h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Descrição:</strong> {{ props.item.abstract }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-content>
                                                    <v-list-tile-action class="align-end">
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn flat v-on="on" @click="dialog = true, buscarProjeto(props.item.id)"><v-icon color="green lighten-1">info</v-icon>Info Projeto</v-btn>
                                                            </template>
                                                            <span>Exibir/Editar Informações sobre o projeto</span>
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
                                        <span class="headline">Projeto: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Descrição" v-bind:value="abstract" disabled></v-text-field>
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
                                        <span class="headline">Projeto: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Descrição" v-bind:value="abstract" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <!-- <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn> -->
                                                <v-flex xs12>
                                                    <v-subheader >Área para editar projeto</v-subheader>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-model="name"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Descrição" v-model="abstract"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-combobox
                                                        v-model="select"
                                                        :items="alunos"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Adicionar aluno ao projeto"
                                                    ></v-combobox>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog2 = false, dialog = true">Cancelar</v-btn>
                                        <v-btn color="info" outline flat 
                                        @click="atualizarProjeto(props.item), dialog2 = false, dialog= false">Salvar</v-btn>
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
        projetos: [{
            id: '',
            name: '',
            abstract: ''

        }],
        select: '',
        alunos: [{
            id: '',
            name: '',

        }],
    }),

    props: {
        id: Number,
        name: String,
        abstract: String
    },

    methods : {
        atualizarProjeto() {
            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/projects/'+this.id+'.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    abstract: this.abstract
                }
            }).then(() => {              
                document.location.reload()
                // this.alerta = !this.alerta
            }).catch(()=>{
                this.erro = true
            })
        },
        buscarProjeto(id) {
            axios({
                method: 'get',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/projects/'+id+'.json',
                headers: config.headers,

            }).then((response) => {
                this.id = response.data.id
                this.name = response.data.name
                this.abstract = response.data.abstract
            }).catch (() => {

            })

        }
    },  
    
    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/projects.json',
            headers: config.headers,
        }).then((response) => {
            this.projetos = response.data.projects
        }).catch (() => {
            alert('erro')
        }),

        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/students.json',
            headers: config.headers,
        }).then((response) => {
            this.alunos = response.data.students
        }).catch (() => {
            alert('erro')
        })
    }
}
</script>
