var numberOfButton = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButton;i++)  {

document.querySelectorAll(".drum")[i].addEventListener("click" ,function() 
{
    
    var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML); 
   buttonAnimation(buttonInnerHTML);
 


});

}

document.addEventListener("keypress",function(event){

makeSound(event.key);
buttonAnimation(event.key);

});


function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var snare= new Audio("sounds/tom-1.mp3");
            snare.play();
            break;


         case "j":
             var snare= new Audio("sounds/tom-2.mp3");
             snare.play();
             break;
        
        case "k":
            var snare= new Audio("sounds/tom-3.mp3");
            snare.play();
            break;
        
        case "l":
            var snare= new Audio("sounds/tom-4.mp3");
            snare.play();
            break;
        default :
        console.log(buttonInnerHTML);
                



}};



function buttonAnimation(curentKey){
    var activeButton=document.querySelector("."+curentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
       },100)   ;
}