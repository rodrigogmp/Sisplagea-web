<template>
    <v-app>
        <Menu/>
        <Navbar estaLogado/>
        <v-content>
            <ModuloCadastrarProj/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
    var config = {
        headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
    }
    if(config.headers.client == null){
        window.location.href = '/login.html'
    }
    
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
    import Menu from '@/components/Menu.vue'
    import ModuloCadastrarProj from '@/components/ModuloCadastrarProj.vue'

    export default {
        name: 'app',
        components: {
            Navbar,
            Footer,
            Menu,
            ModuloCadastrarProj
        }
    }
</script>
