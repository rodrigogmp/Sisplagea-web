<template>
    <v-container fluid>
        <v-layout align-center justify-center fill-height row>
            <v-flex xs2 offset-xs1>
                <strong class="title" wrap>Nome:</strong>
                <p>Lorem ipsum dolor sit amet consectetus</p>
                <strong class="title" wrap>Formação:</strong>
                <p>Lorem ipsum dolor sit amet consectetus Lorem ipsum</p>
                <strong class="title" wrap>Departamento:</strong>
                <p>DCC</p>
                <strong class="title" wrap>Sala:</strong>
                <p>04</p>
            </v-flex>
            <v-flex xs4 shrink>
                <v-img :src="require('@/assets/durelli.png')" contain height="280"></v-img>
            </v-flex>
        </v-layout>
        <br />
        <v-layout align-center justify-center column>
            <v-flex>
                <v-card flat class="mx-auto" max-width="800" elevation="5">
                    <v-card-text>
                        <v-layout align-center mb-4>
                                <strong class="title">Sobre:</strong>
                        </v-layout>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-btn large outline color="info" href="/contatoProfessor.html">Contatar o professor</v-btn>
            </v-flex>
        </v-layout>
  </v-container>
</template>