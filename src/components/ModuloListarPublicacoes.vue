<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Publicações cadastrados</h1>
                <v-divider></v-divider>
                <v-container fluid grid-list-md>
                    <v-data-iterator :items="publicacoes" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                        <template v-slot:item="props">
                            <v-layout row justify-center>
                                <v-flex>
                                    <v-card>
                                        <v-list three-line>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title><h3>Título: {{ props.item.title }}</h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Journal:</strong> {{ props.item.journal }}</v-list-tile-title>
                                                    <v-list-tile-title><strong>Categoria:</strong> {{ props.item.category }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-content>
                                                    <v-list-tile-action class="align-end">
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn flat v-on="on" @click="dialog = true, buscarPublicacao(props.item.id)"><v-icon color="green lighten-1">info</v-icon>Info Publicação</v-btn>
                                                            </template>
                                                            <span>Exibir/Editar Informações sobre o publicação</span>
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
                                        <span class="headline">Publicação: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Título" v-bind:value="title" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Journal" v-bind:value="journal" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Tipo" v-bind:value="category" disabled></v-text-field>
                                                </v-flex>
                                                <v-layout row wrap>
                                                    <v-flex xs3 sm3 md2 lg2>
                                                        <v-text-field label="Ano" v-bind:value="year" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3 sm3 md2 lg2>
                                                        <v-text-field label="Volume" v-bind:value="volume" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3 sm3 md2 lg2>
                                                        <v-text-field label="Páginas" v-bind:value="pages" disabled></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                                <v-flex xs12>
                                                    <v-text-field label="Autores" v-bind:value="authors" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn>
                                                <v-btn color="error" outline flat @click="deletarPublicacao">Deletar</v-btn>
                                                <v-flex xs12>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog = false">Cancelar</v-btn>
                                        <v-btn color="info" outline flat @click="dialog = false, reload()">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialog2" persistent max-width="680px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Publicação: {{ title }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Título" v-bind:value="title" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Journal" v-bind:value="journal" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Tipo" v-bind:value="category" disabled></v-text-field>
                                                </v-flex>
                                                <v-layout row wrap>
                                                    <v-flex xs3 sm3 md2 lg2>
                                                        <v-text-field label="Ano" v-bind:value="year" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3 sm3 md2 lg2>
                                                        <v-text-field label="Volume" v-bind:value="volume" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3 sm3 md2 lg2>
                                                        <v-text-field label="Páginas" v-bind:value="pages" disabled></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                                <v-flex xs12>
                                                    <v-text-field label="Autores" v-bind:value="authors" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <!-- <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn> -->
                                                <v-flex xs12>
                                                    <v-text-field label="Título" v-model="title"></v-text-field>
                                                </v-flex>
                                                <v-flex xs6>
                                                    <v-text-field label="Journal" v-model="journal"></v-text-field>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-text-field label="Ano" v-model="year"></v-text-field>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-text-field label="Volume" v-model="volume"></v-text-field>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-text-field label="Páginas" v-model="pages"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-radio-group v-model="category" label="Tipo:" row>
                                                        <v-radio label="Conferência" value="conference"></v-radio>
                                                        <v-radio label="Resumo" value="abstract"></v-radio>
                                                        <v-radio label="Periódico" value="periodic"></v-radio>
                                                    </v-radio-group>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Autores" v-model="authors"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">{{ alerta_msg }}.</v-alert>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog2 = false, dialog = true">Cancelar</v-btn>
                                        <v-btn color="info" outline flat 
                                        @click="atualizarPublicacao(props.item)">Salvar</v-btn>
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
        alerta: false,
        alerta: '',
        erro: false,
        erro_msg: '',
        dialog: false,
        dialog2: false,
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4,
            sortBy: 'name'
        },
        publicacoes: [{
            id: '',
            title: '',
            journal: '',
            category: '',
            year: '',
            volume: '',
            pages: '',
            authors: ''

        }],
    }),

    props: {
        id: Number,
        title: String,
        journal: String,
        category: String,
        year: String,
        volume: String,
        pages: String,
        authors: String
    },

    methods : {
        atualizarPublicacao() {
            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/publications/'+this.id+'.json',
                headers: config.headers,
                data: {
                    title: this.title,
                    journal: this.journal,
                    category: this.category,
                    year: this.year,
                    volume: this.volume,
                    pages: this.pages,
                    authors: this.authors
                }
            }).then(() => {              
                this.alerta_msg = 'Informações da publicação atualizadas com sucesso.'
                this.alerta = !this.alerta
                setTimeout(this.setAlertaFalse, 3000);
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        buscarPublicacao(id) {
            axios({
                method: 'get',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/publications/'+id+'.json',
                headers: config.headers,

            }).then((response) => {
                this.id = response.data.id
                this.title = response.data.title
                this.journal = response.data.journal
                this.category = response.data.category
                this.year = response.data.year
                this.volume = response.data.volume
                this.pages = response.data.pages
                this.authors = response.data.authors
            }).catch (() => {

            })

        },
        deletarPublicacao(){
            axios({
                method: 'delete',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/publications/'+this.id+'.json',
                headers: config.headers,

            }).then(() => {
                document.location.reload()
            }).catch ((error) => {
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        },
        setErrorFalse(){
            this.erro = false
        },
        setAlertaFalse(){
            this.alerta = false
        },
        reload(){
            document.location.reload()
        }
    },  
    
    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/publications.json',
            headers: config.headers,
        }).then((response) => {
            this.publicacoes = response.data.publications
        }).catch (() => {
            alert('erro')
        })
    },
}
</script>
