<template>
    <v-app>
        <Menu/>
        <Navbar estaLogado/>
        <v-content>
            <ModuloListarPublicacoes/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import Menu from '@/components/Menu.vue'
    import ModuloListarPublicacoes from '@/components/ModuloListarPublicacoes.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            Menu,
            ModuloListarPublicacoes
        }
    }
</script>