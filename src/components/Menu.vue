<template>
    <v-navigation-drawer width="240" dark class="grey darken-4" clipped fixed app>
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="@/assets/durelli.png">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Rafael Durelli</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="(opcao, i) in opcoes" :to="opcao.para" :key="i" class="v-list-item">
                <v-list-tile-action>
                    <v-icon>{{ opcao.icone }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-text="opcao.titulo"></v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      opcoes: [
        { titulo: 'Adicionar Aluno', icone: 'how_to_reg', para: '/adicionarAluno' },
        { titulo: 'Editar Info Pessoais', icone: 'settings', para: '/infoPessoais' },
        { titulo: 'Lista de Alunos', icone: 'supervisor_account', para: '/listarAlunos' },
        // ['Adicionar Aluno', 'people_outline'],
        // ['Editar Info Pessoais', 'settings'],
        // ['Lista de Alunos', 'supervisor_account'],
        // ['Editar Info Pessoais', 'settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    })
  }
</script>