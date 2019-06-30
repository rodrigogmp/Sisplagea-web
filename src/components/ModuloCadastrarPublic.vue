<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Publicação</h1>
                <v-divider></v-divider>
                <v-flex class="mt-2 mb-2" sx12>
                    <v-btn @click="bibtex = true, manual = false" outline color="info">Cadastrar por bibtex</v-btn>
                    <v-btn @click="manual = true, bibtex = false" outline color="info">Cadastrar manual</v-btn>
                </v-flex>
                <v-divider></v-divider>
                <v-flex sx12 v-if="bibtex == true">
                    <input class="mt-4" type="file" id="file" ref="file" @change="onFileChange" required>
                    <v-btn @click="cadastrarPublicacaoBibtex" outline color="info">Cadastrar</v-btn>
                </v-flex>
                <form v-if="manual == true">
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
                    <v-btn @click="cadastrarPublicacaoManual" outline color="info">Cadastrar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Publicação cadastrada com sucesso.</v-alert>
                <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': 'multipart/form-data', 'uid': localStorage.getItem("data['uid']")}
}
export default {
    data () {
        return {
            bibtex: false,
            manual: false,
            alerta: false,
            erro: false,
            erro_msg: '',
            file: null,
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
        cadastrarPublicacaoManual() {
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
                
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        },
        cadastrarPublicacaoBibtex() {
            let formData = new FormData();
            formData.append('file', this.file);
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/publications/create_from_bibtex.json',
                headers: config.headers,
                data: formData
            }).then(() => {
                this.alerta = !this.alerta

                const cleanFile = this.$refs.file
                cleanFile.type = 'text'
                cleanFile.type = 'file'
                
                setTimeout(this.setAlertFalse, 5000);
                
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        },
        onFileChange(file){            
            var files = file.target.files            
            if(files.length >= 1){
                this.file = this.$refs.file.files[0]; 
            } else {
                this.file = null
            }
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