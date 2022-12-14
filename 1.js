const app = new Vue({
  el:'#app',
  data:{
    Tareas:[],
    nueva_Tarea:''

  },
  methods:{
    agregarTarea(){
      this.Tareas.push({
        Tarea: this.nueva_Tarea
      })
        

    }

  }
})  
