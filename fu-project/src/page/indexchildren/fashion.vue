<template>

    <div>
        <fashionlunbo />
        <div class="discount">
            <img :src="discountsrc1"  alt="" />
            <img :src="discountsrc2" alt="" />
        </div>
        <fashiontabs />
        <div class="choose">
            <li v-for="item in choosesrc">
                <img :src="item" alt="" />
            </li>
          
        </div>



    </div>
</template>

<script>
import fashionlunbo from '../../components/fashioncarous.vue'
import fashiontabs from '../../components/fashiontabs.vue'
    export default{  
        components:{fashionlunbo,fashiontabs},
        data(){
            return{
                discountsrc1:'../../../static/imgs/03.jpg',
                discountsrc2:'../../../static/imgs/04.jpg',
                choosesrc:["//a2.vimage1.com/upload/merchandise/pdc/456/299/222160144497299456/5/9311770599337-5_218x274_70.jpg",
                "//a3.vimage1.com/upload/merchandise/pdc/355/660/8885396972706660355/4/9311770599238-5_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2017/05/05/55/8dccd38e-85a0-417d-b4b0-ec168a9dcde2_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2017/05/05/136/4a8f8ac1-0d8a-4b53-901a-90496c4e2c6d_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2018/06/13/143/a7c086c6-cd0f-4ea1-8f3a-84f939ce4d49_5t_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2018/06/13/143/a7c086c6-cd0f-4ea1-8f3a-84f939ce4d49_5t_218x274_70.jpg","//a2.vimage1.com/upload/merchandise/pdc/456/299/222160144497299456/5/9311770599337-5_218x274_70.jpg",
                "//a3.vimage1.com/upload/merchandise/pdc/355/660/8885396972706660355/4/9311770599238-5_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2017/05/05/55/8dccd38e-85a0-417d-b4b0-ec168a9dcde2_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2017/05/05/136/4a8f8ac1-0d8a-4b53-901a-90496c4e2c6d_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2018/06/13/143/a7c086c6-cd0f-4ea1-8f3a-84f939ce4d49_5t_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2018/06/13/143/a7c086c6-cd0f-4ea1-8f3a-84f939ce4d49_5t_218x274_70.jpg","//a2.vimage1.com/upload/merchandise/pdc/456/299/222160144497299456/5/9311770599337-5_218x274_70.jpg",
                "//a3.vimage1.com/upload/merchandise/pdc/355/660/8885396972706660355/4/9311770599238-5_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2017/05/05/55/8dccd38e-85a0-417d-b4b0-ec168a9dcde2_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2017/05/05/136/4a8f8ac1-0d8a-4b53-901a-90496c4e2c6d_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2018/06/13/143/a7c086c6-cd0f-4ea1-8f3a-84f939ce4d49_5t_218x274_70.jpg","//a3.vimage1.com/upload/merchandise/pdcvis/2018/06/13/143/a7c086c6-cd0f-4ea1-8f3a-84f939ce4d49_5t_218x274_70.jpg"],


            }
        },
        computed:{
            
        },
        methods:{

        },
        mounted:{
         
                 
        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .discount{
        img{width:100%}
    }
    img{width:100%}
    
    li:nth-child(2n){
        list-style-type: none;
        width:48%;
        height:240px;
        float:right;
        margin:1%;
        box-sizing: border-box;
        border:1px solid #ccc;

    }
    li:nth-child(2n-1){
        list-style-type: none;
        width:48%;
        height:240px;
        float:left;
        margin:1%;
        box-sizing: border-box;
        border:1px solid #ccc;


    }
    li:nth-child(2)::before{content:"占位子的";font-size: 40px;
        
    }
     li:nth-child(2){height:300px;}
    
    

    .long{height:50px;}
    .fr{float:right;}
    .fl{float:left;}
 
</style>
