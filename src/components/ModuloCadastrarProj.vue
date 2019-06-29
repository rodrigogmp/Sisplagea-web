<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Projeto de Pesquisa</h1>
                <v-divider></v-divider>
                <form>
                  <v-flex xs12>
                    <v-text-field v-model="name" label="Nome do projeto" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea label="Descrição" v-model="abstract" required></v-textarea>
                  </v-flex>
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
            name: '',
            abstract: '',
            
        }
    },
    methods: {
        cadastrarProjeto() {
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/projects.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    abstract: this.abstract,
                    
                }
            }).then(() => {

                this.alerta = !this.alerta
                
                this.name = '',
                this.abstract = ''

                setTimeout(this.setAlertFalse, 5000);
                
            }).catch(()=>{
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        },
        setAlertFalse(){
            this.alerta = false
        },
        setErrorFalse(){
            this.erro = false
        }
        
    }
}
</script>
