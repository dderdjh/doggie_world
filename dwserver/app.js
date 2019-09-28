//dw项目服务器
//引入第三方模块
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");

//数据库连接池
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
  connectionLimit: 20,
  database: "pet"
});

//监听web服务器8080端口
var server = express();
server.listen(9999);

//处理跨域
server.use(cors({
  origin:["http://127.0.0.1:8888","http://localhost:8888"],
  credentials: true
}));
 
//配置session
server.use(session({
  secret: "128位的字符串",
  resave: true,
  saveUninitialized: true,
}));

//配置静态目录
server.use(express.static("public"));

// 登陆路由
server.get("/login",(req,res)=>{
	var u = req.query.uname;
	var p = req.query.upwd;
	var sql = "select id from pet_login where uname = ? and upwd = ?";
	pool.query(sql,[u,p],(err,result)=>{
	 //6.4:判断登录是否成功
	 if(err)throw err;
	 //6.5:将结果返回网页
	 if(result.length==0){
	   res.send({code:-1,msg:"用户名或密码有误"})
	 }else{
	   //获取当前登录用户id
		 var id = result[0].id;
	   //将用户id保存session对象中
		 // uid 当前登录：用户凭证
		req.session.uid = id;
		 console.log(req.session)
		res.send({code:1,msg:"登录成功"});
	 }
	});
})
