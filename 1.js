const app = new Vue({
  el:'#app',
  data:{
    Tareas:[
      {nombre:'hola'},
      {nombre:'hello'}
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
