<template>
    <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
            <h1>Cadastrar Publicações</h1>
            <v-divider></v-divider>
            <form>
                <v-text-field v-model="titulo" :error-messages="tituloErrors" :counter="254" label="Título" required
                @input="$v.titulo.$touch()"
                @blur="$v.titulo.$touch()"
                ></v-text-field>
                <v-text-field v-model="journal" :error-messages="journalErrors" label="Journal" required
                @input="$v.journal.$touch()"
                @blur="$v.journal.$touch()"
                ></v-text-field>
                <v-radio-group v-model="radioGroup" label="Tipo:">
                    <v-radio label="Conferência" value="1"></v-radio>
                    <v-radio label="Resumo" value="2"></v-radio>
                    <v-radio label="Periódico" value="3"></v-radio>
                </v-radio-group>
                <v-layout row wrap>
                    <v-flex xs3 sm3 md2 lg2>
                        <v-text-field v-model="anoPublicacao" :error-messages="anoPublicacaoErrors" label="Ano" required
                        @input="$v.anoPublicacao.$touch()"
                        @blur="$v.anoPublicacao.$touch()"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs3 sm3 md2 lg2>
                        <v-text-field v-model="volume" :error-messages="volumeErrors" label="Volume" required
                        @input="$v.volume.$touch()"
                        @blur="$v.volume.$touch()"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs3 sm3 md2 lg2>
                        <v-text-field v-model="paginas" :error-messages="paginasErrors" label="Páginas" required
                        @input="$v.paginas.$touch()"
                        @blur="$v.paginas.$touch()"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-textarea name="input-7-1" label="Autores" v-model="autores" :error-messages="autores" 
                required></v-textarea>
                //Procurar como fazer o espaço de upload de arquivos <br>
                <v-btn @click="submit" outline color="indigo" :right="true">Cadastrar</v-btn>
            </form>
        </v-flex>
    </v-layout>
</template>