<template>
    <v-navigation-drawer width="250" dark class="grey darken-4" mobile-break-point="700" clipped fixed app>
        <v-toolbar flat class="transparent">
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar color="white">
                        <img contain src="@/assets/durelli.png">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="title">Rafael Durelli</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list two-line>
            <v-divider></v-divider>
            <v-list-tile v-for="(opcao, i) in opcoes" :key="i" :href="opcao.para" class="v-list-item">
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
                <v-list-tile v-for="(cadastro, i) in cadastros" :key="i" :href="cadastro.para" class="v-list-item">
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
        { titulo: 'Home', icone: 'home', para: '/home.html' },
        { titulo: 'Adicionar Aluno', icone: 'person_add', para: '/adicionarAluno.html' },
        { titulo: 'Lista de Alunos', icone: 'supervisor_account', para: '/listarAlunos.html' },
        { titulo: 'Buscar atividades', icone: 'search', para: '/buscarAtividades.html' },
        { titulo: 'Editar Info Pessoais', icone: 'settings', para: '/infoPessoais.html' }
      ],
      cadastros: [
        { titulo: 'Publicação', icone: 'import_contacts', para: '/cadastrarPublicacao.html' },
        { titulo: 'Grupo pesq.', icone: 'group_add', para: '/cadastrarGrupoPesq.html' },
        { titulo: 'Projeto pesq.', icone: 'attachment', para: '/cadastrarProjPesq.html' },
        { titulo: 'Disciplina', icone: 'border_color', para: '/cadastrarDisciplina.html' }
      ]
    })
  }
</script>