button.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest
 // JS 设置请求第一部分
 // 请求方式 协议 路径 HOTS   
  request.open('POST','yyy')
 
  //JS 设置请求 header(第二部分)  
  request.setRequestHeader('mrli','18')
  request.setRequestHeader('Content-Type','x-www-form-urlencocoded')  
  
  //请求 header 一般没有第四部分 但是可以设置
  //get请求 chrome默认不展示第四部分 POST可以展示
  request.send('这是我设置的第四部分')
  
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      
      //获取响应 状态(status 和 statusText)
      console.log(request.status)
      console.log(request.statusText)
     
      if(request.status >= 200 && request.status < 300){
        
        //获取所有响应 header
        console.log(request.getAllResponseHeaders())
        // 获取响应 header 中的 content-tepe
        // 不知道为什么去掉 S 提示错误！
        console.log(request.getAllResponseHeader('Content-Type'))
        
        //获取响应 header 第四部分
        //删除上边错误才会显示这里
        console.log(request.responseText)
        
        let string = request.responseText
        let object = window.JSON.parse(string)
      }else if(request.status >= 400){
        console.log('说明请求失败了')
      }
    }
  
    
    
  }

})
