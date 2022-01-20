<template>
    <div>
      <a target="_blank" href="http://47.110.242.174:18080/RDP-SERVER/rdppage/main/46c17c5d1b0c2d8ebca6fcf930d4de58">测试</a>
    </div>
</template>

<script>
    export default {
        name: "testInterval",
      data(){
          return{

          }
      },
      methods:{
          test(){
            window.location.url='http://106.12.219.66:81/zhiji/#/generateReport/0/7';
          },
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
          // this.getTiming2();
      }
    }
</script>

<style scoped>

</style>
