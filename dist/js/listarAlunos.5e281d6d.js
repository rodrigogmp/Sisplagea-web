(function(t){function a(a){for(var r,l,s=a[0],n=a[1],c=a[2],d=0,v=[];d<s.length;d++)l=s[d],i[l]&&v.push(i[l][0]),i[l]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);u&&u(a);while(v.length)v.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],r=!0,s=1;s<e.length;s++){var n=e[s];0!==i[n]&&(r=!1)}r&&(o.splice(a--,1),t=l(l.s=e[0]))}return t}var r={},i={listarAlunos:0},o=[];function l(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=r,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)l.d(e,r,function(a){return t[a]}.bind(null,r));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],n=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var u=n;o.push([6,"chunk-vendors"]),e()})({6:function(t,a,e){t.exports=e("a65d")},a65d:function(t,a,e){"use strict";e.r(a);e("14c6"),e("08c1"),e("4842"),e("d9fc");var r=e("2b0e"),i=e("ce5b"),o=e.n(i),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("Menu"),e("Navbar",{attrs:{estaLogado:""}}),e("v-content",[e("ModuloListarAlunos")],1),e("Footer")],1)},s=[],n=e("d178"),c=e("fd2d"),u=e("fb62"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[e("h1",[t._v("Alunos cadastrados")]),e("v-divider"),e("v-container",{attrs:{fluid:"","grid-list-md":""}},[e("v-data-iterator",{attrs:{items:t.alunos,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,"content-tag":"v-layout",column:""},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"item",fn:function(a){return[e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-flex",[e("v-card",[e("v-list",{attrs:{"three-line":""}},[e("v-list-tile",[e("v-list-tile-content",[e("v-list-tile-title",[e("h3",[t._v("Nome: "+t._s(a.item.name)+" ")])]),e("v-list-tile-title",[e("strong",[t._v("Matricula:")]),t._v(" "+t._s(a.item.registration))]),e("v-list-tile-title",[e("strong",[t._v("Categoria:")]),t._v(" "+t._s(a.item.category))])],1),e("v-list-content",[e("v-list-tile-action",{staticClass:"align-end"},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var i=r.on;return[e("v-btn",t._g({attrs:{flat:""},on:{click:function(e){t.dialog=!0,t.buscarAluno(a.item.id)}}},i),[e("v-icon",{attrs:{color:"green lighten-1"}},[t._v("info")]),t._v("Info Aluno")],1)]}}],null,!0)},[e("span",[t._v("Exibir/Editar Informações sobre o aluno")])])],1)],1)],1)],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"680px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Aluno: "+t._s(t.name)+" ")])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:"",md6:"",sm6:"",lg6:""}},[e("v-layout",{attrs:{"justify-center":"",column:""}},[e("v-flex",{attrs:{"offset-xs3":""}},[e("v-avatar",{attrs:{size:"180"}},[e("v-img",{attrs:{src:t.photo_url}})],1)],1)],1)],1),e("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.name,disabled:""}}),e("v-text-field",{attrs:{label:"Matrícula",value:t.registration,disabled:""}}),e("v-text-field",{attrs:{label:"Categoria",value:t.category,disabled:""}})],1),e("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[e("v-text-field",{attrs:{label:"Email",value:t.email,disabled:""}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Informações",value:t.relevant_informations,disabled:""}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{color:"info",outline:"",flat:"",href:t.redirecionarLattes(),target:"_blank"}},[t._v("Lattes")])],1),e("v-spacer"),e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog=!1,t.dialog2=!0}}},[t._v("Editar")]),e("v-btn",{attrs:{color:"error",outline:"",flat:""},on:{click:t.deletarAluno}},[t._v("Deletar")])],1),e("v-flex",{attrs:{xs12:""}},[e("v-alert",{attrs:{value:t.erro,type:"error",transition:"scale-transition",dismissible:""},on:{click:function(a){t.erro=!1}}},[t._v(t._s(t.erro_msg))])],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Salvar")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"860px"},model:{value:t.dialog2,callback:function(a){t.dialog2=a},expression:"dialog2"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Aluno: "+t._s(t.name)+" ")])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[e("v-text-field",{attrs:{label:"Nome",value:t.name,disabled:""}})],1),e("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[e("v-text-field",{attrs:{label:"Email",value:t.email,disabled:""}})],1),e("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[e("v-text-field",{attrs:{label:"Matrícula",value:t.registration,disabled:""}})],1),e("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[e("v-text-field",{attrs:{label:"Categoria",value:t.category,disabled:""}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Informações",value:t.relevant_informations,disabled:""}})],1),e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{color:"info",outline:"",flat:"",href:t.redirecionarLattes(),target:"_blank"}},[t._v("Lattes")])],1),e("v-spacer"),e("v-flex",{attrs:{xs12:""}},[e("v-alert",{attrs:{value:t.alerta,type:"success",transition:"scale-transition",dismissible:""},on:{click:function(a){t.alerta=!1}}},[t._v(t._s(t.alerta_msg)+".")]),e("v-alert",{attrs:{value:t.erro,type:"error",transition:"scale-transition",dismissible:""},on:{click:function(a){t.erro=!1}}},[t._v(t._s(t.erro_msg))])],1),e("v-flex",{attrs:{xs12:""}},[e("v-subheader",[t._v("Área para editar aluno")])],1),e("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[e("v-text-field",{attrs:{label:"Nome"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),e("v-text-field",{attrs:{label:"Matrícula"},model:{value:t.registration,callback:function(a){t.registration=a},expression:"registration"}}),e("v-text-field",{attrs:{label:"Lattes"},model:{value:t.lattes_link,callback:function(a){t.lattes_link=a},expression:"lattes_link"}}),e("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-flex",{attrs:{xs6:""}},[e("v-flex",{attrs:{"offset-xs3":""}},[e("v-avatar",{attrs:{size:"180"}},[e("v-img",{attrs:{src:t.photo_url}})],1)],1),e("v-layout",{staticClass:"mb-3",attrs:{"justify-center":""}},[e("input",{ref:"file",attrs:{type:"file",id:"file",accept:"image/x-png,image/gif,image/jpeg"},on:{change:t.onFileChange}})])],1),e("v-radio-group",{attrs:{label:"Categoria:"},model:{value:t.category,callback:function(a){t.category=a},expression:"category"}},[e("v-layout",{attrs:{row:""}},[e("v-radio",{attrs:{label:"Iniciação Cientifica",value:"scientific_research"}}),e("v-radio",{attrs:{label:"Mestrado",value:"masters_degree"}}),e("v-radio",{attrs:{label:"Doutorado",value:"doctorate_degree"}}),e("v-radio",{attrs:{label:"Pós-Doutorado",value:"post_doctoral"}})],1)],1),e("v-flex",{attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Informações"},model:{value:t.relevant_informations,callback:function(a){t.relevant_informations=a},expression:"relevant_informations"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{outline:"",flat:""},on:{click:function(a){t.dialog2=!1,t.dialog=!0}}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"info",outline:"",flat:""},on:{click:function(e){return t.atualizarAluno(a.item)}}},[t._v("Salvar")])],1)],1)],1)]}}])})],1)],1)],1)],1)},v=[],p=(e("7f7f"),e("c5f6"),e("bc3a")),f=e.n(p),m=(e("e597"),{headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"Content-Type":"multipart/form-data",uid:localStorage.getItem("data['uid']")}}),g={data:function(){return{alerta:!1,alerta_msg:"",erro:!1,erro_msg:"",dialog:!1,dialog2:!1,url_base:"https://sisplagea-api.herokuapp.com",photo_url:"",photo_update:"",file:null,rowsPerPageItems:[4,8,12],pagination:{rowsPerPage:4,sortBy:"name"},alunos:[{id:"",name:"",category:"",email:"",registration:"",lattes_link:"",relevant_informations:"",photo_url:""}]}},props:{id:Number,name:String,category:String,email:String,registration:String,lattes_link:String,relevant_informations:String,photo_url:String},methods:{atualizarAluno:function(){var t=this,a=new FormData;a.append("name",this.name),a.append("category",this.category),a.append("email",this.email),a.append("registration",this.registration),a.append("lattes_link",this.lattes_link),a.append("relevant_informations",this.relevant_informations),a.append("photo",this.photo_update),f()({method:"put",url:"https://sisplagea-api.herokuapp.com/api/v1/students/"+this.id+".json",headers:m.headers,data:a}).then(function(){t.alerta_msg="Informações do aluno atualizadas com sucesso.",t.alerta=!t.alerta,setTimeout(t.setAlertaFalse,3e3)}).catch(function(a){t.erro_msg=a,t.erro=!0,setTimeout(t.setErroFalse,5e3)})},buscarAluno:function(t){var a=this;f()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/students/"+t+".json",headers:m.headers}).then(function(t){a.id=t.data.id,a.name=t.data.name,a.category=t.data.category,a.email=t.data.email,a.registration=t.data.registration,a.lattes_link=t.data.lattes_link,a.relevant_informations=t.data.relevant_informations,a.photo_url=a.url_base+t.data.photo.url}).catch(function(){})},deletarAluno:function(){var t=this;f()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/students/"+this.id+".json",headers:m.headers}).then(function(){document.location.reload()}).catch(function(a){t.erro_msg=a,t.erro=!0,setTimeout(t.setErrorFalse,5e3)})},redirecionarLattes:function(){return this.lattes_link},onFileChange:function(t){var a=t.target.files[0];this.photo_update=a,this.photo_url=URL.createObjectURL(a)},setErrorFalse:function(){this.erro=!1},setAlertaFalse:function(){this.alerta=!1}},mounted:function(){var t=this;f()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/students.json",headers:m.headers}).then(function(a){t.alunos=a.data.students}).catch(function(){})}},h=g,_=e("2877"),b=e("6544"),x=e.n(b),k=e("0798"),y=e("8212"),V=e("8336"),C=e("b0af"),S=e("99d9"),w=e("12b2"),P=e("a523"),I=e("c377"),j=e("169a"),A=e("ce7e"),L=e("0e8f"),T=e("132d"),E=e("adda"),O=e("a722"),D=e("8860"),F=e("ba95"),M=e("40fe"),N=e("5d23"),q=e("67b6"),G=e("43a6"),B=e("9910"),$=e("e0c7"),z=e("2677"),R=e("3a2f"),J=Object(_["a"])(h,d,v,!1,null,null,null),U=J.exports;x()(J,{VAlert:k["a"],VAvatar:y["a"],VBtn:V["a"],VCard:C["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:w["a"],VContainer:P["a"],VDataIterator:I["a"],VDialog:j["a"],VDivider:A["a"],VFlex:L["a"],VIcon:T["a"],VImg:E["a"],VLayout:O["a"],VList:D["a"],VListTile:F["a"],VListTileAction:M["a"],VListTileContent:N["a"],VListTileTitle:N["b"],VRadio:q["a"],VRadioGroup:G["a"],VSpacer:B["a"],VSubheader:$["a"],VTextField:z["a"],VTooltip:R["a"]});var H={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}};null==H.headers.client&&(window.location.href="/login.html");var W={name:"app",components:{Navbar:n["a"],Footer:c["a"],Menu:u["a"],ModuloListarAlunos:U}},K=W,Q=e("7496"),X=e("549c"),Y=Object(_["a"])(K,l,s,!1,null,null,null),Z=Y.exports;x()(Y,{VApp:Q["a"],VContent:X["a"]});e("bf40");r["default"].config.productionTip=!1,r["default"].use(o.a),new r["default"]({render:function(t){return t(Z)}}).$mount("#app")},d178:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{staticClass:"light-blue darken-3",attrs:{app:"",dark:"","clipped-left":"",dense:"",fixed:""}},[e("v-toolbar-title",{staticClass:"headline"},[e("v-icon",{attrs:{large:""}},[t._v("business")]),e("span",[t._v(" SisPlagea")]),e("span",{staticClass:"font-weight-light text-uppercase"},[t._v(" - Sistema de Planejamento e Gestão de Atividades")])],1),e("v-spacer"),t.estaLogado?e("v-btn",{attrs:{flat:"",href:"/mensagens.html"}},[e("span",{staticClass:"mr-2"},[t._v("Mensagens")]),e("v-icon",[t._v("email")])],1):t._e(),t.estaLogado?e("v-btn",{attrs:{flat:""},on:{click:t.logout}},[e("span",{staticClass:"mr-2"},[t._v("Sair")]),e("v-icon",[t._v("input")])],1):e("v-btn",{attrs:{flat:"",href:"/login.html"}},[e("span",{staticClass:"mr-2"},[t._v("Login")]),e("v-icon",[t._v("account_circle")])],1)],1)},i=[],o=e("bc3a"),l=e.n(o),s={headers:{"access-token":localStorage.getItem("data['at']"),client:localStorage.getItem("data['c']"),"content-type":localStorage.getItem("data['ct']"),uid:localStorage.getItem("data['uid']")}},n={name:"Navbar",props:{estaLogado:Boolean},methods:{logout:function(){l()({method:"delete",url:"https://sisplagea-api.herokuapp.com/api/v1/auth/sign_out",headers:s.headers}).then(function(t){200==t.status&&(localStorage.removeItem("data['at']"),localStorage.removeItem("data['c']"),localStorage.removeItem("data['ct']"),localStorage.removeItem("data['rt']"),localStorage.removeItem("data['uid']"),window.location.href="/index.html")}).catch(function(){})}}},c=n,u=e("2877"),d=e("6544"),v=e.n(d),p=e("8336"),f=e("132d"),m=e("9910"),g=e("71d9"),h=e("2a7f"),_=Object(u["a"])(c,r,i,!1,null,null,null);a["a"]=_.exports;v()(_,{VBtn:p["a"],VIcon:f["a"],VSpacer:m["a"],VToolbar:g["a"],VToolbarTitle:h["a"]})},fb62:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{staticClass:"grey darken-4",attrs:{width:"250",dark:"","mobile-break-point":"700",clipped:"",fixed:"",app:""}},[e("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[e("v-list",[e("v-list-tile",{attrs:{avatar:""}},[e("v-list-tile-avatar",{attrs:{color:"white"}},[e("v-img",{attrs:{contain:"",src:t.photo_url}})],1),e("v-list-tile-content",[e("v-list-tile-title",{staticClass:"title"},[t._v(t._s(t.informacoes.name))])],1)],1)],1)],1),e("v-list",{attrs:{"two-line":""}},[e("v-divider"),t._l(t.opcoes,function(a,r){return e("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1),e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}})],1)}),e("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile",[e("v-list-tile-title",[t._v("Cadastrar")])],1)]},proxy:!0}])},t._l(t.cadastros,function(a,r){return e("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1)],1)}),1),e("v-list-group",{attrs:{"sub-group":"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-tile",[e("v-list-tile-title",[t._v("Listar/Editar")])],1)]},proxy:!0}])},t._l(t.listas,function(a,r){return e("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{href:a.para}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icone))])],1)],1)}),1)],2)],1)},i=[],o=e("bc3a"),l=e.n(o),s={data:function(){return{informacoes:"",photo_url:"",url_base:"https://sisplagea-api.herokuapp.com/",opcoes:[{titulo:"Home",icone:"home",para:"/home.html"},{titulo:"Adicionar Aluno",icone:"person_add",para:"/adicionarAluno.html"},{titulo:"Buscar atividades",icone:"search",para:"/buscarAtividades.html"},{titulo:"Editar Info Pessoais",icone:"settings",para:"/infoPessoais.html"}],cadastros:[{titulo:"Publicação",icone:"import_contacts",para:"/cadastrarPublicacao.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/cadastrarGrupoPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/cadastrarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/cadastrarDisciplina.html"}],listas:[{titulo:"Alunos",icone:"supervisor_account",para:"/listarAlunos.html"},{titulo:"Publicação",icone:"import_contacts",para:"/listarPublicacoes.html"},{titulo:"Grupo pesq.",icone:"group_add",para:"/listarGruposPesq.html"},{titulo:"Projeto pesq.",icone:"attachment",para:"/listarProjPesq.html"},{titulo:"Disciplina",icone:"border_color",para:"/listarDisciplinas.html"}]}},mounted:function(){var t=this;l()({method:"get",url:"https://sisplagea-api.herokuapp.com/api/v1/users/info.json"}).then(function(a){t.informacoes=a.data,t.photo_url=t.url_base+t.informacoes.photo.url}).catch(function(){alert("erro")})}},n=s,c=e("2877"),u=e("6544"),d=e.n(u),v=e("ce7e"),p=e("132d"),f=e("adda"),m=e("8860"),g=e("56b0"),h=e("ba95"),_=e("40fe"),b=e("c954"),x=e("5d23"),k=e("f774"),y=e("71d9"),V=Object(c["a"])(n,r,i,!1,null,null,null);a["a"]=V.exports;d()(V,{VDivider:v["a"],VIcon:p["a"],VImg:f["a"],VList:m["a"],VListGroup:g["a"],VListTile:h["a"],VListTileAction:_["a"],VListTileAvatar:b["a"],VListTileContent:x["a"],VListTileTitle:x["b"],VNavigationDrawer:k["a"],VToolbar:y["a"]})},fd2d:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{attrs:{dark:"",inset:"",absolute:"",dense:"",app:"",height:"auto"}},[e("v-card",{staticClass:"flex light-blue darken-3 white--text text-xs-center",attrs:{flat:"",tile:""}},[e("v-card-text",{staticClass:"white--text pt-3"},[t._v("\n            Trabalho de Programação Web.\n        ")]),e("v-divider"),e("v-card-text",{staticClass:"white--text"},[t._v("©2019 — "),e("strong",[t._v("Fábrica de Bugs")])])],1)],1)},i=[],o=e("2877"),l=e("6544"),s=e.n(l),n=e("b0af"),c=e("99d9"),u=e("ce7e"),d=e("553a"),v={},p=Object(o["a"])(v,r,i,!1,null,null,null);a["a"]=p.exports;s()(p,{VCard:n["a"],VCardText:c["b"],VDivider:u["a"],VFooter:d["a"]})}});
//# sourceMappingURL=listarAlunos.5e281d6d.js.map