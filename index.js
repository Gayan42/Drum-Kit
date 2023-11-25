
var numbrOfDrumButtons = document.querySelectorAll(".drum").length;
var houseKeeper = {name:"Gayan", age:32, nic:"913411820V", hobbies:["travel","music"]};
var audio;
var activeButton ;

function HouseKeeperConctruct (name,age,nic,hobbies){
this.name = name;
this.age = age;
this.nic = nic;
this.hobbies = hobbies;
this.clean = function (){
    alert("Cleaning in progress");
}
}

var houseKeeper1 = new HouseKeeperConctruct("Perera",33,"913411821V",["Cycling","Fishing"]);

alert("Hi " +houseKeeper.name + " age " + houseKeeper.age +" hobbies " + houseKeeper.hobbies[0] + " and " + houseKeeper.hobbies[1]);
alert("Hi2 " +houseKeeper1.name + " age " + houseKeeper1.age +" hobbies " + houseKeeper1.hobbies[0] + " and " + houseKeeper1.hobbies[1] + houseKeeper1.clean());
houseKeeper1.clean();

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
    
        default:
            break;
    }

}

function animation(currentkey){
     activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    console.log(activeButton.classList); 

    setTimeout( function (){
        activeButton = document.querySelector("."+currentkey);
        activeButton.classList.remove("pressed");
    },100);
}



