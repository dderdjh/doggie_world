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
  port: "3306",
  connectionLimit: 20,
  database: "pet"
});

//监听web服务器8080端口
var server = express();
server.listen(8080);

//处理跨域
server.use(cors({
  origin: ["http://127.0.0.1:8888","http://localhost:8888"],
  credentials: true,
}));

//配置session
server.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true,
}));

//配置静态目录
server.use(express.static("public"));