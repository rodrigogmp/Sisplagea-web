<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Grupo de Pesquisa</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" label="Nome do Grupo" required
                    @input="$v.nome.$touch()"
                    @blur="$v.nome.$touch()"
                    ></v-text-field>
                    <v-flex xs3 sm3 md3 lg3>
                        <v-text-field v-model="create_year" label="Ano de criação" required
                        @input="$v.anoCriacao.$touch()"
                        @blur="$v.anoCriacao.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-textarea v-model="leaders" label="Líder(es)" required></v-textarea>
                    <v-text-field v-model="predominant_area" label="Área predominante" required></v-text-field>
                    <v-textarea v-model="objective" label="Objetivos"
                    required></v-textarea>
                    <v-btn @click="cadastrarGrupo" outline color="info" :right="true">Cadastrar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Grupo de pesquisa cadastrado com sucesso.</v-alert>
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
            create_year: '',
            leaders: '',
            predominant_area: '',
            objective: ''
        }
    },
    methods: {
        cadastrarGrupo(){
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/study_groups.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    create_year: this.create_year,
                    leaders: this.leaders,
                    predominant_area: this.predominant_area,
                    objective: this.objective
                }
            }).then(() => {
                this.alerta = !this.alerta

                this.name = '',
                this.create_year = '',
                this.leaders = '',
                this.predominant_area = '',
                this.objective = ''

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