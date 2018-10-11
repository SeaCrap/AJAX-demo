button.addEventListener('click',(e)=>{
	let request = new XMLHttpRequest //生成XMLHttpRequest对象
  request.open('GET','/yyy')//配置request
	request.send()//发送请求
})
