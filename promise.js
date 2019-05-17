var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 1;
var p2Score = 1;
var input = document.querySelector("input[type='number']");
var reset = document.querySelector("#reset");
var winner = document.querySelector(".winner")



p1button.addEventListener('click', function(){
  if(p1Score != input.value  || p1Score < input.value){
        p1Display.textContent = `${p1Score++}`
        
    }else{
        winner.style.display = 'block';
        p1Display.textContent = input.value;
        p1Display.classList.add("color");
        
       setTimeout(function(){winner.innerHTML = 'YAY!! Player 1 YOU WIN!!!';
        winner.classList.add("winCenter"); }, 100);

        setTimeout(function(){winner.innerHTML = ''; }, 3000);
    }
        
    
});


p2button.addEventListener('click', function(){
    if(p2Score != input.value  || p2Score < input.value){
        p2Display.textContent = `${p2Score++}`
        
      
    }else{
        winner.style.display = 'block';
        p2Display.textContent = input.value;
        p2Display.classList.add("color");
        

        setTimeout(function(){winner.innerHTML = 'YAY!! Player 2 YOU WIN!!!';
        winner.classList.add("winCenter"); }, 100);

        setTimeout(function(){winner.innerHTML = ''; }, 3000);

        
    }
});

reset.addEventListener('click', function(){
  
    p1Score = '0'
    p2Score = '0'
    p1Display.textContent = '0';
    p2Display.textContent = '0';
    p1Display.classList.remove("color");
    p2Display.classList.remove("color");
    update.textContent = '';
    winner.style.display = 'none';
    
}

);

input.addEventListener('change', function(){
var update = document.querySelector("#update");
  update.textContent = input.value;
}
)


//toast

$('.toast').toast('show')


$(".x").click(function(){
    $(".toast").toast('hide')
})

var x = document.querySelector(".x");

x.addEventListener('click', function(){
    x.style.display = 'none'
})
