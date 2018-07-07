<template>
<div>
    <mu-appbar style="width: 100%;" color="" z-depth=0>
      <mu-button flat slot="left" style="fontSize:26px">
         <a href="/">&lt</a> 
      </mu-button>
        <div class="center"><a v-for="(item,index) in items" @click="clicknav(index)" :class="{active:idx==index }" :href="item.url">{{item.name}}</a></div>

    <mu-button flat slot="right"><router-link to="/"<i class="iconfont icon-shouye" style="fontSize:26px"></i></router-link></mu-button>
    </mu-appbar>
     <div class="shuosuo"><input type="text" class="search" placeholder="搜索商品或品牌" /></div>
    <div><router-view /></div>
        

</div>    
</template>

<script>
 
    export default{  
        components:{},
        data(){
            return{
                items:[{name:"分类",url:"#/menu/menugoods"},{name:"品牌",url:"#/menu/menubrand"}],
                idx:0,
                
                
            }
        },
        computed:{
        
        },
        methods:{
            clicknav(index){
                this.idx=index;
            }

        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .center{
        text-align: center;

    }
    a{display:inline-block;padding:0 20px;}
    .active{background:yellow}
    .shuosuo{text-align:center; background:#f3f4f5;}
    .search{
        width:80%;height:40px;
        margin:10px 0;
        font-size: 20px;
        border-radius: 15px;
    }
</style>