const handleUseRouter = (req,res)=> {
  const method = req.method
  const url = req.url

  // 登录
  if(method==='POST' && req.path==='/api/blog/login') {
    return '这是登录的接口'
  }
}
module.exports = handleUseRouter