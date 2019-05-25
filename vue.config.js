module.exports = {
    pages: {
        'index': {
            entry: './src/pages/paginaPrincipal/main.js',
            template: 'public/index.html',
            title: 'Página Inicial',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'login': {
            entry: './src/pages/login/main.js',
            template: 'public/index.html',
            title: 'Login',
            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
        'contatoProfessor': {
            entry: './src/pages/contatoProfessor/main.js',
            template: 'public/index.html',
            title: 'Contato Professor',
            chunks: ['chunk-vendors', 'chunk-common', 'contatoProfessor']
        },
        'home': {
            entry: './src/pages/home/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        'adicionarAluno': {
            entry: './src/pages/adicionarAluno/main.js',
            template: 'public/index.html',
            title: 'adicionar novo aluno',
            chunks: ['chunk-vendors', 'chunk-common', 'adicionarAluno']
        },
        'infoPessoais': {
            entry: './src/pages/infoPessoais/main.js',
            template: 'public/index.html',
            title: 'Atualizar informações pessoais',
            chunks: ['chunk-vendors', 'chunk-common', 'infoPessoais']
        },
        'listarAlunos': {
            entry: './src/pages/listarAlunos/main.js',
            template: 'public/index.html',
            title: 'Listar alunos',
            chunks: ['chunk-vendors', 'chunk-common', 'listarAlunos']
        },
        'atualizarInfoAluno': {
            entry: './src/pages/atualizarInfoAluno/main.js',
            template: 'public/index.html',
            title: 'Atualizar informações do aluno',
            chunks: ['chunk-vendors', 'chunk-common', 'atualizarInfoAluno']
        },
        'cadastrarPublicacao': {
            entry: './src/pages/cadastrarPublicacao/main.js',
            template: 'public/index.html',
            title: 'Cadastrar nova publicação',
            chunks: ['chunk-vendors', 'chunk-common', 'cadastrarPublicacao']
        },
        'cadastrarDisciplina': {
            entry: './src/pages/cadastrarDisciplina/main.js',
            template: 'public/index.html',
            title: 'Cadastrar nova disciplina',
            chunks: ['chunk-vendors', 'chunk-common', 'cadastrarDisciplina']
        },
        'cadastrarGrupoPesq': {
            entry: './src/pages/cadastrarGrupoPesq/main.js',
            template: 'public/index.html',
            title: 'Cadastrar novo grupo pesquisa',
            chunks: ['chunk-vendors', 'chunk-common', 'cadastrarGrupoPesq']
        },
        'cadastrarProjPesq': {
            entry: './src/pages/cadastrarProjPesq/main.js',
            template: 'public/index.html',
            title: 'Cadastrar novo projeto pesquisa',
            chunks: ['chunk-vendors', 'chunk-common', 'cadastrarProjPesq']
        },
        'atividadesProfessor': {
            entry: './src/pages/atividadesProfessor/main.js',
            template: 'public/index.html',
            title: 'Atividades Realizadas pelo professor',
            chunks: ['chunk-vendors', 'chunk-common', 'atividadesProfessor']
        },
        'espacoDisciplina': {
            entry: './src/pages/espacoDisciplina/main.js',
            template: 'public/index.html',
            title: 'Informações da disciplina',
            chunks: ['chunk-vendors', 'chunk-common', 'espacoDisciplina']
        },
        'buscarAtividades': {
            entry: './src/pages/buscarAtividades/main.js',
            template: 'public/index.html',
            title: 'Buscar atividades do professor',
            chunks: ['chunk-vendors', 'chunk-common', 'buscarAtividades']
        },
        'atualizarDadosAluno': {
            entry: './src/pages/atualizarDadosAluno/main.js',
            template: 'public/index.html',
            title: 'Atualizar dados do aluno',
            chunks: ['chunk-vendors', 'chunk-common', 'atualizarDadosAluno']
        }
    }
}