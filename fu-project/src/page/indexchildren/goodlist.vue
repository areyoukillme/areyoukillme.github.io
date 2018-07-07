<template>
    <ul><li v-for="i in goods" class="houlai" :goodsid="i.id"><img :src="i.imgurl" alt="" />
    </li><img src="./img/1462842950820698108.jpg" height="450" width="450" alt="" /><img src="./img/13612_G_1490912708837.jpg" alt="" /></ul>
</template>

<script>
  
    export default{  
        components:{},
        data(){
            return{
                goods:{}    
            }
        },
        computed:{
        
        },
        methods:{
            log (iscroll) {
              console.log(iscroll)
            }

        },
        mounted(){
           this.axios.get('http://localhost:12345/goodslist')
              .then(function (response) {
                that.goods=response;
              })
              .catch(function(err){
            console.log(err);
  });
            
                        
             
            
          
        },
        updated(){
          $("ul").on("click","li",function(){
            console.log($(this).attr('goodsid'))
                 
          })
        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    

 
</style>
