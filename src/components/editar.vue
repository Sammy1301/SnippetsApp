<template>
    <div>
        <cabecera></cabecera>
        <div class="container center">
            <div class="row" >
                <div class="col s12 m12 l12">
                <div class="card">
                    <div class="card-content">
                    <span class="card-title">Editar Post</span>
                    <form id="editarPost" autocomplete="off" @submit.prevent="editar">
                    <input type="text" name="titulo" placeholder="Titulo" required :value="formEditar.titulo">
                    <textarea name="codigo" class="materialize-textarea" placeholder="Escribe tu codigo" cols="30" rows="10" :value="formEditar.codigo"></textarea>
                    <textarea name="descripcion" class="materialize-textarea" placeholder="Escribe tu Descripcion" cols="30" rows="10" :value="formEditar.descripcion"></textarea>
                    <select name="categoria" class="browser-default" required>
                        <option :value="formEditar.categoria"  v-text="formEditar.categoria">Escoge una Opcion</option>
                        <option value="php">PHP</option>
                        <option value="css">CSS</option>
                        <option value="html">HTML5</option>
                        <option value="mysql">MYSQL</option>
                        <option value="vue">VUE</option>
                    </select>
                    <br>
                    <input type="hidden" name="id" :value="$route.params.id">
                    <input type="submit" value="Editar" class="btn blue">
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
import sesion from '../mixins/sesion'
import axios from 'axios'
import swal from "sweetalert";
import cabecera from './cabecera.vue';
export default {
    name: 'editar',
    data(){
        return{
            formEditar: {},
        }
    },
    computed:{
        token(){
            return JSON.parse(this.$localStorage.get('token'))
        }
    },
    created(){
        this.getId()
    },
    methods:{
        getId(){
            const id = this.$route.params.id
            axios.get('https://snippetssammy.000webhostapp.com/snippets/api/crud/getId.php?id='+ id)
                .then( res =>{
                    this.formEditar = res.data
                })
        },
        editar(){
             //esto es para enviar el codigo y sus campos a la pagina PHP
            const form = document.getElementById('editarPost')
                axios.post('https://snippetssammy.000webhostapp.com/snippets/api/crud/editarPost.php', new FormData(form))
                .then( res =>{
                    this.respuesta = res.data
                    if (res.data == 'success') {
                        this.$router.push('/')
                    } else {
                        swal('El post no pudo ser editar')
                    }
                })
        }
    },
    
    components: { cabecera },
    mixins:[sesion],
}
</script>