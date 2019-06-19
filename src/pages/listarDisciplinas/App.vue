<template>
    <v-app>
        <Menu/>
        <Navbar estaLogado/>
        <v-content>
            <ModuloListarDisciplinas/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import Menu from '@/components/Menu.vue'
    import ModuloListarDisciplinas from '@/components/ModuloListarDisciplinas.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            Menu,
            ModuloListarDisciplinas
        }
    }
</script>