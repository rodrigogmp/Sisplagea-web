<template>
    <v-app>
        <Navbar/>
        <v-content>
            <ModuloPrincipal/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    import ModuloPrincipal from '@/components/ModuloPrincipal'
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'

    export default {
        name: 'App',
        components: {
            ModuloPrincipal,
            Navbar,
            Footer
        },
        data () {
            return {
            //
            }
        }
}
</script>