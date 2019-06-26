<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Disciplinas Cadastradas</h1>
                <v-divider></v-divider>
                <v-data-iterator :items="disciplinas" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                    <template v-slot:item="props">
                        <v-layout row justify-center>
                            <v-flex>
                                <v-card>
                                    <v-list two-line>
                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title><h3>Nome: {{ props.item.name }}</h3></v-list-tile-title>
                                                <v-list-tile-title><strong>Categoria:</strong> {{ props.item.category }}</v-list-tile-title>
                                            </v-list-tile-content>
                                            <v-list-content>
                                                <v-list-tile-action class="align-end">
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{ on }">
                                                            <v-btn flat v-on="on" @click="dialog = true"><v-icon color="green lighten-1">info</v-icon>Info Disciplina</v-btn>
                                                        </template>
                                                        <span>Exibir/Editar Informações sobre a disciplina</span>
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
                                        <span class="headline">Titulo: {{ props.item.name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="props.item.name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-textarea label="Abstract" v-bind:value="props.item.abstract" disabled></v-textarea>
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
                    </template>
                </v-data-iterator>
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
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4,
            sortBy: 'nome'
        },
      disciplinas: []
    }),
    mounted() {
        axios
            .get('https://sisplagea-api.herokuapp.com/api/v1/subjects.json', config)
            .then((response) => {
                this.disciplinas = response.data.subjects
                
            }).catch (() => {
                alert("erro")
            }) 
    }
}
</script>