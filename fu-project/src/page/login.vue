<template>
<div>
    <div class="logo"><img :src="logosrc" alt="" /><a href="/"><span>x</span></a></div>
    <div class="J-mobile-fast-login">
                <div class="ui-form-item">
                    <label for="mobile">手机号</label>
                    <input name="mobile" type="tel" placeholder="请输入手机号" maxlength="11" class="J-mlogin-ipt J-mlogin-ipt-mobile" marsseadinput="">
                    <a href="#" class="m-mlogin-clear J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                </div>
                <div class="ui-form-item ui-form-item-r">
                    <label for="authcode">验证码</label>
                    <input class="J-mlogin-ipt J-mlogin-ipt-authcode" name="authcode" type="tel" placeholder="请输入验证码" maxlength="6" marsseadinput="">
                    <a href="#" class="m-mlogin-clear show-btn-position J-mlogin-clear" style="display:none">
                        <span class="clear_wrap">
                            <span class="clear"></span>
                        </span>
                    </a>
                    <button class="J-mlogin-get-login-authcode disabled" type="button">获取验证码</button>
                </div>
                <div class="submit-box">

                    
                        <a href="#/" class="J-login-models-submit " @click="sendlogin">手机号注册登录</a>
                    

                    <p class="mlogin-footer-tips" id="J-footer-tips">
                        
                            若您输入的手机号未注册，将会进入注册流程。注册即视为同意<a href="//viva.vip.com/act/m/service_provision_20161116?wapid=vivac_503">《唯品会服务条款》</a>、<a href="//viva.vip.com/act/m/user_protection_policy_20160809?wapid=vivac_385">《隐私条款》等</a>

                        
                    </p>

                </div>
            </div>
            <fieldset class="J-login-models-m">
            <legend>或</legend>
            
                <a >密码登录</a>
            
            
            <div class="without-account">
                
                    <span class="without-account-tips J-mlogin-login-weixin">微信账号登录</span>
                
            </div>
        </fieldset>
     </div>           
</template>

<script>
 
    export default{  
        components:{},
        data(){
            return{
                lgbgsrc:'../../static/imgs/logobg.jpg',
                logosrc:'../../static/imgs/logo.png'
            }
        },
        computed:{
            
        },
        methods:{
            sendlogin(){
                // this.$store.state.islogin = true;
                var storage=window.localStorage;
                storage.islogin=true;
            }
        }
  
   
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logo{
        height:150px;
        background:url('../../static/imgs/logobg.jpg');
        position:relative;
    }
    .logo img{width:100px;margin:auto auto;position:absolute;top:40%;left:35% }
    .logo span{position:absolute;right:4px;font-size: 20px;}
    .ui-form-item{height:60px;padding-left: 40px;}
    .submit-box{padding:25px;text-align: center;}
    .submit-box .J-login-models-submit {display:block;height:40px;line-height: 40px;background:#ee9eca;color:#ff4081 }
    .mlogin-footer-tips a{color:blue}
    legend{text-align: center;};
   .J-login-models-m {text-align: center;}
    
   .J-login-models-m a{display:block;text-align: center;}
    .J-login-models-m span{display:block;text-align: center;}
    
</style>
