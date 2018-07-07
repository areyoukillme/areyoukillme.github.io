<template>
    <div>
         <div><img :src="today" alt=""  /><endtime endTime='2018-7-2 19:10:03' msg="抢购结束">{{context}}<div slot="nother">1234324</div></endtime></div>
        <div>
            <div>
                <endtime endTime='2018-7-2 19:10:03' msg="抢购结束"></endtime>
                <ul >
                    
                    <a href="">
                        <li v-for="item in goodsclass" class="goodclass">
                            <img :src="item" alt="" />
                        </li>
                    </a>    
                    <a href="">
                        <li class="goodclass"><img src="//a4.vimage1.com/upload/flow/2018/05/22/21/15269794589634.jpg" alt="" /></li>
                    </a>
                </ul>
            </div>
            <img src="//a2.vimage1.com/upload/flow/2018/06/27/120/15300828467403.jpg" data-id="0e0b2d0256509d3ff8dc85300e92d232" style="width: 100%;height: auto;">
            <a href="">
            <endtime endTime='2018-7-2 19:10:03' msg="抢购结束"></endtime>
            <img src="//a3.vimage1.com/upload/flow/2018/06/27/166/15300828921535.jpg" data-id="cabf9365d6263c87dffc28be34126908" style="width: 100%;height: auto;">
            </a>
            <img data-left-button="知道了" data-mid-button="去逛逛" data-right-button="去主会场" data-coupon-image="http://a.vpimg3.com/upload/flow/2018/06/27/32/15300899830522.png" data-coupon-info="b/87Ntw4VWwK5KafSN1Gs89dxVfmmHXQzl3InztPwc2YVabbJHDvKpuQOemertDrLv5E38qS/aXX6j22fmJ0eWS3HBUilQEHVlA7g7J7LtOcHmr4ICIwYFjojLbMdWH9" class="J-operate-coupon" src="//a4.vimage1.com/upload/flow/2018/06/27/198/15300900895790.jpg" data-id="14c75bfff3d373641ddc3c1d635a08e1" style="width: 100%;height: auto;">
            <div class="mainshop">
                
                <ul class="mainshopimg">
                    <li v-for="item in mainshop">
                        <img :src="item" alt="" />
                    </li>
                </ul>
            </div>
            <img src="//a4.vimage1.com/upload/flow/2018/06/28/120/15301525504173.jpg" data-id="c8fdf77fa9a75fc7373d5e86d7b9025d" style="width: 100%;height: auto;">
            <img src="//a2.vimage1.com/upload/flow/2018/05/25/190/15272160933752.gif" alt="" />
        </div>
        <div class="text"><endtime endTime='2018-7-2 16:20:03' msg="抢购结束"><p>123</p></endtime></div>

    </div>
</template>

<script>
    import endtime from '../../components/endtime.vue'
    export default{  
        components:{endtime},
        data(){
            return{
                context:"hahah",
               today:"../../../static/imgs/goodclass.jpg" ,
               goodsclass:["//a4.vimage1.com/upload/flow/2018/05/29/106/15275616596915.jpg","//a2.vimage1.com/upload/flow/2018/05/22/138/15269786875124.jpg","../../../static/imgs/boy.jpg","//a4.vimage1.com/upload/flow/2018/05/22/190/15269788745661.jpg","//a4.vimage1.com/upload/flow/2018/05/22/110/15269789816830.jpg","//a3.vimage1.com/upload/flow/2018/05/29/40/15275616172415.jpg","//a4.vimage1.com/upload/flow/2018/05/22/172/15269794028123.jpg",],
               mainshop:["//a2.vimage1.com/upload/flow/2018/06/27/87/15301030109875.jpg","//a3.vimage1.com/upload/flow/2018/06/27/127/15301030259929.jpg","//a2.vimage1.com/upload/flow/2018/06/27/162/15301030362568.jpg","//a2.vimage1.com/upload/flow/2018/06/27/29/15301030488065.jpg"],

               
            }
        },
        computed:{
        
        },
        methods:{

        },
        mounted(){
            $.ajax({
                 url: 'http://localhost:12345/goodslist',
                 type: 'get',                       
               })
               .done(function(data) {console.log(data)
                    })
                 
          
                 

           
        }
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{width:100%;}
    ul{overflow: hidden;}
    .goodclass{width:25%;

        float: left;
    }
    .mainshopimg{
        display:flex;
        flex-wrap: wrap;


    }
    .mainshopimg li{width:50%;}
    .text{background:blue;height:300px;}
</style>
