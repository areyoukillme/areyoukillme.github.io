<template>
    <div id="countDown"></div>
</template>

<script>
 
    export default{  
        components:{},
        data(){
            return{ 
                
            }
        },
        computed:{
        },
        methods(){
            console.log($)
        },
        props:['d'],
        methods:{
            timer(){
                var countDown = document.getElementById('countDown');
                

                // 1）指定结束时间
          

                function cb(){
                
                countDown.style.display = 'none';
                }
                countDown.innerHTML = showTime(this.d,cb);
                var timer = setInterval(function(){
                    countDown.innerHTML = showTime(this.d,cb);
                },1000);
                function showTime(end){
                    // 2）不断拿当前时间跟结束时间对比，计算差值
                    var offset = Date.parse(end) - Date.now();

                    // 3）把差值转换成《剩余时间》
                    // 毫秒->秒
                    offset = parseInt(offset/1000);

                    // 5）倒计时结束时
                    if(offset <= 0){
                        // * 停止定时器
                        clearInterval(timer);
                        // * 隐藏倒计时
                        countDown.style.display = 'none';
                    }

                    var sec = offset%60;//剩余秒数
                    var min = parseInt(offset/60)%60;//剩余分数
                    var hour = parseInt(offset/60/60)%24;//剩余小时数
                    var day = parseInt(offset/60/60/24);//天数

                    // 补0操作
                    sec = sec<10 ? '0'+sec : sec;
                    min = min<10 ? '0'+min : min;
                    hour = hour<10 ? '0'+hour : hour;

                    return day + '天' + hour + '时' + min + '分' + sec + '秒'

                    // console.log(offset)
                }
            }
        }
  
   
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
