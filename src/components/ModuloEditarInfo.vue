<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Editar informações</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="254" label="Nome" required
                    ></v-text-field>
                    <v-layout justify-center>
                        <v-flex xs12 md6 sm6 lg6>
                            <v-text-field v-model="formacao" :error-messages="formacaoErrors" label="Formacao" required
                            ></v-text-field>
                            <v-text-field v-model="departamento" :error-messages="departamentoErrors" label="Departamento" required
                            ></v-text-field>
                            <v-text-field v-model="sala" :error-messages="salaErrors" label="Sala" required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6 sm6 lg6>
                            <v-layout justify-center column>
                                <v-flex offset-xs3>
                                    <v-avatar size="180"><v-img :src="require('@/assets/durelli.png')" contain></v-img></v-avatar>
                                </v-flex>
                                <v-flex offset-xs3>
                                    <input type="file" accept="image/x-png,image/gif,image/jpeg">
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-textarea name="input-7-1" label="Sobre" v-model="sobre" :error-messages="sobre"></v-textarea>
                    <v-btn @click="alerta = !alerta" outline color="info" :right="true">Atualizar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Informações pessoais alteradas com sucesso.</v-alert>
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