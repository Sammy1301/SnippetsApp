import axios from 'axios'
import swal from 'sweetalert'
export default{
    methods:{
        eliminar(id){
            swal({
                title:'Seguro que desea eliminar post?',
                text:'Al eliminarlo no se podra recuperar',
                icon:'warning',
                buttons: true,
                dangerMode: true
            })
            .then((aceptar) =>{
                if (aceptar) {
                    axios.get('https://snippetssammy.000webhostapp.com/snippets/api/crud/eliminar.php?id='+ id)
                .then( res =>{
                    if (res.data == 'success') {
                        swal('Post Eliminado')
                        this.getCategoria()
                    }else{
                        swal('Post no eliminado')
                    }
                })
                }else{
                    return false;
                }
            })
        },
    }
}