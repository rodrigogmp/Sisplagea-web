<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Disciplina</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" label="Nome" required
                    @input="$v.nome.$touch()"
                    @blur="$v.nome.$touch()"
                    ></v-text-field>
                    <v-layout row wrap>
                        <v-flex xs6 sm5 md4 lg3>
                            <v-text-field v-model="code" label="Código" required
                            @input="$v.code.$touch()"
                            @blur="$v.code.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs6 sm5 md4 lg3>
                            <v-text-field v-model="workload" label="Horas/Aulas" required
                            @input="$v.horas.$touch()"
                            @blur="$v.horas.$touch()"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-radio-group v-model="category" label="Turma:">
                        <v-radio label="Graduação" value="graduate"></v-radio>
                        <v-radio label="Pós-Graduação" value="postgraduate"></v-radio>
                    </v-radio-group>
                    <v-text-field v-model="class_location" label="Local das aulas" required
                    @input="$v.class_location.$touch()"
                    @blur="$v.class_location.$touch()"
                    ></v-text-field>
                    <v-textarea label="Descrição" v-model="description" required></v-textarea>
                    <v-btn @click="cadastrarDisciplina" outline color="info" :right="true">Cadastrar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Disciplina cadastrada com sucesso.</v-alert>
                <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">Erro ao cadastrar Disciplina.</v-alert>
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
            code: '',
            workload: '',
            category: '',
            class_location: '',
            description: ''
        }
    },
    methods: {
        cadastrarDisciplina() {
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/subjects.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    category: this.category,
                    code: this.code,
                    workload: this.workload,
                    class_location: this.class_location,
                    description: this.description
                }
            }).then(() => {
                this.alerta = !this.alerta

                this.name = '',
                this.category = '',
                this.code = '',
                this.workload = '',
                this.class_location = '',
                this.description = ''

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