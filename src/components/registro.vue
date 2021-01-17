<template>
    <div>
        <nav class="blue"></nav>
        <div class="container center">
         <div class="row">
            <div class="col s12 m12 l12">
            <div class="card">
                <div class="card-content">
                <span class="card-title">Registro</span>
                <form id="formRegistro" autocomplete="off" @submit.prevent="registro" enctype="multipart/form-data">
                <input type="text" name="usuario" placeholder="Nombre de usuario" required pattern="[A-Za-z]{5,30}">
                <input type="email" v-model="correo" name="email"  placeholder="Correo" @blur="validarCorreo" required>
                <input type="password" name="pass" v-model="pass" placeholder="Contraseña" required pattern="[A-Za-z0-9]{6,15}">
                <input type="password" v-model="passC" placeholder="Confirmar Contraseña" required pattern="[A-Za-z0-9]{6,15}">
                <div class="file-field input-field">
                        <div class="btn">
                        <span>Foto</span>
                        <input type="file" name="foto">
                        </div>
                        <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                        </div>
                    </div>
                <input type="submit" value="Registrarse" :class="boton">
                </form>
                </div>
                <div class="card-action">
                    <router-link to="/">Iniciar Sesion</router-link>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
    name:'registro', 
    data(){
        return{
            pass:'',
            passC:'',
            respuesta:'',
            correo:'',
            boton: 'btn btn-blue disabled'
        }
    },
    methods:{
        registro(){
            if (this.pass==this.passC) {
                const form = document.getElementById('formRegistro')
                axios.post('https://snippetssammy.000webhostapp.com/snippets/api/loginRegistro/registro.php', new FormData(form))
                .then( res =>{
                    this.respuesta = res.data
                    this.direccionamiento()
                })
            } else {
                swal('Las Contraseñas no son iguales');
            }
        },
        direccionamiento(){
            if (this.respuesta == 'success') {
                this.$router.push('/')
            } else {
                swal('No se ha completado el proceso de Registro')
            }
        },
        validarCorreo(){
                if (this.validEmail(this.correo)) {
                    const formData = new FormData()
                    formData.append('correo', this.correo)
                    axios.post('https://snippetssammy.000webhostapp.com/snippets/api/loginRegistro/validarEmail.php', formData)
                    .then( res =>{
                    this.respuesta = res.data
                        if (res.data == 'success') {
                            this.boton = 'btn blue'
                        } else {
                            swal("el Correo ya existe")
                        }
                })
                } else {
                    swal("Correo invalido")
                }
            },
        validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
        },
    }
}
</script>