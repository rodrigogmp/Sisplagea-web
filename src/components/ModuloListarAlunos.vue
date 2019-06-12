<template>
    <v-container fluid fill-height>
        <v-layout justify-center >
            <v-flex xs12 sm10 md8 lg6>
                <h1>Alunos cadastrados</h1>
                <v-divider></v-divider>
                <v-container fluid grid-list-md>
                    <v-data-iterator :items="alunos" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                        <template v-slot:item="props">
                            <v-layout row>
                                <v-flex>
                                    <v-card>
                                        <v-list three-line>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title><h3>Nome: {{ props.item.nome }}</h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Matricula:</strong> {{ props.item.matricula }}</v-list-tile-title>
                                                    <v-list-tile-title><strong>Categoria:</strong> {{ props.item.categoria }}</v-list-tile-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </template>
                    </v-data-iterator>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        rowsPerPageItems: [4, 8, 12],
        pagination: {
        rowsPerPage: 4
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
              nome: 'dfsd sdfsdf fsdf',
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
              nome: 'dfsd sdfsdf fsdf',
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
