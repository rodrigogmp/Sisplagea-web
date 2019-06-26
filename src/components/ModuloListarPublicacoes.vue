<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Publicacões cadastradas</h1>
                <v-divider></v-divider>
                <v-data-iterator :items="publicacoes" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                    <template v-slot:item="props">
                        <v-layout row justify-center>
                            <v-flex>
                                <v-card>
                                    <v-list two-line>
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
                                                            <v-btn flat v-on="on" @click="dialog = true"><v-icon color="green lighten-1">info</v-icon>Info Publicação</v-btn>
                                                        </template>
                                                        <span>Exibir/Editar Informações sobre a publicação</span>
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
                                                <v-btn outline flat rigth @click="dialog = false">Editar</v-btn>
                                                <v-flex xs12>                                                    
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <v-divider />
                                                </v-flex>
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
      publicacoes: []
    }),
    mounted() {
        axios
            .get('https://sisplagea-api.herokuapp.com/api/v1/publications.json', config)
            .then((response) => {
                this.publicacoes = response.data.publications
                
            }).catch (() => {
                alert("erro")
            }) 
    }
}
</script>