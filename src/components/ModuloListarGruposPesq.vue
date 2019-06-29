<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Grupos cadastrados</h1>
                <v-divider></v-divider>
                <v-container fluid grid-list-md>
                    <v-data-iterator :items="grupos" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                        <template v-slot:item="props">
                            <v-layout row justify-center>
                                <v-flex>
                                    <v-card>
                                        <v-list three-line>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title><h3>Nome: {{ props.item.name }} </h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Líderes:</strong> {{ props.item.leaders }}</v-list-tile-title>
                                                    <v-list-tile-title><strong>Área predominante:</strong> {{ props.item.predominant_area }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-content>
                                                    <v-list-tile-action class="align-end">
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn flat v-on="on" @click="dialog = true, buscarGrupo(props.item.id), listarParticipantes(props.item.id)"><v-icon color="green lighten-1">info</v-icon>Info Grupo</v-btn>
                                                            </template>
                                                            <span>Exibir/Editar Informações sobre o grupo</span>
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
                                        <span class="headline">Grupo: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Ano de criação" v-bind:value="create_year" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Líderes" v-bind:value="leaders" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Área predominate" v-bind:value="predominant_area" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Objetivo" v-bind:value="objective" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs9>
                                                    <v-combobox
                                                        v-model="select"
                                                        :items="participantes"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Alunos vinculados ao grupo"
                                                        hint="Selecione e clique em Desvincular, caso queira desvincular um aluno."
                                                        persistent-hint
                                                    ></v-combobox>
                                                </v-flex>
                                                <v-flex xs3>
                                                    <v-btn color="info" outline flat @click="desvincularAluno()">Desvincular</v-btn>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
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
                                        <span class="headline">Grupo: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Ano de criação" v-bind:value="create_year" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Líderes" v-bind:value="leaders" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Área predominate" v-bind:value="predominant_area" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Objetivo" v-bind:value="objective" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <!-- <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn> -->
                                                <v-flex xs12>
                                                    <v-subheader >Área para editar grupo</v-subheader>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-model="name"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Ano de criação" v-model="create_year"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Líderes" v-model="leaders"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Área predominate" v-model="predominant_area"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Objetivo" v-model="objective"></v-text-field>
                                                </v-flex>
                                                <v-flex xs10>
                                                    <v-combobox
                                                        v-model="select"
                                                        :items="alunos"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Adicionar aluno ao grupo"
                                                    ></v-combobox>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-btn color="info" outline flat @click="vincularAluno">Vincular</v-btn>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog2 = false, dialog = true">Cancelar</v-btn>
                                        <v-btn color="info" outline flat 
                                        @click="atualizarGrupo(props.item), dialog2 = false, dialog= false">Salvar</v-btn>
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
        erro: false,
        erro_msg: '',
        dialog: false,
        dialog2: false,
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4,
            sortBy: 'name'
        },
        grupos: [{
            id: '',
            name: '',
            create_year: '',
            leaders: '',
            predominant_area: '',
            objective: ''

        }],
        select: '',
        alunos: [{
            id: '',
            name: '',

        }],
        participantes: [{
            id: '',
            name: ''
        }]
    }),

    props: {
        id: Number,
        name: String,
        create_year: String,
        leaders: String,
        predominant_area: String,
        objective: String
        
    },

    methods : {
        atualizarGrupo() {
            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/study_groups/'+this.id+'.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    create_year: this.create_year,
                    leaders: this.leaders,
                    predominant_area: this.predominant_area,
                    objective: this.objective
                }
            }).then(() => {              
                document.location.reload()
                //this.alerta = !this.alerta
            }).catch((response)=>{
                this.erro_msg = response.data
                this.erro = true
            })
        },
        buscarGrupo(id) {
            axios({
                method: 'get',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/study_groups/'+id+'.json',
                headers: config.headers,

            }).then((response) => {
                this.id = response.data.id
                this.name = response.data.name
                this.create_year = response.data.create_year
                this.leaders = response.data.leaders
                this.predominant_area = response.data.predominant_area
                this.objective = response.data.objective
            }).catch (() => {

            })

        },
        vincularAluno(){
            axios({
                method: 'post',
                url: `https://sisplagea-api.herokuapp.com/api/v1/study_groups/${this.id}/link_participant`,
                headers: config.headers,
                data: {
                    student_id: this.select.id
                }
            }).then(() => {
                document.location.reload()
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        desvincularAluno(){
            axios({
                method: 'delete',
                url: `https://sisplagea-api.herokuapp.com/api/v1/study_groups/${this.id}/unlink_participant/${this.select.id}`,
                headers: config.headers,
             }).then(() => {
                document.location.reload()
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        listarParticipantes(id){
            axios({
                method: 'get',
                url: `https://sisplagea-api.herokuapp.com/api/v1/study_groups/${id}/participants.json`,
                headers: config.headers
            }).then((response)=>{
                this.participantes = response.data.participants
            })
        },
        setErroFalse(){
            this.erro = false
        }
    },  
    
    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/study_groups.json',
            headers: config.headers,
        }).then((response) => {
            this.grupos = response.data.study_groups
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
    },
}
</script>
