<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Cadastrar Grupo de Pesquisa</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="nome" :error-messages="nomeErrors" :counter="254" label="Nome do Grupo" required
                    @input="$v.nome.$touch()"
                    @blur="$v.nome.$touch()"
                    ></v-text-field>
                    <v-flex xs3 sm3 md3 lg3>
                        <v-text-field v-model="anoCriacao" :error-messages="anoCriacaoErrors" label="Ano de criação" required
                        @input="$v.anoCriacao.$touch()"
                        @blur="$v.anoCriacao.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-textarea name="input-7-1" label="Líder(es)" v-model="lideres" :error-messages="lideres" 
                    required></v-textarea>
                    <v-flex xs6 sm6 md6 lg6>
                        <v-select v-model="select" label="Área predominante"
                        ></v-select>
                    </v-flex>
                    <v-textarea name="input-7-1" label="Objetivos" v-model="objetivos" :error-messages="objetivos" 
                    required></v-textarea>
                    //Repensar adicionar pesquisador <br>
                    <v-btn @click="alerta = !alerta" outline color="info" :right="true">Cadastrar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Grupo de pesquisa cadastrado com sucesso.</v-alert>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
data () {
        return {
            alerta: false
        }
    }
}
</script>