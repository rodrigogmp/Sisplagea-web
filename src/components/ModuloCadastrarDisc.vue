<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Disciplina</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="nome" :error-messages="nomeErrors" :counter="254" label="Nome" required
                    @input="$v.nome.$touch()"
                    @blur="$v.nome.$touch()"
                    ></v-text-field>
                    <v-layout row wrap>
                        <v-flex xs6 sm5 md4 lg3>
                            <v-text-field v-model="codigo" :error-messages="codigoErrors" label="Código" required
                            @input="$v.codigo.$touch()"
                            @blur="$v.codigo.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs6 sm5 md4 lg3>
                            <v-text-field v-model="horas" :error-messages="horasErrors" label="Horas/Aulas" required
                            @input="$v.horas.$touch()"
                            @blur="$v.horas.$touch()"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-radio-group v-model="radioGroup" label="Turma:">
                        <v-radio label="Graduação" value="graduate"></v-radio>
                        <v-radio label="Pós-Graduação" value="postgraduate"></v-radio>
                    </v-radio-group>
                    <v-text-field v-model="localAulas" :error-messages="localAulasErrors" label="Local das aulas" required
                    @input="$v.localAulas.$touch()"
                    @blur="$v.localAulas.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Descrição" v-model="descricao" :error-messages="descricao" 
                    required></v-textarea>
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
            nome: '',
            codigo: '',
            horas: '',
            radioGroup: '',
            localAulas: '',
            descricao: ''
        }
    },
    methods: {
        cadastrarDisciplina() {
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/subjects.json',
                headers: config.headers,
                data: {
                    name: this.nome,
                    category: this.radioGroup,
                    code: this.codigo,
                    workload: this.horas,
                    class_location: this.localAulas,
                    description: this.descricao
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