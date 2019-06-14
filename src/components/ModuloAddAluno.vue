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
                    <v-flex xs3 sm3 md3 lg3>
                        <v-text-field v-model="matricula" :error-messages="matriculaErrors" label="Matricula" required
                        @input="$v.matricula.$touch()"
                        @blur="$v.matricula.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-radio-group v-model="radioGroup" label="Categoria:">
                        <v-radio label="Iniciação Cientifica" value="1"></v-radio>
                        <v-radio label="Mestrado" value="2"></v-radio>
                        <v-radio label="Doutorado" value="3"></v-radio>
                        <v-radio label="Pós-Doutorado" value="4"></v-radio>
                    </v-radio-group>
                    <v-text-field v-model="curriculo" :error-messages="curriculoErrors" 
                    label="Adicionar referencia para o curriculo lattes:" required
                    @input="$v.curriculo.$touch()"
                    @blur="$v.curriculo.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Adicionar informações relevantes:" 
                    v-model="informacoes" :error-messages="informacoes" required></v-textarea>
                    <v-btn @click="alerta = !alerta" outline color="info" :right="true">Adicionar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Novo aluno cadastrado com sucesso.</v-alert>
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