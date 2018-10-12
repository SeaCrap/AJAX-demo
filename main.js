button.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest //生成XMLHttpRequest对象
  request.open('GET','http://mschen.com:8802/yyy')//配置request
  request.send()//发送请求
  
  //监听readystate 事件
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
     // console.log('说明请求相应都完毕了')
     
      if(request.status >= 200 && request.status < 300){
       // console.log('说明请求成功了')
        //打印请求内容：request.responseText
        console.log('1. 服务器返回符合的字符串是')
        console.log(request.responseText)
        
        let string = request.responseText
        //把服务器返回的字符串
        //转换为符合 JS 对应的值(这里是对象。有可能返回的是数组)
        let object = window.JSON.parse(string)
        console.log('2. 打印 object 的类型是') 
        console.log(typeof object)
        console.log('3. 打印出 object 是')
        console.log(object)
        
        console.log('4. 打印 onject.note 是')
        console.log(object.note)
        
        console.log('5.打印 object.note.from 是')
        console.log(object.note.from)
     
      }else if(request.status >= 400){
        console.log('说明请求失败了')
      }
    }
  
    
    
  }

})
