<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12>                
                <h1>Espaço da Disciplina</h1>
                <v-divider></v-divider>                            
                <v-container fluid grid-list-md>
                    <h3>Nome: {{ disciplina.name }}</h3>
                    <v-layout row wrap>
                        <h3>Código: {{ disciplina.code }} </h3>                
                        <v-radio-group label="Turma" readonly v-model="disciplina.category">
                            <v-radio label="Graduação" value="graduate"></v-radio>
                            <v-radio label="Pós-Graduação" value="postgraduate"></v-radio>
                        </v-radio-group>
                    </v-layout>
                    <v-layout row wrap>                                                       
                        <h3>Ementa:   </h3>
                        <div v-if="disciplina.summary.url != null">
                            <a href=""><v-icon>picture_as_pdf</v-icon></a>
                        </div>
                        <div v-else>
                            <h3>Nao tem arquivo</h3>
                        </div>
                    </v-layout>         
                    <v-divider></v-divider>
                    <v-form>
                        <v-layout align-content-center>
                            <v-flex xs6>
                                <v-text-field v-model="class_location" label="Nome do arquivo" required></v-text-field>
                            </v-flex>
                            <v-flex xs4> <input type="file" required>
                            <b-form-file v-model="file"></b-form-file>
                            </v-flex>
                            <v-flex xs2> <v-btn @click="adicionarMaterial" outline color="info" :right="true">Adicionar</v-btn> </v-flex>
                        </v-layout>
                    </v-form>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
var config = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': localStorage.getItem("data['ct']"), 'uid': localStorage.getItem("data['uid']")}
}

export default {
    data: () => ({
        disciplina: null,
        materiais: [],
        name_file: '',
        file: null
    }),

    methods: {
        onFileChange(file){
            if(file.dataTrasfer.files){
                this.file = file.dataTrasfer.files
            } else {
                this.file = null
            }
        },

        adicionarMaterial(){
            //https://stackoverflow.com/questions/52645358/vuetify-file-uploads
            let formData = new FormData()
            formData.append('subject_id', this.disciplina.id)
            formData.append('file_to_upload', this.file)
            formData.append('name', this.name_file)
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/attachments.json',
                data: formData,
                headers: config.headers,
            }).then((response) => {
                console.log("Deu Certo")
                document.location.reload()
            }).catch(error => {
                alert("Deu caca " + error)
            })
        }
    },

    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/subjects/' + localStorage.getItem('idDisciplina') + '.json',
            headers: config.headers,
        }).then((response) => {
            this.disciplina = response.data
            //console.log(this.disciplina)
        }).catch (() => {
            alert('erro')
        });

        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/subjects/' + localStorage.getItem('idDisciplina') + '/materials.json',
            headers: config.headers,
        }).then((response) => {
            this.materiais = response.data.materials
        }).catch(() => {
            alert("Erro ao buscar os materiais")
        })
    },
}
</script>

