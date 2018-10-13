button.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest
 // JS 设置请求第一部分
 // 请求方式 协议 路径 HOTS   
  request.open('POST','yyy')
 
  //JS 设置请相应 header(第二部分)  
  request.setRequestHeader('mrli','18')
  request.setRequestHeader('Content-Type','x-www-form-urlencocoded')  
  
  //请求 header 一般没有第四部分 但是可以设置
  //get请求 chrome默认不展示第四部分 POST可以展示
  request.send('这是我设置的第四部分')
  
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        let string = request.responseText
        let object = window.JSON.parse(string)
      }else if(request.status >= 400){
        console.log('说明请求失败了')
      }
    }
  
    
    
  }

})
