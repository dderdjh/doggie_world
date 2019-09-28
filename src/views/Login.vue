<template>
	<div id="Login">			
		<div v-if="cut_lg==1" >
			<!-- 快捷登陆页面 -->
			<div class="quick_login">
				<img src="../assets/img/common_back.png" @touchend="back">
				<h3>快捷登陆</h3>
			</div>	
			<div class="login_verify">
				<div class="phone_input">
					 手&nbsp;&nbsp;&nbsp;机 :
					 <input type="text" placeholder="请输入手机号" v-model="code_phone"/>
					 <span v-show="err_hint">手机号输入有误！</span>
				</div>
				<hr>
				<div class="code_input">
					验证码 :
					<input type="text" placeholder="请输入验证码"  />
					<a href="javascript:;" @click="get_auth_code" v-if="code">获取验证码</a>
					<a href="javascript:;" v-else>{{timer}}s后重新获取</a>
				</div>
				
			</div>
			<div class="id_login">
				<p class="left" @touchend="cut_login">用账号密码登陆</p>
				<p class="right"  @touchend="verify_hint">获取不到验证码?</p>

			</div>
			<button class="Free_login" type="button">免注册登陆</button>
		</div>
		<div v-else-if="cut_lg==2">
			<div class="quick_login">
				<img src="../assets/img/common_back.png"  @touchend="cut_login">
				<h3>账号登陆</h3>
			</div>	
			<div class="login_verify">
				<div class="phone_input">
					 手&nbsp;&nbsp;&nbsp;机 :
					 <input type="text" placeholder="请输入手机号"/>
				</div>
				<hr>
				<div class="code_input">
					密&nbsp;&nbsp;&nbsp;码 :
					<input type="text" placeholder="请输入密码"/>
				</div>
				
			</div>
			<div class="id_login">
				<p class="right" @touchend="forget_pwd">忘记密码?</p>
			</div>
			<button class="Free_login" type="button">确定</button>
		</div>
		<div v-else>
			<div class="quick_login">
				<img src="../assets/img/common_back.png" @touchend="forget_pwd" >
				<h3>修改密码</h3>
			</div>	
			<div class="login_verify">
				<div class="phone_input">
					 手&nbsp;&nbsp;&nbsp;机 :
					 <input type="text" placeholder="请输入手机号" v-model="code_phone"/>
				</div>
				<hr>
				<div class="code_input">
					验证码 :
					<input type="text" placeholder="请输入验证码"/>
					<a href="javascript:;" @touchend="get_auth_code" v-if="code">获取验证码</a>
					<a href="javascript:;" v-else>{{timer}}s后重新获取</a>
				</div>
				
			</div>
			<div class="id_login">
				<p class="right"  @touchend="verify_hint">获取不到验证码?</p>
			</div>
			<button class="Free_login" type="button">下一步</button>
		</div>
		
		<!-- 底部 -->
		<div class="login_bottom" v-show="cut_lg<3">
			<div class="else_login">
				<p class="left"></p>
				其他登陆方式
				<p class="right"></p>
			</div>
			<div class="else_login_img">
				<img src="../assets/img/short_cut_weixin_login.png" alt="">
				<img src="../assets/img/short_cut_qq_login.png" >	
				<img src="../assets/img/short_cut_alipay_login.png">
			</div>
		</div>
		<!-- 用户点击获取不到验证码时的提示 -->
		<div class="not_get_verify" v-show="hint_show" >
				<div >
					<h3>收不到验证码 ?</h3>
					<p>1.请确认当前手机号填写正确</p>
					<p>2.请检查短信是否被手机安全软件拦截</p>
					<p>3.手机信号若时,收到短信事件略长,请稍后</p>
				</div>	
				<p class="not_get_verify_p" @touchend="verify_hint">好的
				</p>
		</div>
	</div>
 
  </template>

<script>
	export default{
		data(){
			return {
				hint_show:false,
				cut_lg:1,
				timer:60,
				code:true,
				code_phone:'',
				err_hint:false
			}	
		},
		methods:{
			back(){
				this.$router.push("/")
			},
			verify_hint(){
				if(this.hint_show == false){
					this.hint_show = true
				}else{
					this.hint_show = false
				}
			},
			
			forget_pwd(){
				if(this.cut_lg == 2){
					this.cut_lg = 3
				}else{
					this.cut_lg = 2
				}		
			},
			cut_login(){
				if(this.cut_lg == 1){
					this.cut_lg = 2
				}else{
					this.cut_lg = 1
				}
			},
			get_auth_code(){
				if( /^1[3-9]\d{9}$/.test(this.code_phone) == true ){
					this.err_hint = false
					if(this.timer==60){
						this.code = false;
						this.timer = 59;
						var n = setInterval(()=>{
							this.timer--;
							if(this.timer ==0){
								clearInterval(n)
								this.code = true;
								this.timer = 60;
							}
						},1000)
					}
				}else{
					this.err_hint = true
				}
				
			},
			login(){
				
			}
			
		}
	}
