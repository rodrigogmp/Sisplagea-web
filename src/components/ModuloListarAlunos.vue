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
                                                    <v-list-tile-title><h3>Nome: {{ props.item.nome }}</h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Matricula:</strong> {{ props.item.matricula }}</v-list-tile-title>
                                                    <v-list-tile-title><strong>Categoria:</strong> {{ props.item.categoria }}</v-list-tile-title>
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
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Aluno "Nome do aluno"</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field label="Nome" value="João da Silva" disabled></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field label="matrícula" value="1234567" disabled></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
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
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
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
      alunos: [
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 122343454,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 1224343454,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 1227867454,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'adfsd sdfsdf fsdf',
              matricula: 1224908954,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 1224787654,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 1342245363454,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 1226765454,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 1220845454,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'bdfsd sdfsdf fsdf',
              matricula: 12254554,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 4564564,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 5476879,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 34562234,
              categoria: 'iniciação cientifica'
          },
          {
              nome: 'dfsd sdfsdf fsdf',
              matricula: 122546543454,
              categoria: 'iniciação cientifica'
          },
      ]
    })
}
</script>
