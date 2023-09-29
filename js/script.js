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
    }
  },

  methods:{

  },

  mounted(){

  }

}).mount("#app")