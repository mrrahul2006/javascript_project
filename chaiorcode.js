const clock=document.getElementById('clock')
//document.querySelector('#clock')
// let date=new Date()
// console.log(date.toLocaleDateString())

setInterval(function(){
let date=new Date()
//console.log(date.toLocaleDateString())
clock.innerHTML=date.toLocaleTimeString();
},1000)