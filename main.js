button.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest //生成XMLHttpRequest对象
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('说明请求相应都完毕了')
     
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功了')
        //打印请求内容：request.responseText
        console.log(request.responseText)
      }else if(request.status >= 400){
        console.log('说明请求失败了')
      }
    }
  
    
    
  }
  request.open('GET','/yyy')//配置request
  request.send()//发送请求
})
