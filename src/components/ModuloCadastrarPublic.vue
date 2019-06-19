<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Publicações</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="titulo" :error-messages="tituloErrors" :counter="254" label="Título" required
                    @input="$v.titulo.$touch()"
                    @blur="$v.titulo.$touch()"
                    ></v-text-field>
                    <v-text-field v-model="journal" :error-messages="journalErrors" label="Journal" required
                    @input="$v.journal.$touch()"
                    @blur="$v.journal.$touch()"
                    ></v-text-field>
                    <v-radio-group v-model="radioGroup" label="Tipo:">
                        <v-radio label="Conferência" value="conference"></v-radio>
                        <v-radio label="Resumo" value="abstract"></v-radio>
                        <v-radio label="Periódico" value="periodic"></v-radio>
                    </v-radio-group>
                    <v-layout row wrap>
                        <v-flex xs3 sm3 md2 lg2>
                            <v-text-field v-model="anoPublicacao" :error-messages="anoPublicacaoErrors" label="Ano" required
                            @input="$v.anoPublicacao.$touch()"
                            @blur="$v.anoPublicacao.$touch()"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs3 sm3 md2 lg2>
                            <v-text-field v-model="volume" :error-messages="volumeErrors" label="Volume" required
                            @input="$v.volume.$touch()"
                            @blur="$v.volume.$touch()"
                            ></v-text-field>
                        </v-flex>

                        <v-flex xs3 sm3 md2 lg2>
                            <v-text-field v-model="paginas" :error-messages="paginasErrors" label="Páginas" required
                            @input="$v.paginas.$touch()"
                            @blur="$v.paginas.$touch()"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-textarea name="input-7-1" label="Autores" v-model="autores" :error-messages="autores" required></v-textarea>
                    <v-subheader >Carregar arquivos</v-subheader>
                    <input style="padding-left: 16px; padding-bottom: 10px;" type="file">
                    <v-divider class="grey" />
                    <br />
                    <br />
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
            titulo: '',
            journal: '',
            radioGroup: '',
            anoPublicacao: '',
            volume: '',
            paginas: '',
            autores: ''
            
        }
    },
    methods: {
        cadastrarPublicacao() {
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/v1/publications.json',
                headers: config.headers,
                data: {
                    title: this.titulo,
                    journal: this.journal,
                    category: this.radioGroup,
                    year: this.anoPublicacao,
                    volume: this.volume,
                    pages: this.paginas,
                    authors: this.autores
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