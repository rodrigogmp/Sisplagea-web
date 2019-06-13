<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center fill-height column>
                <v-flex xs12 sm8 md4>
                    <v-card flat class="mx-auto" min-width="800" elevation="5">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Entre em contato com o professor</div>
                            </div>
                        </v-card-title>
                        <v-container fluid grid-list-lg>
                            <v-layout column>
                                <v-flex>
                                    <form>
                                        <v-text-field v-model="email" :error-messages="emailErrors" label="Seu email" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                                        <v-text-field v-model="assunto" :error-messages="assuntoErrors" :counter="80" label="Assunto" required @input="$v.assunto.$touch()" @blur="$v.assunto.$touch()"></v-text-field>
                                        <v-textarea name="input-7-1" label="Mensagem" v-model="informacoes" :counter="540" :error-messages="informacoes" required></v-textarea>
                                        <input type="file"/>
                                    </form>
                                </v-flex>
                            </v-layout>
                            <v-layout justify-center>
                                <v-card-actions>
                                    <v-btn @click="submit" outline color="info" :right="true">contatar</v-btn>
                                </v-card-actions>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>