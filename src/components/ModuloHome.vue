<template>
    <v-container fluid>
        <v-layout justify-center align-center wrap>
            <v-flex xs12 sm12 md12 lg6>
                <v-card flat class="mx-auto" max-width="800" elevation="2">
                    <v-card-text>
                        <v-layout align-center mb-4>
                                <strong class="title">Olá Durelli,</strong>
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
            <v-flex xs12 sm12 md12 lg6>
                <v-layout wrap>
                    <v-flex xs12 sm6 class="my-2 px-1">
                        <v-date-picker color="light-blue darken-3" ref="picker" full-width v-model="data" :picker-date.sync="pickerDate"></v-date-picker>
                    </v-flex>
                    <v-flex class="my-2 px-1">
                        <div class="title">Notícias do mês ({{ pickerDate || 'Mude o mês...' }})</div>
                        <div class="subheading">Troque o mês para ver outras notícias</div>
                        <ul class="ma-3">
                            <li v-for="note in notes" :key="note">{{ note }}</li>
                        </ul>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      data: new Date().toISOString().substr(0, 10),
      pickerDate: null,
      notes: [],
      allNotes: [
        'bolsa do aluno ABC termina dia 14',
        'Um ano do cadastro da publicação XYZ',
        '3 novas mensagens foram enviadas por alunos',
        'XD',
        'fdvdfhvb bf hb fg hb fdg hb dfg hn dfghbfghvhd'
      ]
    }),
    watch: {
      pickerDate () {
        this.notes = [
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)]
        ].filter((value, index, self) => self.indexOf(value) === index)
      }
    }
  }
</script>