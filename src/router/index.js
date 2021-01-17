import Vue from 'vue'
import Router from 'vue-router'
import iniciarSesion from '@/components/iniciarSesion'
import registro from '@/components/registro'
import inicio from '@/components/inicio'
import  categoria  from "@/components/categoria";
import  alta from "@/components/alta";
import  editar from "@/components/editar";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'iniciarSesion',
      component: iniciarSesion
    },
    {
      path: '/registro',
      name: 'Registro',
      component: registro
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/categoria/:cat',
      name: 'categoria',
      component: categoria
    },
    {
      path: '/alta',
      name: 'alta',
      component: alta
    },
    {
      path: '/editar/:id',
      name:'editar',
      component: editar
    },
  ]
})
