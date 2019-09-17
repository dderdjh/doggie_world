<template>
	<div id="app">			
		<div class="quick_login">
			<img src="../assets/img/common_back.png" >
			<h3>快捷登陆</h3>
		</div>	
		<div class="login_verify">
			<div class="phone_input">
				 手&nbsp;&nbsp;&nbsp;机 :
				 <input type="text" placeholder="请输入手机号"/>
			</div>
			<hr>
			<div class="code_input">
				验证码 :
				<input type="text" placeholder="请输入验证码"/>
				<a href="">获取验证码</a>
			</div>
			
		</div>
		<div class="id_login">
			<a class="left" href="">用账号密码登陆</a>
			<a class="right" href="">获取不到验证码?</a>
		</div>
		<button class="Free_login" type="button">免注册登陆</button>
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
</template>

<script>
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
	.login_verify .code_input{
		height: 3rem;
		line-height: 2rem;
		margin-left: 0.5rem;
	}
	.login_verify input{
		margin-left: 1rem;
		
	}
	.login_verify a{
		float:right;
		background:#CACACA;
		color: #fff;
		border-radius: 0.3125rem;
		font-size: 0.92rem;
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
	}
	.id_login .left{
		float: left;
	}
	.id_login .right{
		float: right;
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
</style>
