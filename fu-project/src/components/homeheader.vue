<template>
   <div class="indexhead">
       <div class="login">
            <div>
                <a href="#/login" v-if="!islogin">登录</a>
                <a href="" v-if="islogin"><i class="iconfont icon-jingyu"></i></a>
            </div>
        </div>
       <div class="search"><input type="text" :placeholder="holder[count]" /></div>
       <div class="menu">
            <a href="#/menu">
                <svg class="icon" aria-hidden="true" style="font-size:24px color:black">
                  <use xlink:href="#icon-caidan"></use>
                </svg>
            </a>
        </div>
   </div>
</template>

<script>
    export default{
        data(){
            return{
                count:0,
                holder:["大家正在搜急救包","大家正在搜索3级头","大家正在搜索98k"],
                islogin:window.localStorage.islogin,
            }
        },
        computed:{
         
        },
        mounted: function () {
            this.$nextTick(function () {
                setInterval(this.timer, 4000);
            })
        },
        methods: {
         timer: function () {
                if (this.count < 3) {
                    this.count++;
                }
                if(this.count>2){
                    this.count=0;
                }
            }
        },
    }
    
</script>
    
<style scoped>
    .indexhead{
        display: flex;
        height:40px;
        justify-content: space-around;
        background:pink;
        align-items: center;
        .search{
        display:flex;  
        width:200px;
        justify-content: space-around;         
        }
    }
input{display:block;height:25px;width:270px; border-radius: 10px;}
   
    
   

</style>