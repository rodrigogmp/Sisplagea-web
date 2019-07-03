<template>
    <v-container fluid fill-height>
        <v-layout>
            <v-flex xs12>                
                <h1>Espaço da Disciplina</h1>
                <v-divider></v-divider>                            
                <v-container fluid grid-list-md>
                    <h3>Nome: {{ disciplina.name }}</h3>
                    <v-layout align-start row>
                        <v-flex xs3>
                            <h3>Código: {{ disciplina.code }} </h3>
                        </v-flex>
                        <v-flex xs9>
                            <h3>Turma: {{ disciplina.category == 'graduate' ? "Graduação" : "Pós-Graduação"}} </h3>
                        </v-flex>

                    </v-layout>
                    
                    <v-layout align-center class="mb-5">
                        <v-flex xs1>                                                      
                            <h3>Ementa:</h3>
                        </v-flex>
                        <div v-if="disciplina.summary.url != null">
                             <v-btn icon flat :href="url_base+disciplina.summary.url" target="_blank"><v-icon>picture_as_pdf</v-icon></v-btn>                            
                            <input type="file" id="file" ref="ementa" @change="onEmentaChange" required> 
                            <v-btn flat icon @click="adicionarEmenta" :loading="loading1">
                                <v-icon>cloud_upload</v-icon>
                            </v-btn>                            
                        </div>
                        <div v-else>                            
                            <input type="file" id="file" ref="ementa" @change="onEmentaChange" required> 
                            <v-btn flat icon @click="adicionarEmenta" :loading="loading1">
                                <v-icon>add_circle</v-icon>
                            </v-btn>                            
                        </div>
                    </v-layout>
                    <v-card v-for="material in materiais" v-bind:key="material.id" min-height="30" hover class="mt-2">
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
                    <v-form ref="formulario" class="mt-5">
                        <v-layout align-center justify-space-around>
                            <v-flex xs8>
                                <v-text-field v-model="name_file" label="Nome do arquivo" required></v-text-field>
                            </v-flex>
                            <v-flex> <input type="file" id="file" ref="file" @change="onFileChange" required>
                            </v-flex>                        
                            <v-flex><v-btn @click="adicionarMaterial" outline color="info" :loading="loading2">Adicionar</v-btn></v-flex>
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
        ementa: null,
        materiais: [],
        name_file: '',
        file: null,
        url_base: 'https://sisplagea-api.herokuapp.com',
        loading1: false,
        loading2: false,
        uploadReady: true
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

        onEmentaChange(file){
            var ementa = file.target.files
            if(ementa.length == 1){
                this.ementa = this.$refs.ementa.files[0]
            } else {
                this.ementa = null
            }
        },

        adicionarMaterial(){
            if(this.file != null && this.name_file.length > 0){
                this.loading2 = true;
                //https://stackoverflow.com/questions/52645358/vuetify-file-uploads
                let formData = new FormData()
                formData.append('subject_id', this.disciplina.id)
                formData.append('file_to_upload', this.file, this.file.name)
                formData.append('name', this.name_file)
                axios({
                    method: 'post',
                    url: 'https://sisplagea-api.herokuapp.com/api/v1/attachments.json',
                    data: formData,
                    headers: configFile.headers,
                }).then((response) => {
                    this.materiais.push(response.data)
                    this.$refs.formulario.reset()                    
                    this.loading2 = false;
                    
                    const input = this.$refs.file
                    input.type = 'text'
                    input.type = 'file'


                    // document.location.reload()
                }).catch(error => {
                    alert("Erro ao adicionar " + error)
                    this.loading2 = false;
                })
            }
        },
       
        removerMaterial(material){
            var confirmacao = confirm("Deseja mesmo remover esse material")
            if(confirmacao) {
                axios({
                    method: 'delete',
                    url: 'https://sisplagea-api.herokuapp.com/api/v1/attachments/'+material.id+'.json',
                    headers: config.headers,
                }).then((response) => {                                     
                    this.materiais.splice(this.materiais.indexOf(material), 1);
                }).catch(error => {
                    alert("Erro ao remover" + error)
                })
            }
        },

        adicionarEmenta(){
            if(this.ementa != null){
                this.loading1 = true;
                let formData = new FormData()
                formData.append('summary', this.ementa)            
                axios({
                    method: 'put',
                    url: 'https://sisplagea-api.herokuapp.com/api/v1/subjects/'+ this.disciplina.id +'.json',
                    data: formData,
                    headers: configFile.headers,
                }).then((response) => {
                    this.disciplina = response.data
                    // document.location.reload()
                    this.loading1 = false

                    const input = this.$refs.ementa
                    input.type = 'text'
                    input.type = 'file'

                }).catch(error => {
                    alert("Erro ao adicionar ementa " + error)
                    this.loading1 = false
                })
            }
        },

        reset() {
            const input = this.$refs.file
            //input.type = 'text'
            input.type = 'file'
        }
    },

    mounted() {        
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/subjects/' + localStorage.getItem('idDisciplina') + '.json',
            headers: config.headers,
        }).then((response) => {
            this.disciplina = response.data
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
        });
    },
}
</script>