</script>

<style scoped="scoped">
	#app{
		height: 50rem;
		background-color:#F0F0F0;
	}
	a{
		text-decoration: none;
		color: chocolate ;
	}
	input{
		outline: none;
		border: 0;
	}
	.quick_login{
		height: 2.7rem;
		line-height: 2.7rem;
		text-align: center;
		background: #fff;
		padding-bottom: 1rem;
	}
	.quick_login img{
		height: 2.7rem;
		width: 2.7rem;
		float: left;
	}
	.quick_login h3{
		margin-right: 1.5rem;
	}
	.login_verify{
		height: 6.5rem;
		margin-top: 1.5rem;
		background: #FFFFFF;
	}
	.login_verify .phone_input{
		height: 2.7rem;
		line-height: 3.2rem;
		margin-left: 0.5rem;
	}
	.login_verify .phone_input span{
		font-size: 0.8rem;
		color: red;
		font-weight: 600
	}
	.login_verify .code_input{
		height: 3rem;
		line-height: 2rem;
		margin-left: 0.5rem;
	}
	.login_verify input{
		margin-left: 1rem;
		caret-color: red;
	}
	
	.login_verify a{
		float:right;
		background:#CACACA;
		color: #FF4500;
		border-radius: 0.3125rem;
		font-size: 0.8rem;
		width: 5.5rem;
		text-align: center;
		margin-right: 0.5rem;
	}

	.login_verify hr{
		border:0.05rem solid #F0F0F0;
	}
	.id_login{
		height: 3rem;
		line-height: 3rem;
		padding: 0 0.8rem;
		font-size:0.93rem ;
		font-weight: 600;
		color: chocolate;
	}
	.id_login .left{
		float: left;
		margin: 0;
	}
	.id_login .right{
		float: right;
		margin: 0;
	}
	.Free_login{
		border: 0;
		color: #FFF;
		background:orangered;
		width: 94%;
		margin-left: 3%;
		margin-top: 0.5rem;
		height: 2.55rem;
		border-radius: 0.5rem;
		font-size:0.96rem ;
		font-weight: 700;
	}
	.else_login{
		margin-top: 15.5rem;
		text-align: center;
		color: #808080;
		font-size: 0.87rem;
		padding: 0 3.125rem;
	}
	.else_login .left{
		float: left;
		border: 0.06rem solid #CACACA;
		width: 5rem;
		margin-top:0.5rem;
	}
	.else_login .right{
		float: right;
		border:0.06rem solid#CACACA;
		width: 5rem;
		margin-top:0.5rem;
	}
	.else_login_img{
		width: 100%;
		height: 7rem;
		display: flex;
		justify-content: space-around;
		margin-bottom: 0rem;
		padding: 0 3rem;
		box-sizing: border-box;
	}
	.else_login_img img{
		width: 3.5rem;
		height: 3.5rem;
	}
	
	.not_get_verify{
		position: fixed;
		width: 76%;
		top: 35%;
		left: 12%;
		height: 35%;
		border-radius:1rem ;
		background-color:#FFFFFF;
		overflow: hidden;
		margin: 0;
		padding: 0;
		z-index: 100;
	}
	.not_get_verify div{
		text-align: center;
		box-sizing: border-box;
		padding:0 1.5rem ;
		font-size: 0.9375rem;
		font-weight: 500;
		border-bottom: 0.065rem solid #DDDDDD;
	}
	.not_get_verify .not_get_verify_p{
		width: 100%;
		height: 3rem;
		text-align: center;
		background-color:#fff;
		font-size: 1.2rem;
		font-weight: 600;
		color: green;
		padding: 0;
		margin: 0;
		border-radius:0 0 1rem 1rem;
		line-height: 3rem;
		}
	
	.not_get_verify .not_get_verify_p:active{
		background: #2d2d2d;
		opacity: 0.9;
		border: 0;
	}
	.login_show{
		display: block;
	}
	
	.login_hide{
		display: none;
	}
</style>
