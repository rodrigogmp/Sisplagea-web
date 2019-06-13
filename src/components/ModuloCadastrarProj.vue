<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Projeto de Pesquisa</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="nome" :error-messages="nomeErrors" :counter="254" label="Nome do projeto" required
                    @input="$v.nome.$touch()"
                    @blur="$v.nome.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Descrição" v-model="descricao" :error-messages="descricao" required></v-textarea>
                </form>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <template>
                    <div>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Participantes</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" dark class="mb-2" v-on="on">Novo participante</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Novo Participante</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                        <v-layout column>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.titulacao" label="Titulação"></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                            <v-btn flat @click="close" outline>Cancelar</v-btn>
                                            <v-btn color="info" flat @click="save" outline>Adicionar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                        <v-data-table :headers="headers" :items="participantes" class="elevation-1" hide-actions>
                            <template v-slot:items="props">
                                <td>{{ props.item.nome }}</td>
                                <td class="text-xs-right">{{ props.item.titulacao }}</td>
                                <td class="justify-center layout px-0"><v-icon small @click="deleteItem(props.item)">delete</v-icon></td>
                            </template>
                            <template v-slot:no-data>
                                <span>Nenhum participante neste projeto</span>
                            </template>
                        </v-data-table>
                    </div>
                </template>
                <v-btn @click="submit" outline color="info" :right="true">Cadastrar</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'Nome', align: 'left', sortable: false, value: 'nome' },
        { text: 'Titulação', value: 'nome', sortable: false},
        { text: 'Ações', value: 'titulacao', sortable: false, align: 'right' }
      ],
      participantes: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        titulacao: 0,
      },
      defaultItem: {
        nome: '',
        titulacao: 0,
      }
    }),

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.participantes = [
          {
            nome: 'Frozen Yogurt',
            titulacao: 159,
          },
          {
            nome: 'Ice cream sandwich',
            titulacao: 237,
          },
          {
            nome: 'Eclair',
            titulacao: 262,
          },
          {
            nome: 'Cupcake',
            titulacao: 305,
          },
          {
            nome: 'Gingerbread',
            titulacao: 356,
          },
          {
            nome: 'Jelly bean',
            titulacao: 375,
          },
          {
            nome: 'Lollipop',
            titulacao: 392,
          },
          {
            nome: 'Honeycomb',
            titulacao: 408,
          },
          {
            nome: 'Donut',
            titulacao: 452,
          },
          {
            nome: 'KitKat',
            titulacao: 518,
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.participantes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.participantes.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.participantes.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.participantes[this.editedIndex], this.editedItem)
        } else {
          this.participantes.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>