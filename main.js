
//作用代码  
button.addEventListener('click',(e)=>{
  //window.jQuery.ajax({
  $.ajax({
    url: '/yyy',
    type: 'get',
  //Promise 方法虽然还需要传函数 优点就是不用知道函数名了
  }).them(
    (responseText)=>{console.log(responseText)},
    (request)=>{console.log(request)}
  )  
})
