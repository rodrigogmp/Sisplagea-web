<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
            <h1>Cadastrar Projeto de Pesquisa</h1>
            <form>
                <v-text-field v-model="nome" :error-messages="nomeErrors" :counter="254" label="Nome do projeto" required
                @input="$v.nome.$touch()"
                @blur="$v.nome.$touch()"
                ></v-text-field>
                <v-textarea name="input-7-1" label="Descrição" v-model="descricao" :error-messages="descricao" 
                required></v-textarea>
                //Repensar adicionar pesquisador <br>
                <v-btn @click="submit" outline color="indigo" :right="true">Cadastrar</v-btn>
            </form>
        </v-flex>
    </v-layout>
</template>