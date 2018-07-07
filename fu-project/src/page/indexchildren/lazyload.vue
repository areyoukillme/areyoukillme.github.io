<template>
   <div id="rj">
        <ul id="container">
            <li v-for="list in urllist">
                <img v-lazy="list" />
            </li>
        </ul>
    </div>
</template>

<script>
 
    export default{  
        components:{},
        data(){
            return{
                urllist:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870067125&di=3e0c755005eea2ac8255131fdd9b375e&imgtype=0&src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F25%2F3c%2F50%2F253c50162691af73dc43e85272532e71.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870067124&di=f636f578d96c00c3ad64b12776c17692&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-04%2F5a24ee97b86be.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870067123&di=e486e560cb831d7f283d58a77f943de6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0147885544dbe40000019ae944d59a.jpg%402o.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870067122&di=caed158a0997ed089720a33d2ad16d23&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F58f725478f794.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870067122&di=4aa3e14b46f91bcc9fbd7bcbb70d87a1&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2015%2F03%2F31%2F1427767337_WLDtTLAB.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530870067121&di=398fdb6189b11b98e26dc33c80cd80b5&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201503%2F22%2F20150322172932_f32wJ.jpeg","http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png"]
                                
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
 div{height:400px; overflow:auto;};
 img{display:block; height:200px;width:100%;}
</style>