const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target==='grey'){
      body.style.backgroundcolor=e.target.id;
    }
    if(e.target==='white'){
      body.style.backgroundcolor=e.target.id;
    }
    if(e.target==='blue'){
      body.style.backgroundcolor=e.target.id;
    }

  });
});
