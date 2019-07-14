const axios =require('axios')
module.exports.Getbannerlist=(req,res)=>{
    const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562986979919&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1"
    axios.get(url,{
        headers:{
        Origin:"https://y.qq.com",
        Referer:"https://y.qq.com/m"
        }
    }).then(result => {
         res.json({
             code:1,
             data:result.data.data
         })
     })

}
module.exports.List=(req,res)=>{
    const url="https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI4519677147421226&g_tk=56428877&loginUin=2963289482&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A4%2C%22offset%22%3A0%2C%22num%22%3A20%2C%22period%22%3A%222019-07-14%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D"
    axios.get(url,{
        headers:{
            Origin:"https://y.qq.com",
            Referer:"https://y.qq.com/m"
        }
    }).then(result =>{
        
        res.json({
            code:1,
            data:result.data.detail.data.data
        })
    })
 
}