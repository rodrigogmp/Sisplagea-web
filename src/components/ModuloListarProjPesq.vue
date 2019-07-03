<template>
    <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <h1>Projetos cadastrados</h1>
                <v-divider></v-divider>
                <v-container fluid grid-list-md>
                    <v-data-iterator :items="projetos" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" column>
                        <template v-slot:item="props">
                            <v-layout row justify-center>
                                <v-flex>
                                    <v-card>
                                        <v-list three-line>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-title><h3>Nome: {{ props.item.name }}</h3></v-list-tile-title>
                                                    <v-list-tile-title><strong>Descrição:</strong> {{ props.item.abstract }}</v-list-tile-title>
                                                </v-list-tile-content>
                                                <v-list-content>
                                                    <v-list-tile-action class="align-end">
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn flat v-on="on" @click="dialog = true, buscarProjeto(props.item.id), listarParticipantes(props.item.id)"><v-icon color="green lighten-1">info</v-icon>Info Projeto</v-btn>
                                                            </template>
                                                            <span>Exibir/Editar Informações sobre o projeto</span>
                                                        </v-tooltip>
                                                    </v-list-tile-action>
                                                </v-list-content>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-dialog v-model="dialog" persistent max-width="680px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Projeto: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Descrição" v-bind:value="abstract" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs6 v-if="dialog5 == false">
                                                    <v-combobox
                                                        v-model="select"
                                                        :items="participantes"
                                                        item-text="name"
                                                        item-value="id"
                                                        label="Alunos vinculados ao projeto"
                                                        hint="Selecione e clique em Desvincular, caso queira desvincular um aluno."
                                                    ></v-combobox>
                                                </v-flex>
                                                <v-flex xs6 v-if="select.id != undefined && dialog5 == false">
                                                    <v-btn color="info" outline flat @click="desvincularAluno">Desvincular</v-btn>
                                                    <v-btn outline flat @click="dialog3 = true, dialog = false">Abrir Espaço</v-btn>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <v-flex xs12>
                                                    <v-btn outline flat @click="dialog= false,dialog2 = true">Editar Projeto</v-btn>
                                                    <v-btn color="error" outline flat @click="deletarProjeto">Deletar Projeto</v-btn>
                                                    <v-btn color="info" outline flat @click="select = '', dialog5 = true">Vincular</v-btn>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">{{ alerta_msg }}.</v-alert>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                                <div class="flex xs12" v-if="dialog5 == true">
                                                    <v-card>
                                                        <v-card-text>
                                                            <v-container grid-list-md>
                                                                <v-layout wrap>
                                                                    <v-flex xs10>
                                                                        <v-combobox
                                                                            v-model="select"
                                                                            :items="alunos"
                                                                            item-text="name"
                                                                            item-value="id"
                                                                            label="Vincular aluno ao projeto"
                                                                        ></v-combobox>
                                                                    </v-flex>
                                                                    <v-flex xs12>
                                                                        <v-layout row wrap>
                                                                            <v-flex xs3>
                                                                                <v-text-field label="Ano de início" v-model="select.start_year"></v-text-field>
                                                                            </v-flex>
                                                                            <v-flex xs3>
                                                                                <v-text-field label="Ano de fim" v-model="select.end_year"></v-text-field>
                                                                            </v-flex>
                                                                        </v-layout>
                                                                    </v-flex>
                                                                </v-layout>
                                                            </v-container>
                                                        </v-card-text>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn outline flat @click="dialog5 = false, dialog = true, select = '', listarParticipantes(props.item.id)">Cancelar</v-btn>
                                                            <v-btn color="info" outline flat @click="vincularAluno">Vincular</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </div>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog = false, select = ''">Cancelar</v-btn>
                                        <v-btn color="info" outline flat @click="dialog = false">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialog2" persistent max-width="680px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Projeto: {{ name }} </span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="name" disabled></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Descrição" v-bind:value="abstract" disabled></v-text-field>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                                <!-- <v-btn outline flat @click="dialog= false,dialog2 = true" :right="true">Editar</v-btn> -->
                                                <v-flex xs12>
                                                    <v-subheader >Área para editar projeto</v-subheader>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-model="name"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Descrição" v-model="abstract"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">{{ alerta_msg }}.</v-alert>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog2 = false, dialog = true, select = ''">Cancelar</v-btn>
                                        <v-btn color="info" outline flat 
                                        @click="atualizarProjeto(props.item)">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialog3" persistent max-width="680px">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Espaço do aluno vinculado</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="select.name" disabled></v-text-field>
                                                </v-flex>
                                                <v-layout row wrap>
                                                    <v-flex xs3>
                                                        <v-text-field label="Ano de início" v-bind:value="select.start_year" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-text-field label="Ano de fim" v-bind:value="select.end_year" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-btn v-if="select.file_url != null" icon flat :href="url_base+select.file_url" target="_blank">
                                                            <v-icon> picture_as_pdf</v-icon>
                                                        </v-btn>
                                                    </v-flex>
                                                    <v-flex xs12>
                                                        <v-btn outline flat @click="dialog3= false,dialog4 = true">Editar aluno vinculado</v-btn>
                                                    </v-flex>
                                                </v-layout>
                                                <v-spacer></v-spacer>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog3 = false, dialog = true, select = ''">Cancelar</v-btn>
                                        <v-btn color="info" outline flat 
                                        @click="atualizarProjeto(props.item), dialog2 = false, dialog= false">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        <v-dialog v-model="dialog4" persistent max-width="680px">
                               <v-card>
                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="select.name" disabled></v-text-field>
                                                </v-flex>
                                                <v-layout row wrap>
                                                    <v-flex xs3>
                                                        <v-text-field label="Ano de início" v-bind:value="select.start_year" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-text-field label="Ano de fim" v-bind:value="select.end_year" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-btn v-if="select.file_url != null" icon flat :href="url_base+select.file_url" target="_blank">
                                                            <v-icon> picture_as_pdf</v-icon>
                                                        </v-btn>
                                                    </v-flex>
                                                </v-layout>
                                                <v-spacer></v-spacer>
                                                <v-flex xs12>
                                                    <v-subheader >Área para editar informações do aluno vinculado</v-subheader>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field label="Nome" v-bind:value="select.name" disabled></v-text-field>
                                                </v-flex>
                                                <v-layout row wrap>
                                                    <v-flex xs3>
                                                        <v-text-field label="Ano de início" v-model="select.start_year"></v-text-field>
                                                    </v-flex>
                                                    <v-flex xs3>
                                                        <v-text-field label="Ano de fim" v-model="select.end_year"></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                                <v-flex xs12>
                                                    <v-subheader >Adicionar ou atualizar documento</v-subheader>
                                                    <input class="mt-4" type="file" id="file" ref="file" @change="onFileChange" required>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-alert :value="erro" type="error" transition="scale-transition" dismissible @click="erro = false">{{ erro_msg }}</v-alert>
                                                    <v-alert :value="alerta" type="success" transition="scale-transition" dismissible @click="alerta = false">{{ alerta_msg }}.</v-alert>
                                                </v-flex>
                                                <v-spacer></v-spacer>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outline flat @click="dialog4 = false, dialog3 = true">Cancelar</v-btn>
                                        <v-btn color="info" outline flat @click="atualizarAlunoVinculado(props.item.id)" :loading="loading">Salvar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </template>
                    </v-data-iterator>
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
        alerta: false,
        alerta_msg: '',
        erro: false,
        erro_msg: '',
        file: null,
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        loading: false,
        url_base: 'https://sisplagea-api.herokuapp.com',
        rowsPerPageItems: [4, 8, 12],
        pagination: {
            rowsPerPage: 4,
            sortBy: 'name'
        },
        projetos: [{
            id: '',
            name: '',
            abstract: '',

        }],
        select: '',
        alunos: [{
            id: '',
            name: '',

        }],
        participantes: [{
            id: '',
            student_id: '',
            name: '',
            start_year: '',
            end_year: '',
            file_url: null
        }]
    }),

    props: {
        id: Number,
        name: String,
        abstract: String
    },

    methods : {
        atualizarProjeto() {
            axios({
                method: 'put',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/projects/'+this.id+'.json',
                headers: config.headers,
                data: {
                    name: this.name,
                    abstract: this.abstract
                }
            }).then(() => {
                this.alerta_msg = 'Informações de projeto atualizadas com sucesso.'
                this.alerta = !this.alerta
                setTimeout(this.setAlertaFalse, 3000);
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        buscarProjeto(id) {
            axios({
                method: 'get',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/projects/'+id+'.json',
                headers: config.headers,

            }).then((response) => {
                this.id = response.data.id
                this.name = response.data.name
                this.abstract = response.data.abstract
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        deletarProjeto(){
            axios({
                method: 'delete',
                url: 'https://sisplagea-api.herokuapp.com/api/v1/projects/'+this.id+'.json',
                headers: config.headers,

            }).then(() => {
                document.location.reload()
            }).catch ((error) => {
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErrorFalse, 5000);
            })
        },
        vincularAluno(){
            axios({
                method: 'post',
                url: `https://sisplagea-api.herokuapp.com/api/v1/projects/${this.id}/link_participant`,
                headers: config.headers,
                data: {
                    student_id: this.select.id,
                    start_year: this.select.start_year,
                    end_year: this.select.end_year
                }
            }).then(() => {
                this.alerta_msg = 'Aluno vinculado com sucesso.'
                this.alerta = !this.alerta
                setTimeout(this.setAlertaFalse, 3000);
                this.participantes.push(this.select)
                this.select.start_year = ''
                this.select.end_year = ''
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        desvincularAluno(){
            axios({
                method: 'delete',
                url: `https://sisplagea-api.herokuapp.com/api/v1/projects/${this.id}/unlink_participant/${this.select.id}`,
                headers: config.headers,
             }).then(() => {
                 this.select = ''
                 this.alerta_msg = 'Aluno desvinculado com sucesso.'
                 this.alerta = !this.alerta
                 setTimeout(this.setAlertaFalse, 3000);
                 this.listarParticipantes(this.id)
            }).catch((error)=>{
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        listarParticipantes(id){
            axios({
                method: 'get',
                url: `https://sisplagea-api.herokuapp.com/api/v1/projects/${id}/participants.json`,
                headers: configFile.headers
            }).then((response)=>{
                this.participantes = response.data.participants
            })
        },
        atualizarAlunoVinculado(id){
            this.loading = true
            let formData = new FormData();
            formData.append('start_year', this.select.start_year);
            formData.append('end_year', this.select.end_year);
            formData.append('file_to_upload', this.file);
             axios({
                method: 'put',
                url: `https://sisplagea-api.herokuapp.com/api/v1/projects/${id}/update_participant/${this.select.id}.json`,
                headers: configFile.headers,
                data: formData
            }).then(() => {
                this.loading = false     
                this.alerta_msg = 'Informações de aluno vinculado atualizadas com sucesso.'
                this.alerta = !this.alerta
                setTimeout(this.setAlertaFalse, 3000);
                this.select.file_url = this.file
            }).catch((error)=>{
                this.loading = false
                this.erro_msg = error
                this.erro = true
                setTimeout(this.setErroFalse, 5000);
            })
        },
        onFileChange(file){    
            var files = file.target.files
            if(files.length >= 1){
                this.file = files[0]; 
            } else {
                this.file = null
            }
        },
        setErroFalse(){
            this.erro = false
        },
        setAlertaFalse(){
            this.alerta = false
        }
    },  
    
    mounted() {
        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/projects.json',
            headers: config.headers,
        }).then((response) => {
            this.projetos = response.data.projects
        }).catch (() => {
            alert('erro')
        }),

        axios({
            method: 'get',
            url: 'https://sisplagea-api.herokuapp.com/api/v1/students.json',
            headers: config.headers,
        }).then((response) => {
            this.alunos = response.data.students
        }).catch (() => {
            alert('erro')
        })
    }
}
</script>
