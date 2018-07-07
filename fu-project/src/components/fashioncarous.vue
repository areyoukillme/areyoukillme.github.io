<template>
 <mu-carousel hide-controls interval=1500  class="carousel" >
  <mu-carousel-item>
    <img :src="carouselImg1" width=100%>
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2" width=100%>
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3" width=100%>
  </mu-carousel-item>
 
</mu-carousel>
</template>

<script>
    import carouselImg1 from '../../static/imgs/01.jpg';
    import carouselImg2 from '../../static/imgs/02.jpg';
    import carouselImg3 from '../../static/imgs/02.png';
   
    export default{

        components:{},
        data(){
            return{
                carouselImg1,
                carouselImg2,
                carouselImg3,
              
            }
        },
        computed:{
        
        },
        methods:{

        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .carousel{
    height:120px;
  }
</style>
