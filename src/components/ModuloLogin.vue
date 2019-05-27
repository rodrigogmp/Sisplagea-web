<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="mx-auto elevation-5" max-width="500">
                    <v-card-title class="title font-weight-regular justify-space-between">
                        <span>{{ tituloAtual }}</span>
                        <v-avatar color="primary lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
                    </v-card-title>
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-card-text>
                                <v-text-field prepend-icon="mail" label="Email" type="text"></v-text-field>
                                <span class="caption grey--text text--darken-1">Informe o email cadastrado.</span>
                            </v-card-text>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-card-text>
                                <v-text-field prepend-icon="lock" label="Senha" type="password"></v-text-field>
                                <span class="caption grey--text text--darken-1">Informe a senha da sua conta.</span>
                            </v-card-text>
                        </v-window-item>
                    </v-window>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn :disabled="step === 1" flat @click="step--">Voltar</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn v-if="step === 2" color="primary" depressed href="/home.html">Próximo</v-btn>
                        <v-btn v-else color="primary" depressed @click="step++">Próximo</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            step: 1
        }),
        computed: {
            tituloAtual () {
                switch (this.step) {
                    case 1: return 'Entrar'
                    case 2: return 'Olá Durelli'
                    default: return 'ERRO'
                }
            }
        }
    }
</script>
