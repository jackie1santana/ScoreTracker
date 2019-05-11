var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var input = document.querySelector("input[type='number']");
var reset = document.querySelector("#reset");
var winner = document.querySelector(".winner")

p1button.addEventListener('click', function(){
  if(p1Display.textContent != input.value){
        p1Display.textContent = `${p1Score++}`
        
    }else{
        p1Display.textContent = input.value;
        p1Display.classList.add("color");
        winner.innerHTML = 'YAY!! Player 1 YOU WIN!!!'
        winner.classList.add("winCenter");

        setInterval(function(){winner.innerHTML = 'YAY!! Player 2 YOU WIN!!!';
        winner.classList.add("winCenter"); }, 500);

        setInterval(function(){winner.innerHTML = ''; }, 1050);
    }
        
    
});


p2button.addEventListener('click', function(){
    if(p2Display.textContent != input.value){
        p2Display.textContent = `${p2Score++}`
        
    }else{
        p2Display.textContent = input.value;
        p2Display.classList.add("color");

        winner.innerHTML = 'YAY!! Player 2 YOU WIN!!!'
        winner.classList.add("winCenter");

        setInterval(function(){winner.innerHTML = 'YAY!! Player 2 YOU WIN!!!';
        winner.classList.add("winCenter"); }, 500);

        setInterval(function(){winner.innerHTML = ''; }, 1050);
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

//why when i click 2 , i have to click it to 3 to make it activate?
//why the rest wont reset the you win sentence