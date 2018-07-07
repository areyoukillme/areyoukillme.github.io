<template>
<div class="tabs">
    
    <div class="tabscontainer">
        <ul>
            <li v-for="(item,index) in goods" @click="tabchange(index)"  :class="{active:active==index}" >{{item}}</li>
        </ul>
    </div>
    <div class="content">
        <div  v-for="(item,index) in content" v-show="index==active" >{{item}}</div>
    </div>
</div>
</template>

<script>
 
    export default{  
        components:{},
        data(){
            return{
               active:1 ,
               goods:["adidas","nike","puma","vans","pick","lining",76,8,9,10,11,12,13,14,15,16,17,18],
               content:["1","2","3","4",5,6,7,8,9,10,11,12,13,14,15,16,17,18]
            }
        },
        computed:{
        
        },
        methods:{
            tabchange(index){
                this.active=index;
            }

        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabs{}
    .tabscontainer{height:50px; width:60px;float:left;
        
    }
    .tabscontainer li{font-size: 20px; background:pink;text-align: center;}
    .content{float:left; font-size: 40px;padding:60px;}
</style>