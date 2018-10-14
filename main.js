// JQuery 封装示例
window.jQuery = function(nodeOrselector){// 一个节点或字符串
  let nodes = {} //传入的是一个节点 就构造一个 nodes 对象
  nodes.addClass = function(){} //给 nodes 对象添加 Class
  nodes.html = function(){} //添加 html 用 html 的 API 
  return nodes
}
//给 jQuery 添加一个 ajax 的属性
//内存：jQuery 存一个地址 地址链接一个函数
//函数内部有个 ajax 属性 又存了一个地址
//地址链接了另一个函数 




//封装 ajax 函数
window.jQuery.ajax = function(url, method,body,successFn,failFn){
  let request = new XMLHttpRequest
  
  request.open(method,url)
  
  request.onreadystatechange = ()=>{
    
    if(request.readyState === 4){
     
      if(request.status >= 200 && request.status < 300){
        //成功之后调用成功函数
        successFn.call(undefined,request.responseText)
      
      }else if(request.status >= 400){
        //失败就调用失败函数
        failFn.call(undefined,request) 
      }
    }
  }
  request.send(body)
}

// 存同一个地址
window.$ = window.jQuery

//逻辑代码
button.addEventListener('click',(e)=>{
  
  window.jQuery.ajax(
    '/yyy',
    'POST',
    'a=1&b=2',
    (responseText)=>{console.log(1)},
    (request)=>{console.log(2)}
  )
  
  
  
  
  
  
  
  
  

  
  
//下面这些是需要封装的	
//let request = new XMLHttpRequest
//request.open('POST','yyy')
//request.send()
//request.onreadystatechange = ()=>{
//  if(request.readyState === 4){
//    if(request.status >= 200 && request.status < 300){
//      let string = request.responseText
//      let object = window.JSON.parse(string)
//      console.log(object)
//    }else if(request.status >= 400){
//    }
//  }
//}
})
