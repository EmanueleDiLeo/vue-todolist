const {createApp} = Vue;

createApp({

  data(){
    return{
      tasks:[
        {
          message:"Comprare la pappa per Artu",
          done: false,
        },
        {
          message:"Pagare la bolletta",
          done: true,
        },
        {
          message:"Ripassare Vue",
          done: false,
        },
      ],
      isErrorTask: false,
    }
  },

  methods:{

    removeTask(index){
      if(this.tasks[index].done){
        this.tasks.splice(index,1);
      }
      else{
        this.isErrorTask = true; 
        setTimeout( () =>{
          this.isErrorTask = false;
        },3000);
      }
    },

    
  },

  mounted(){

  }

}).mount("#app")