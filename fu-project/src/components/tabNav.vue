<template>
<div id="tabNav">
  <ul class="tabNav">
    <li v-for="(item,index) in tabNav" @click="clickNav(index)" :class="{active:index==idlist}"><a :href="item.href">{{item.name}}</a></li>
  </ul>
  <div class="gt">&gt</div>
</div>

</template>

<script>
export default {
  data(){
    return {
      
      idlist:"",
      tabNav:[{name:"今日推荐",href:'#/today'},{name:"时尚",href:'#/fashion'},{name:"美妆",href:'#/goodlist'},{name:"母婴",href:'#/lazyload'},{name:"家电",href:'#'},{name:"家居",href:''},{name:"国际",href:"#/"},{name:"生活",href:""}]
    }
  },
  methods:{
    clickNav(index){
      
      window.sessionStorage.idlist=index;
      this.idlist=window.sessionStorage.idlist;


    }
  },
  mounted(){
      this.idlist=window.sessionStorage.idlist|0
 
           
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tabNav{
  background: ;
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
  padding-right: 10px;
}
#tabNav .tabNav{
  display: flex;
  width: 95%;
  height: 40px;
  font-size: 14px;
  justify-content: space-around;
  line-height: 40px;
}
#tabNav .tabNav li{
  display: flex;
  padding: 0 5px;
  font-size: 12px;
}
#tabNav .tabNav li.active{
  color: #F15C8D;
  border-bottom: 2px solid #F15C8D;
}
a{color:black}
.gt{font-size:16px;line-height: 40px;}


</style>
