//Promise套路
window.Promise =function(fn){
  //...
  return {
    them: function() {} 
  }
}

window.jQuery = function(){}

window.$ = window.jQuery

window.jQuery.ajax = function({url,method,body,headers}){
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest
    request.open(method,url)
    for(let key in headers){
      let value = headers[key]
      request.setRequestHeader(key,value)
    }
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined,request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined,request) 
        }
      }
    }
    request.send(body)   
  })
}

//使用方代码
button.addEventListener('click',(e)=>{
 
  window.jQuery.ajax({
    url: '/yyy',
    method: "get",
   
    //设置 headers 传入一个 headsers (对象)
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'mrli': '18'
    }
  }).them(
    (text)=>{console.log(text)}, 
    (request)=>{console.log(request)}
  )
})
