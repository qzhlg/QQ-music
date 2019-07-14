module.exports.Api=(req,res)=>{
    res.send("这是一个测试接口")
}

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '123321',
    database : 'zhl'
});
connection.connect((error)=>{
  if(error){
    console.log("数据库连接失败",error)
  }else{
    console.log("数据库连接成功")
  }
});
module.exports.Login = (req,res) => {
  console.log(req.body)
  let {
    username,
    password
  } = req.body
  const $sql=`select * from saturday where username='${username}' and password='${password}'`
  connection.query($sql, function (error, results) {
  if (error) throw error;
  if(results.length){
      res.statusCode=200
      res.json({
        code:1,
        token:{
          iss:"sql",
          time:new Date().getTime(),
          info:"login success!"
        }
      })
  }else{
    res.statusCode=401,
    res.json({
      code:0,
      info:"login failure!"
    })
  }
//   console.log('The solution is: ', results[0].solution); 

});

}
