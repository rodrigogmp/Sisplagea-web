<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Adicionar Aluno</h1>
                <v-divider></v-divider>
                <form>
                    <v-text-field v-model="name" label="Nome" required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-flex xs3 sm3 md3 lg3>
                        <v-text-field v-model="matricula" label="Matricula" required
                        @input="$v.matricula.$touch()"
                        @blur="$v.matricula.$touch()"
                        ></v-text-field>
                    </v-flex>
                    <v-text-field v-model="email" label="E-mail" required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-radio-group v-model="radioGroup" label="Categoria:">
                        <v-radio label="Iniciação Cientifica" value="scientific_research"></v-radio>
                        <v-radio label="Mestrado" value="masters_degree"></v-radio>
                        <v-radio label="Doutorado" value="doctorate_degree"></v-radio>
                        <v-radio label="Pós-Doutorado" value="post_doctoral"></v-radio>
                    </v-radio-group>
                    <v-text-field v-model="curriculo"
                    label="Adicionar referência para o curriculo lattes:" required
                    @input="$v.curriculo.$touch()"
                    @blur="$v.curriculo.$touch()"
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Adicionar informações relevantes:" 
                    v-model="informacoes" required></v-textarea>
                    <picture-input 
                        ref="pictureInput" 
                        @change="onChange"
                        width="150" 
                        height="150" 
                        margin="16"
                        accept="image/jpeg,image/png" 
                        size="5"
                        radius="50" 
                        buttonClass="btn"
                        removeButtonClass="btn-primary button"
                        :plain="false"
                        :removable="true"
                        :customStrings="{
                            upload: '<h1>Bummer!</h1>',
                            drag: 'Drag a 😺 GIF or GTFO',
                        }">
                    </picture-input>
                    <!-- <v-btn @click="alerta = !alerta" outline color="info" :right="true">Adicionar</v-btn> -->
                    <v-btn @click="cadastrarAluno" outline color="info" :right="true">Adicionar</v-btn>
                </form>
                <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">Novo aluno cadastrado com sucesso.</v-alert>
                <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">Erro ao cadastrar aluno.</v-alert>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import PictureInput from 'vue-picture-input';
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
}

export default {
    data () {
        return {
            alerta: false,
            erro: false,
            name: '',
            radioGroup: '',
            email: '',
            curriculo: '',
            informacoes: '',
            matricula: '',
        }
    },
    components: {
        PictureInput
    },
    methods : {
        cadastrarAluno() {
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/students.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    category: this.radioGroup,
                    email: this.email,
                    registration: this.matricula,
                    lattes_link: this.curriculo,
                    relevant_informations: this.informacoes,
                    //photo: this.image
                }
            }).then(() => {
                this.alerta = !this.alerta

                this.name = '',
                this.radioGroup = '',
                this.email = '',
                this.matricula = '',
                this.curriculo = '',
                this.informacoes = '',
                
                setTimeout(this.setAlertFalse, 5000);

            }).catch(()=>{
                this.erro = true
            })
        },
        setAlertFalse(){
            this.alerta = false
        },
        onChange (image) {
            //console.log('New picture selected!')
            if (image) {
                //console.log('Picture loaded.')
                this.image = image
                //console.log(image)
            } else {
                //console.log('FileReader API not supported: use the <form>, Luke!')
            }
        }
        
    }
}
</script>