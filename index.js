var num=document.querySelectorAll(".sounds").length
for(var i=0;i<num;i++){
    document.querySelectorAll(".sounds")[i].addEventListener("click",function(){
        var btn=this.innerHTML
        switch(btn){
            case 'd':var audio=new Audio("sounds/dog.mp3")
            audio.play();
            console.log("d")
                break
            case 'a':var audio=new Audio("sounds/cat.mp3")
            audio.play();
            console.log("a")
                break
            case 'i':var audio=new Audio("sounds/lion.mp3")
            audio.play();
            console.log("i")
                break
            case 's':var audio=new Audio("sounds/fox.mp3")
            audio.play();
            console.log("s")
                break
            case 'y':var audio=new Audio("sounds/frog.mp3")
            audio.play();
            console.log("y")
                break
            case 'm':var audio=new Audio("sounds/cow.mp3")
            audio.play();
            console.log("m")
                break
            case 'e':var audio=new Audio("sounds/goat.mp3")
            audio.play();
            console.log("e")
                break
        }
    })
}


document.addEventListener("keypress",function(e){
    var key=e.key.toLowerCase()
    switch(key){
        case "d":var audio=new Audio("sounds/dog.mp3")
        audio.play();
        console.log("d")
            break
        case 'a':var audio=new Audio("sounds/cat.mp3")
        audio.play();
        console.log("a")
            break
        case 'i':var audio=new Audio("sounds/lion.mp3")
        audio.play();
        console.log("i")
            break
        case 's':var audio=new Audio("sounds/fox.mp3")
        audio.play();
        console.log("s")
            break
        case 'y':var audio=new Audio("sounds/frog.mp3")
        audio.play();
        console.log("y")
            break
        case 'm':var audio=new Audio("sounds/cow.mp3")
        audio.play();
        console.log("m")
            break
        case 'e':var audio=new Audio("sounds/goat.mp3")
        audio.play();
        console.log("e")
            break
    }
})

