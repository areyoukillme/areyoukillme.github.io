<template>
  <div class="hello">
  我是你爸爸 <router-link to="/"><a>2222</a></router-link><button @click="sendmsg"></button><p>{{sb}}</p><svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-Watermelon">
    
  </use>
</svg><i class="iconfont icon-dianshiji"></i>
    <i class="iconfont">&#xe801;</i></div>


   
</template>
<script> 
    export default{
        computed:{
            sb(){
                return this.$store.state.author
            }
        }
    }







</script>
  


