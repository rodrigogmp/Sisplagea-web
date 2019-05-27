<template>
    <v-app>
        <Menu/>
        <Navbar estaLogado/>
        <v-content>
            <ModuloAddAluno/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import Menu from '@/components/Menu.vue'
    import ModuloAddAluno from '@/components/ModuloAddAluno.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            Menu,
            ModuloAddAluno
        }
    }
</script>