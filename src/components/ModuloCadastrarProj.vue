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
                    <v-btn @click="cadastrarProjeto" outline color="info" :right="true">Cadastrar</v-btn>
                    <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Projeto de pesquisa cadastrado com sucesso.</v-alert>
                </form>
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
    data () {
        return {
            alerta: false,
            erro: false,
            nome: '',
            descricao: ''
            
        }
    },
    methods: {
        cadastrarProjeto() {
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/v1/projects.json',
                headers: config.headers,
                data: {
                    name: this.nome,
                    abstract: this.descricao,
                    
                }
            }).then(() => {
                
                this.alerta = !this.alerta
                
            }).catch(()=>{
                this.erro = true
            })
        }
        
    }
}
</script>


<!--

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
                        <v-toolbar flat color="#FAFAFA">
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
                                                <v-flex xs12 sm12 md12>
                                                    <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12 sm12 md12>
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
                        <v-data-table :headers="headers" :items="participantes" class="elevation-0" hide-actions>
                            <template v-slot:items="props">
                                <td>{{ props.item.nome }}</td>
                                <td>{{ props.item.titulacao }}</td>
                                <td class="text-xs-right">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-icon @click="deleteItem(props.item)" v-on="on">delete</v-icon>
                                        </template>
                                        <span>Remover colaborador</span>
                                    </v-tooltip>
                                </td>
                            </template>
                            <template v-slot:no-data>
                                <span>Nenhum participante neste projeto</span>
                            </template>
                        </v-data-table>
                    </div>
                </template>
                <v-btn @click="alerta = !alerta" outline color="info" :right="true">Cadastrar</v-btn>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Projeto de pesquisa cadastrado com sucesso.</v-alert>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      alerta: false,
      dialog: false,
      headers: [
        { text: 'Nome', value: 'nome', sortable: false, align: 'left' },
        { text: 'Titulação', value: 'titulacão', sortable: false, align: 'left'},
        { text: 'Ações', value: 'ação', sortable: false, align: 'right' }
      ],
      participantes: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        titulacao: '',
      },
      defaultItem: {
        nome: '',
        titulacao: '',
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
            titulacao: 'mestre',
          },
          {
            nome: 'Ice cream sandwich',
            titulacao: 'mestre',
          },
          {
            nome: 'Eclair',
            titulacao: 'mestre',
          },
          {
            nome: 'Cupcake',
            titulacao: 'mestre',
          },
          {
            nome: 'Gingerbread',
            titulacao: 'mestre',
          },
          {
            nome: 'Jelly bean',
            titulacao: 'lixo',
          },
          {
            nome: 'Lollipop',
            titulacao: 'aluno',
          },
          {
            nome: 'Honeycomb',
            titulacao: 'doutor',
          },
          {
            nome: 'Donut',
            titulacao: 'mestre',
          },
          {
            nome: 'KitKat',
            titulacao: 'mestre',
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
        confirm('Tem certeza que deseja remover este colaborador?') && this.participantes.splice(index, 1)
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

-->