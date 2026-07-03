//generate a random color
const randomcolor=function(){
  const hex="0123456789ABCDEF"
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}



let intervalId;
const StartChanging_Color=function(){
  function changebgcolor(){
    document.body.style.backgroundColor=randomcolor()
  }
  if(!intervalId){
    intervalId=setInterval(changebgcolor,100)
  }
};

const StopChangingColor=function(){
  clearInterval(intervalId);
  intervalId=null;
}
document.querySelector('#start').addEventListener('click',StartChanging_Color)

document.querySelector('#stop').addEventListener('click',StopChangingColor)