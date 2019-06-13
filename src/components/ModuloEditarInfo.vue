<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Editar informações</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="254" label="Nome" required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field v-model="formacao" :error-messages="formacaoErrors" label="Formacao" required
                    @input="$v.formacao.$touch()"
                    @blur="$v.formacao.$touch()"
                    ></v-text-field>
                    <v-text-field v-model="departamento" :error-messages="departamentoErrors" label="Departamento" required
                    @input="$v.departamento.$touch()"
                    @blur="$v.departamento.$touch()"
                    ></v-text-field>
                    <v-text-field v-model="sala" :error-messages="salaErrors" label="Sala" required
                    @input="$v.sala.$touch()"
                    @blur="$v.sala.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Sobre" v-model="sobre" :error-messages="sobre"></v-textarea>
                    <v-btn @click="submit" outline color="indigo" :right="true">Atualizar</v-btn>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>