var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var input = document.querySelector("input[type='number']");
var reset = document.querySelector("#reset");



p1button.addEventListener('click', function(){
  if(p1Score != '5'){
        p1Display.textContent = `${p1Score++}`
        
    }else{
        p1Display.textContent = '5';
        p1Display.classList.add("color");
    }
});


p2button.addEventListener('click', function(){
    if(p2Score != '5'){
        p2Display.textContent = `${p2Score++}`
        
    }else{
        p2Display.textContent = '5';
        p2Display.classList.add("color");
    }
});

reset.addEventListener('click', function(){
    p1Score = '0'
    p2Score = '0'
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Display.classList.remove("color");
    p2Display.classList.remove("color");
});

input.addEventListener('change', function(){
var update = document.querySelector("#update");
  update.textContent = input.value;

})