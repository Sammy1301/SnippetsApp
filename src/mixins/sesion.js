import axios from 'axios'

export default{
    
    created: function () {
        const token = JSON.parse(this.$localStorage.get('token'))
        if(!token){
          this.$router.push('/')
        }
      }
}