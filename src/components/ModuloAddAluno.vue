<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Adicionar Aluno</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" label="Nome" required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-flex xs3 sm3 md3 lg3>
                        <v-text-field v-model="registration" label="registration" required
                        @input="$v.registration.$touch()"
                        @blur="$v.registration.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-text-field v-model="email" label="E-mail" required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-radio-group v-model="category" label="Categoria:">
                        <v-radio label="Iniciação Cientifica" value="scientific_research"></v-radio>
                        <v-radio label="Mestrado" value="masters_degree"></v-radio>
                        <v-radio label="Doutorado" value="doctorate_degree"></v-radio>
                        <v-radio label="Pós-Doutorado" value="post_doctoral"></v-radio>

                    </v-radio-group>
                    <v-text-field v-model="lattes_link"
                    label="Adicionar referencia para o lattes_link lattes:" required
                    @input="$v.lattes_link.$touch()"
                    @blur="$v.lattes_link.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Adicionar informações relevantes:" 
                    v-model="relevant_informations" required></v-textarea>
                    <!-- <v-btn @click="alerta = !alerta" outline color="info" :right="true">Adicionar</v-btn> -->
                    <v-btn @click="cadastrarAluno" outline color="info" :right="true">Adicionar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Novo aluno cadastrado com sucesso.</v-alert>
                <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">Erro ao cadastrar aluno.</v-alert>
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
            category: '',
            email: '',
            lattes_link: '',
            relevant_informations: '',
            registration: ''

        }
    },
    methods : {
        cadastrarAluno() {
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/students.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    category: this.category,
                    email: this.email,
                    registration: this.registration,
                    lattes_link: this.lattes_link,
                    relevant_informations: this.relevant_informations
                }
            }).then(() => {
                this.alerta = !this.alerta

                this.name = '',
                this.category = '',
                this.email = '',
                this.registration = '',
                this.lattes_link = '',
                this.relevant_informations = ''
                
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