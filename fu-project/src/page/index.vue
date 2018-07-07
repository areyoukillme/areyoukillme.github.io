<template>
    <div class="index">
        <homeheader></homeheader >
        <tabNav> </tabNav >
        <div ><router-view></router-view></div>
        <shopcar class="shopcar" ></shopcar>
      
        
        
        
     </div>
    
  
   
</template>

<script>
    import homeheader from '../components/homeheader.vue'
    import tabNav from '../components/tabNav.vue'
    import shopcar from '../components/shopcar.vue'
    import endtime from '../components/endtime.vue'

   
    export default{  
        components:{homeheader,tabNav,shopcar,endtime},
        data(){
            return{
                today:"../../static/imgs/15282588215380.jpg",
           
            }
        },
        computed:{
            
        },
        methods:{changeauthor:function(){
           
        }

        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .index{position:relative;}
    .tabnav{position:relative;}
    .gt{
        position: absolute;top:5px;right:5px;font-size: 20px;
    }
    .shopcar{position:fixed;bottom:100px;}
    .contains{height:100px;width:200px;background:blue;}

</style>