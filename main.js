function f1(responseText){}
function f2(responseText){}
  
button.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    success: (x)=>{
      f1.call(undefined,x)
      f2.call(undefined,x)
    },
    error: (x) =>{
      console.log(x)
      console.log(x.status)
      console.log(x.responseText)
    }
  })
})
