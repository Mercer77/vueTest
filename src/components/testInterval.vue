<template>
    
</template>

<script>
    export default {
        name: "testInterval",
      data(){
          return{

          }
      },
      methods:{
        getTiming:function () {
          const timer = setInterval(() =>{
            console.log(timer);
          }, 2000);
          // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
          this.$once('hook:beforeDestroy', () => {
            clearInterval(timer);
          })
        },
        getTiming2:function () {
          const timer = setInterval(() =>{
            console.log(timer);
          }, 2000);
          // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
          this.$once('hook:beforeDestroy', () => {
            clearInterval(timer);
          })
        }
      },
      mounted() {
          // this.getTiming();
          this.getTiming2();
      }
    }
</script>

<style scoped>

</style>
