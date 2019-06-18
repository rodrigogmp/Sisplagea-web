<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Atividades cadastradas</h1>
                <v-divider></v-divider>
                <v-data-iterator :items="projetos" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                    <template v-slot:item="props">
                        <v-layout row justify-center>
                            <v-flex>
                                <v-card>
                                    <v-list three-line>
                                        <v-list-tile>
                                            <v-list-tile-content>
                                                <v-list-tile-title><h3>Tipo de Atividade: Projeto de Pesquisa</h3></v-list-tile-title>
                                                <v-list-tile-subtitle><h3>Nome: {{ props.item.name }}</h3></v-list-tile-subtitle>
                                                <v-list-tile-subtitle><strong>ID:</strong> {{ props.item.id }}</v-list-tile-subtitle>
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
      projetos: []
    }),
    mounted() {
        axios
            .get('http://localhost:3000/api/v1/projects.json', config)
            .then((response) => {
                this.projetos = response.data.projects
                
            }).catch (() => {
                alert("erro")
            }) 
    }
}
</script>