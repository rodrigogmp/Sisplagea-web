<template>
    <v-navigation-drawer width="280" dark class="grey darken-4" clipped fixed app>
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
            <v-list-group sub-group no-action>
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>Cadastrar</v-list-tile-title>
                    </v-list-tile>
                </template>
                <v-list-tile v-for="(cadastro, i) in cadastrar" :to="cadastro.para" :key="i" class="v-list-item">
                    <v-list-tile-title v-text="cadastro.titulo"></v-list-tile-title>
                    <v-list-tile-action>
                        <v-icon>{{ cadastro.icone }}</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      opcoes: [
        { titulo: 'Adicionar Aluno', icone: 'person_add', para: '/adicionarAluno' },
        { titulo: 'Editar Info Pessoais', icone: 'settings', para: '/infoPessoais' },
        { titulo: 'Lista de Alunos', icone: 'supervisor_account', para: '/listarAlunos' },
        { titulo: 'Buscar atividades', icone: 'zoom_in', para: '/listarAlunos' },
      ],
      cadastrar: [
        { titulo: 'Publicação', icone: 'import_contacts', para: '/adicionarAluno' },
        { titulo: 'disciplina', icone: 'border_color', para: '/adicionarAluno' },
        { titulo: 'grupo pesq.', icone: 'group_add', para: '/adicionarAluno' },
        { titulo: 'projeto pesq.', icone: 'attachment', para: '/adicionarAluno' },
      ]
    })
  }
</script>