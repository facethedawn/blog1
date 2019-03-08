const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
  //设置返回格式
  res.setHeader('Content-type','application/json')

  const url = req.url
  req.path = url.split('?')[0]

  // 处理blog
  const blogData = handleBlogRouter(req,res)
  if(blogData) {
    res.end(
      JSON.stringify(blogData)
    )
    return
  }
  
  // 处理user
  const userData = handleUserRouter(req,res)
  console.log(handleUserRouter)
  if(userData) {
    res.end(
      JSON.stringify(userData)
    )
    return
  }

  // 未命中路由 404
  res.writeHead(404,{"Content-type":"text/plain"})
  res.write('404 not found')
  res.end()

}

module.exports = serverHandle

// process.env.NODE_ENV