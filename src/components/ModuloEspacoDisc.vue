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
                        <h3>Ementa:</h3>
                        <div v-if="disciplina.summary.url != null">
                            <a href=""><v-icon>picture_as_pdf</v-icon></a>
                        </div>
                        <div v-else>
                            <input type="file" required>
                        </div>
                    </v-layout>
                    <v-card v-for="material in materiais" v-bind:key="material.id" min-height="30" hover>
                        <v-layout align-center>
                            <v-flex xs11>
                                <v-card-text> 
                                    {{ material.name }}
                                </v-card-text>
                            </v-flex>
                            <v-layout align-content-center>
                                <v-flex xs1>
                                    <v-card-actions>
                                        <v-btn icon flat :href="url_base+material.file_to_upload.url" target="_blank">
                                            <v-icon> picture_as_pdf</v-icon>
                                        </v-btn>
                                        <v-btn icon flat @click="removerMaterial(material)">
                                            <v-icon> remove_circle </v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                            </v-layout>
                        </v-layout>
                    </v-card>                    
                    <v-divider></v-divider>
                    <v-form ref="form">
                        <v-layout align-content-center>
                            <v-flex xs6>
                                <v-text-field v-model="name_file" label="Nome do arquivo" required></v-text-field>
                            </v-flex>
                            <v-flex xs4> <input type="file" id="file" ref="file" @change="onFileChange" required>
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

var configFile = {
    headers: {'access-token': localStorage.getItem("data['at']"), 'client': localStorage.getItem("data['c']"), 'content-type': 'multipart/form-data', 'uid': localStorage.getItem("data['uid']")}
}

export default {
    data: () => ({
        disciplina: null,
        materiais: [],
        name_file: '',
        file: null,
        url_base: 'https://sisplagea-api.herokuapp.com'
    }),

    methods: {
        onFileChange(file){            
            var files = file.target.files            
            if(files.length >= 1){
                this.file = this.$refs.file.files[0]; 
            } else {
                this.file = null
            }
        },

        adicionarMaterial(){
            // console.log("File " + this.file + ' nameFile ' + this.name_file)

            //https://stackoverflow.com/questions/52645358/vuetify-file-uploads
            let formData = new FormData()
            formData.append('subject_id', this.disciplina.id)
            formData.append('file_to_upload', this.file, this.file.name)
            formData.append('name', this.name_file)
            // console.log(this.name_file)           
            //console.log(configFile.headers)
            axios({
                method: 'post',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/attachments.json',
                data: formData,
                headers: configFile.headers,
            }).then((response) => {
                this.materiais.push(response.data)
                this.$refs.form.reset();
                this.file = null          
                // document.location.reload()
            }).catch(error => {
                alert("Erro ao adicionar " + error)
            })
        },
       
        removerMaterial(material){
            var confirmacao = confirm("Deseja mesmo remover esse material")
            if(confirmacao) {
                console.log("Teste" + material.id)
                axios({
                    method: 'delete',
                    url: 'https://sisplagea-api.herokuapp.com/api/v1/attachments/'+material.id+'.json',
                    headers: config.headers,
                }).then((response) => {
                    alert("Removido com sucesso")                    
                    // document.location.reload()
                    this.materiais.splice(material)
                }).catch(error => {
                    alert("Erro ao remover" + error)
                })
            }
        },
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
            // console.log(this.materiais)
        }).catch(() => {
            alert("Erro ao buscar os materiais")
        });
    },
}
</script>

