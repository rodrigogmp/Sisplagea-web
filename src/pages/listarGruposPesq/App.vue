<template>
    <v-app>
        <Menu/>
        <Navbar estaLogado/>
        <v-content>
            <ModuloListarGruposPesq/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import Menu from '@/components/Menu.vue'
    import ModuloListarGruposPesq from '@/components/ModuloListarGruposPesq.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            Menu,
            ModuloListarGruposPesq
        }
    }
</script>