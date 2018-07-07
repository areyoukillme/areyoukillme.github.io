<template>
      <div class="endtime" >
          <a :href="url"><slot></slot></a>
          <div v-show="!flag" class="show">{{time}}</div>
          <div v-show="flag" class="show">{{msg}}</div>
      </div>
</template>
<script>
   export default{
       data () {
           return {
               time : '',
               flag : false
           }
       },
       mounted () {
           let time = setInterval(()=>{
               if(this.flag == true){
                // 清除并隐藏
                   clearInterval(time);
               }
               this.timeDown()
           },1000)
       
              
                                              
       },
       updated(){

           var parent=$('.endtime').parent();
           var child=$('.endtime');
           var top=(parent.height()-child.height())/2;
           var left=(parent.width()-child.width())/2;

           $('.endtime').parent().css('position','relative')
           $('.endtime').css({
              position:'absolute',
             
              top:top,
              left:left
           })
         
       },
       props : ['endTime','msg',],
       methods : {
           timeDown () {
               const endTime = new Date(this.endTime)
               const nowTime = new Date();
               let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
               let d = this.formate(parseInt(leftTime/(24*60*60)))
               let h = this.formate(parseInt(leftTime/(60*60)%24))
               let m = this.formate(parseInt(leftTime/60%60))
               let s = this.formate(parseInt(leftTime%60))
               if(leftTime <= 0){
                   this.flag = true
                   this.$emit('time-end')
               }
               this.time = `${d}天${h}小时${m}分${s}秒`
           },
           formate (time) {
               if(time>=10){
                   return time
               }else{
                   return `0${time}`
               }
           },
       
       },
   }
</script>  
<style type="text/css" scoped lang="scss">
    .endtime{font-size: 20px;color:red;text-align: center;
     opacity:0.98;
     height:80px;
      background:pink;
      width:240px;
      color:#666;
    }
    p{color:black;font-size:16px;font-weight: bold;}
    .show{color:red;}
</style>