<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Publicações</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="title" label="Título" required
                    ></v-text-field>
                    <v-text-field v-model="journal" label="Journal" required
                    ></v-text-field>
                    <v-radio-group v-model="category" label="Tipo:">
                        <v-radio label="Conferência" value="conference"></v-radio>
                        <v-radio label="Resumo" value="abstract"></v-radio>
                        <v-radio label="Periódico" value="periodic"></v-radio>
                    </v-radio-group>
                    <v-layout row wrap>
                        <v-flex xs3 sm3 md2 lg2>
                            <v-text-field v-model="year" label="Ano" required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs3 sm3 md2 lg2>
                            <v-text-field v-model="volume" label="Volume" required
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs3 sm3 md2 lg2>
                            <v-text-field v-model="pages" label="Páginas" required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-textarea label="authors" v-model="authors" required></v-textarea>
                    <v-btn @click="cadastrarPublicacao" outline color="info" :right="true">Cadastrar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Publicação cadastrada com sucesso.</v-alert>
                <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">Erro ao cadastrar Publicação.</v-alert>
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
            title: '',
            journal: '',
            category: '',
            year: '',
            volume: '',
            pages: '',
            authors: ''
            
        }
    },
    methods: {
        cadastrarPublicacao() {
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/publications.json',
                headers: config.headers,
                data: {
                    title: this.title,
                    journal: this.journal,
                    category: this.category,
                    year: this.year,
                    volume: this.volume,
                    pages: this.pages,
                    authors: this.authors
                }
            }).then(() => {
                this.alerta = !this.alerta

                this.title = '',
                this.journal = '',
                this.category = '',
                this.year = '',
                this.volume = '',
                this.pages = '',
                this.authors = ''
                
                setTimeout(this.setAlertFalse, 5000);
                
            }).catch(()=>{
                this.erro = true
            })
        },
        setAlertFalse(){
            this.alerta = false
        }
        
    }
}
</script>