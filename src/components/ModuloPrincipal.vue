<template>
    <v-container>
        <v-layout align-center>
            <h1> TESTE</h1>
            <v-flex xs12>
                <v-img :src="require('../assets/durelli.png')" class="my-3" contain height="200"></v-img>
            </v-flex>
        </v-layout>
        <h1 class="text-md-left">Sobre:</h1>
        <v-layout align-center>
            <v-item-group v-model="window" class="shrink mr-4" mandatory>
                <v-item v-for="n in length" :key="n">
                    <div slot-scope="{ active, toggle }">
                        <v-btn :input-value="active" icon @click="toggle">
                            <v-icon>fiber_manual_record</v-icon>
                        </v-btn>
                    </div>
                </v-item>
            </v-item-group>

            <v-flex>
                <v-window max="10" v-model="window" class="elevation-10" vertical>
                    <v-window-item v-for="n in length" :key="n">
                        <v-card flat class="mx-auto" max-width="800">
                            <v-card-text>
                                <v-layout align-center mb-4>
                                        <strong class="title">Página {{ n }}</strong>
                                </v-layout>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-flex>
        </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      length: 3,
      window: 0
    })
  }
</script>