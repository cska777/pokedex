    shuffle()
    
    function shuffle(){
        let allcards = document.getElementsByClassName("lose");
        let random = Math.floor(Math.random()*allcards.length);// selection au hasard d'une carte
        let card = allcards[random];
        card.setAttribute('src',"Assets/jeu/pikachuv3.jpeg")
        }
    

function flip(event){
    let element = event.currentTarget;
        if(element.style.transform == "rotateY(180deg"){
            element.style.transform = "rotateY(0deg)";
        }
        else{
            element.style.transform = "rotateY(180deg";
        }
    }

    

