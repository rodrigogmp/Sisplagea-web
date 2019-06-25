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
                                                                <v-btn flat v-on="on" @click="dialog = true"><v-icon color="green lighten-1">info</v-icon>Info Aluno</v-btn>
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
                                        <span class="headline">Aluno: {{ props.item.name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-bind:value="props.item.name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Email" v-bind:value="props.item.email" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Matrícula" v-bind:value="props.item.registration" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Categoria" v-bind:value="props.item.category" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Lattes" v-bind:value="props.item.lattes_link" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-bind:value="props.item.relevant_informations" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn>
                                                <v-flex xs12 offset-xs3>
                                                    <v-subheader >Adicionar o aluno a um projeto</v-subheader>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome do projeto"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-textarea auto-grow rows="4" label="Resumo do projeto:"></v-textarea>
                                                </v-flex>
                                                <v-flex xs3>
                                                    <v-menu ref="menuInicio" v-model="menuInicio" :close-on-content-click="false" :nudge-right="40" :return-value.sync="dataInicio" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                                        <template v-slot:activator="{ on }">
                                                            <v-text-field v-model="dataInicio" label="Inicio" prepend-icon="event" readonly v-on="on"></v-text-field>
                                                        </template>
                                                        <v-date-picker v-model="dataInicio" no-title scrollable>
                                                            <v-spacer></v-spacer>
                                                            <v-btn flat outline @click="menuInicio = false">Cancel</v-btn>
                                                            <v-btn flat outline color="info" @click="$refs.menuInicio.save(dataInicio)">OK</v-btn>
                                                        </v-date-picker>
                                                    </v-menu>
                                                </v-flex>
                                                <v-flex xs3>
                                                    <v-menu ref="menuFim" v-model="menuFim" :close-on-content-click="false" :nudge-right="40" :return-value.sync="dataFim" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                                        <template v-slot:activator="{ on }">
                                                            <v-text-field v-model="dataFim" label="Fim" prepend-icon="event" readonly v-on="on"></v-text-field>
                                                        </template>
                                                        <v-date-picker v-model="dataFim" no-title scrollable>
                                                            <v-spacer></v-spacer>
                                                            <v-btn flat outline @click="menuFim = false">Cancel</v-btn>
                                                            <v-btn flat outline color="info" @click="$refs.menuFim.save(dataFim)">OK</v-btn>
                                                        </v-date-picker>
                                                    </v-menu>
                                                </v-flex>
                                                <v-flex xs5 offset-xs1>
                                                    <v-card-text>
                                                        <input type="file">
                                                    </v-card-text>
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
                            <v-dialog v-model="dialog2" persistent max-width="680px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Aluno: {{ props.item.name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Nome" v-model="name" v-bind:value="props.item.name"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md6>
                                                    <v-text-field label="Email" v-model="email" v-bind:value="props.item.email"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Matrícula" v-model="registration" v-bind:value="props.item.registration"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Categoria" v-model="category" v-bind:value="props.item.category"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm6 md4>
                                                    <v-text-field label="Lattes" v-model="lattes_link" v-bind:value="props.item.lattes_link"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Informações" v-model="relevant_informations" v-bind:value="props.item.relevant_informations"></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog2 = false, dialog = true">Cancelar</v-btn>
                                        <v-btn color="info" outline flat @click="atualizarAluno(props.item.id), dialog2 = false, dialog = true">Salvar</v-btn>
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
        dataInicio: new Date().toISOString().substr(0, 10),
        menuInicio: false,
        dataFim: new Date().toISOString().substr(0, 10),
        menuFim: false,
        dialog: false,
        dialog2: false,
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4,
            sortBy: 'name'
        },
        alunos: [],
        name: '',
        category: '',
        email: '',
        registration: '',
        lattes_link: '',
        relevant_informations: ''
    }),

    methods : {
        atualizarAluno(pk) {
            axios({
                method: 'put',
                url: 'http://localhost:3000/api/v1/students/'+pk+'.json',
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
                this.alerta = !this.alerta   
            }).catch(()=>{
                this.erro = true
            })
        }
    },
    
    mounted() {
        axios
            .get('http://localhost:3000/api/v1/students.json', config)
            .then((response) => {
                this.alunos = response.data.students
                
            }).catch (() => {
                alert("erro")
            }) 
    }
}
</script>
