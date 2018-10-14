
//作用代码  
button.addEventListener('click',(e)=>{
  //window.jQuery.ajax({
  $.ajax({
    url: '/yyy',
    type: 'get',
  //Promise 方法虽然还需要传函数 优点就是不用知道函数名了
  //Promise 方法优点2 可以一直them 对同一个状态多次处理 
  }).them(
    (responseText)=>{
      console.log(responseText)
      return responseText
    },
    (request)=>{console.log('error1'); return '已经处理'}
  ).them(
    //这里是上次处理的结果：return responseTextd
    (这里是上次处理的结果)=>{
      console.log(这里是上次处理的结果)
    },
    (request)=>{console.log('error2')}
  )  
})
