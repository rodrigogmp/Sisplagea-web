<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="mx-auto elevation-5" max-width="500">
                    <v-card-title class="title font-weight-regular justify-space-between">
                        <span>Olá Durelli</span>
                    </v-card-title>
                    <v-window>
                        <v-window-item>
                            <v-card-text>
                                <v-text-field prepend-icon="mail" label="Email" type="text" v-model="email" required></v-text-field>
                                <v-text-field prepend-icon="lock" label="Senha" type="password" v-modal="senha" required></v-text-field>
                                <span class="caption grey--text text--darken-1">Informe o email e a senha.</span>
                            </v-card-text>
                        </v-window-item>
                    </v-window>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="secundary" outline depressed href="/paginaPrincipal.html">Voltar</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" depressed href="/home.html">Logar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            email: '',
            senha: ''
        })
    }
</script>
