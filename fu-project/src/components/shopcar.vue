<template>
    <div>
        <ul>
            <li class="test"><i class="iconfont icon-gouwuche"></i></li>
            <li  v-for="item in li" v-html="item" class="tianjia" v-show="islogin"></li>
            
        </ul>
    </div>
</template>

<script>
 
    export default{  
        components:{},
        data(){
            return{
                li:[`<i class="iconfont icon-54" ></i>`,`<i class="iconfont icon-928caidan_piaowu"></i>`,`<i class="iconfont">&#xe64e;</i>`],
                islogin:window.localStorage.islogin,

            }
        },
        computed:{
         
            
        },
        updated() {
         
        },
        mounted: function () {
                $('.tianjia').find('i').css({'fontSize':'40px','color':'blue'})
        },
        methods:{
            
        }
        
   
    }
   
   
                    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{margin-left: 20px;
        height:65px;}
    li{float:left;padding:0 5px;background:#ccc;opacity: 0.6;
        border-radius: 5px;}
    li .iconfont{font-size: 40px;color:blue;opacity:1}
    
</style>
