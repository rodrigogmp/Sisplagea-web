<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Adicionar Aluno</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="254" label="Nome" required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    ></v-text-field>
                    <!-- <v-flex xs3 sm3 md3 lg3>
                        <v-text-field v-model="matricula" :error-messages="matriculaErrors" label="Matricula" required
                        @input="$v.matricula.$touch()"
                        @blur="$v.matricula.$touch()"
                        ></v-text-field>
                    </v-flex> -->
                    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-radio-group v-model="radioGroup" label="Categoria:">
                        <v-radio label="Iniciação Cientifica" value="scientific_research"></v-radio>
                        <v-radio label="Mestrado" value="masters_degree"></v-radio>
                        <v-radio label="Doutorado" value="doctorate_degree"></v-radio>
                        <v-radio label="Pós-Doutorado" value="post_doctoral"></v-radio>

                    </v-radio-group>
                    <v-text-field v-model="curriculo" :error-messages="curriculoErrors" 
                    label="Adicionar referencia para o curriculo lattes:" required
                    @input="$v.curriculo.$touch()"
                    @blur="$v.curriculo.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Adicionar informações relevantes:" 
                    v-model="informacoes" :error-messages="informacoes" required></v-textarea>
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
export default {
    data () {
        return {
            alerta: false,
            erro: false,
            name: '',
            radioGroup: '',
            email: ''

        }
    },
    methods : {
        cadastrarAluno() {
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/v1/students.json',
                data: {
                    name: this.name,
                    category: this.radioGroup,
                    email: this.email
                }
            }).then((response) => {
                
                this.alerta = !this.alerta
                
            }).catch((err)=>{
                this.erro = true
            })
        }
        
    }
}
</script>