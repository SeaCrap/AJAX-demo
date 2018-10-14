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
window.jQuery.ajax = function(options){//options：选项  一般叫这个名字
  //分别获取各个参数
  let url = options.url
  let method = options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn
  
  let request = new XMLHttpRequest
  request.open(method,url)
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        
        //此处是callback 
        // ① 调用函数successFn并传参request.responseText
        successFn.call(undefined,request.responseText)
      
      }else if(request.status >= 400){
        failFn.call(undefined,request) 
      }
    }
  }
  request.send(body)
}

// 存同一个地址
window.$ = window.jQuery

//定义两个函数
function f1(responseText){}
function f2(responseText){}

//使用方代码
button.addEventListener('click',(e)=>{
 
  window.jQuery.ajax({
    url: '/yyy',
    method: "get",
    successFn: (x)=>{
      //调用两个函数
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    failFn: (x)=>{
      console.log('失败')
      console.log(x.responseText)
      console.log(x.status)

    }
  
  })
  
  
  
  
  
  
  
  
  

  
  
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
