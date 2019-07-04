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
        'espacoDisciplina': {
            entry: './src/pages/espacoDisciplina/main.js',
            template: 'public/index.html',
            title: 'Informações da disciplina',
            chunks: ['chunk-vendors', 'chunk-common', 'espacoDisciplina']
        },
        'listarPublicacoes': {
            entry: './src/pages/listarPublicacoes/main.js',
            template: 'public/index.html',
            title: 'Listar Publicações',
            chunks: ['chunk-vendors', 'chunk-common', 'listarPublicacoes']
        },
        'listarGruposPesq': {
            entry: './src/pages/listarGruposPesq/main.js',
            template: 'public/index.html',
            title: 'Listar Publicações',
            chunks: ['chunk-vendors', 'chunk-common', 'listarGruposPesq']
        },
        'listarProjPesq': {
            entry: './src/pages/listarProjPesq/main.js',
            template: 'public/index.html',
            title: 'Listar Projetos de Pesquisa',
            chunks: ['chunk-vendors', 'chunk-common', 'listarProjPesq']
        }, 
        'listarDisciplinas': {
            entry: './src/pages/listarDisciplinas/main.js',
            template: 'public/index.html',
            title: 'Listar Publicações',
            chunks: ['chunk-vendors', 'chunk-common', 'listarDisciplinas']
        },
        'mensagens': {
            entry: './src/pages/mensagens/main.js',
            template: 'public/index.html',
            title: 'Mensagens',
            chunk: ['chunk-vendors', 'chunk-common', 'mensagens']
        }
    }
}