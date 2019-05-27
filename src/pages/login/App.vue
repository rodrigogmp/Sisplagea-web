<template>
    <v-app>
        <Navbar/>
        <v-content>
            <ModuloLogin/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import ModuloLogin from '@/components/ModuloLogin.vue'
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            ModuloLogin
        }
    }
</script>