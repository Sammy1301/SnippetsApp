<template>
    <div>
        <cabecera></cabecera>
        <nav>
    <div class="nav-wrapper blue lighten-3">
      <form>
        <div class="input-field">
          <input id="search" type="search" v-model="buscar" required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
    <div class="container">
    <div class="row" v-for="item in datosFiltrados" :key="item.id">
        <div class="col s12 m12 l12">
        <div class="card">
            <div class="card-content">
            <span class="card-title"><img :src="item.foto" alt="item.foto" width="50px" class="circle"> {{item.user}} </span>
            <span class="card-title">{{item.titulo}}</span>
            <pre>
                {{item.codigo}}
            </pre>
            <p> {{item.descripcion}} </p>
            </div>
            <div class="card-action">
                <router-link v-if="item.user == userPost" :to="'/editar/'+item.id">EDITAR</router-link>
                <a v-if="item.user == userPost" href="#" @click="eliminar(item.id)">ELIMINAR</a>
                <button v-clipboard="item.codigo" class="btn btn-blue">COPIAR</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import cabecera from './cabecera.vue'
import sesion from '../mixins/sesion'
import eliminar from '../mixins/eliminar'
import axios from 'axios'
import { swal } from "sweetalert"
export default {
    name:'inicio',
    data(){
        return{
        respuesta:'',
        listar:[],
        buscar:'',
        userPost:''
        }
    },
    created(){
        this.getCategoria()
        this.getUser()
    },
    computed:{
        datosFiltrados(){
            return this.listar.filter((filtro)=>{
                return filtro.titulo.toUpperCase().match(this.buscar.toUpperCase())
            })
        }
    },
    methods:{
        getUser(){
            const token = JSON.parse(this.$localStorage.get('token'))
            axios.get('https://snippetssammy.000webhostapp.com/snippets/api/crud/getUser.php?token=' + token)
                .then( res =>{
                    this.userPost = res.data
                })
        },
        getCategoria(){
            axios.get('https://snippetssammy.000webhostapp.com/snippets/api/crud/getPost.php')
                .then( res => {
                    this.listar = res.data
                })
        },
    },
    components:{
        cabecera
    },
    mixins: [sesion, eliminar]
}
</script>