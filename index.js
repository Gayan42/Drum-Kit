
var numbrOfDrumButtons = document.querySelectorAll(".drum").length;
var audio;
var activeButton ;



for (let index = 0; index < numbrOfDrumButtons; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function (){
        var a = console.log(this.style.color="black");
       console.log(this.innerHTML);
       var b = this.innerHTML;
       //alert(this);
        sound(b);
        
    });
   
}

document.addEventListener("keypress", function(event){
    //alert("Key Presses..!!" + event);
    var keypredded = event.key;
    sound(keypredded);
    animation(keypredded);

    
});


function sound(value){
    switch (value) {
        case "w":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
            case "k":
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
    
        default:
            break;
    }

}

function animation(currentkey){
     activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    //console.log(activeButton.classList); 

    setTimeout( function (){
    activeButton = document.querySelector("."+currentkey);
    activeButton.classList.remove("pressed");
    },100);
}



