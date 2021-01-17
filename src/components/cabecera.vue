<template>
    <div>
        <nav class="blue">
        <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to="/"><i class="material-icons">home</i></router-link></li>
                <li><router-link to="/alta"><i class="material-icons">add</i></router-link></li>
                <li><router-link to="/categoria/php">PHP</router-link></li>
                <li><router-link to="/categoria/css">CSS</router-link></li>
                <li><router-link to="/categoria/html">HTML5</router-link></li>
                <li><router-link to="/categoria/vue">VUE</router-link></li>
                <li><router-link to="/categoria/mysql">Mysql</router-link></li>
                <li ><a href="#" @click="salir">Salir</a></li>
            </ul>
        </div>
        </nav>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name: 'cabecera',
    methods:{
        salir(){
            const token = JSON.parse(this.$localStorage.get('token'))
            axios.get('https://snippetssammy.000webhostapp.com/snippets/api/loginRegistro/salir.php?token=' + token)
            .then( res=>{
                if (res.data == 'success') {
                    this.$localStorage.remove('token')
                    this.$router.push('/')
                }
            })
        }
    }

}
</script>