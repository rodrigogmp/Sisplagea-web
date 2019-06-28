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
                                <v-text-field prepend-icon="lock" label="Senha" type="password" v-model="senha" required></v-text-field>
                                <span class="caption grey--text text--darken-1">Informe o email e a senha.</span>
                            </v-card-text>
                        </v-window-item>
                    </v-window>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="secundary" outline depressed href="/paginaPrincipal.html">Voltar</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" depressed  @click="login">Logar</v-btn>
                    </v-card-actions>
                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">Usuário ou senha incorreto.</v-alert>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import axios from 'axios'
    export default {
        data: () => ({
            erro: false,
            email: '',
            senha: '',
        
        }),
    
        methods: {
            login() {
                axios ({
                    method: 'post',
                    // url: 'https://sisplagea-api.herokuapp.com/api/v1/auth/sign_in',
                    url: 'http://localhost:3000//api/v1/auth/sign_in',
                    data: {
                        email: this.email,
                        password: this.senha
                    }
                }).then((response) => {
                    if(response.status == 200){
                        localStorage.setItem("data['at']", response.headers["access-token"]);
                        localStorage.setItem("data['c']", response.headers["client"]);
                        localStorage.setItem("data['ct']", response.headers["content-type"]);
                        localStorage.setItem("data['rt']", response.headers["resource-type"]);
                        localStorage.setItem("data['uid']", response.headers["uid"]);
                        window.location.href = '/home.html'
                    }
                }).catch(()=>{
                    this.erro = true
                    setTimeout(this.setErrorFalse, 5000);
                })
            },
            setErrorFalse(){
                this.erro = false
            }
        }
    }
</script>
