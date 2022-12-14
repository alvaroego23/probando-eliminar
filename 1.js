const app = new Vue({
  el:'#app',
  data:{
    Tareas:[
      {nombre:''}
    ],
    nueva_Tarea:''

  },
  methods:{
    agregarTarea(){
      this.Tareas.push({
        nombre: this.nueva_Tarea
      })
        

    }

  }
})  
