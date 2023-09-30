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
      newMessage: "",
      isErrorNewTask: false,
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

    addTask(){
      if(this.newMessage.length < 5){
        isErrorNewTask = true;
        setTimeout( () => {
          this.isErrorNewTask = false;
        },3000);
      }
      else{
        newTask = {
          message: this.newMessage,
          done: false,
        };
        this.tasks.push(newTask);
      }
    },

    changeDone(index){
      this.tasks[index].done = !this.tasks[index].done;
    },
  },

  mounted(){

  }

}).mount("#app")