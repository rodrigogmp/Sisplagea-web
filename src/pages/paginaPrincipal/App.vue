<template>
    <v-app>
        <Navbar estaLogado/>

        <v-content>
            <HelloWorld/>
        </v-content>

        <Footer/>
    </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components: {
        HelloWorld,
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