<template>
    <v-app>
        <Navbar/>
        <v-content>
            <ModuloContato/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import ModuloContato from '@/components/ModuloContato.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            ModuloContato
        }
    }
</script>
