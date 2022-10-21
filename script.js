function comparador() { 
	return Math.random() - 0.5; 
}

let NumberOfCards
const ContainerDiv = document.querySelector(".game-container")
let CardFronts= ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','unicornparrot.gif','tripletsparrot.gif','revertitparrot.gif']
let CardList =[]
let FirstCard = ""
let SecondCard = ""
let EndgameCounter = 0
let PlaysCounter = 0

function SelectNumberOfCards() {


    NumberOfCards = Number(prompt("Com quantas cartas iremos jogar"))
    CardFronts.sort(comparador)

    if (NumberOfCards < 4 || NumberOfCards > 14  || NumberOfCards % 2 !== 0){
        return SelectNumberOfCards()
    }
    else{
        i = 0
            while (i  < NumberOfCards/2){
                CardList.push(CardFronts[i]);
                CardList.push(CardFronts[i]);
                i++
        }
    }
    SummonCards()
}


function SummonCards(){
    CardList.sort(comparador)
    for (let i = 0; i < CardList.length; i++) {
        ContainerDiv.innerHTML +=  
    `<div class="card" id=card-${CardList[i]}    onclick="FlipCard(this)">
    <div class="card-front"><img src="./assets/${CardList[i]}""></div>
    <div class="card-back"><img src="./assets/card-back.png"></div>
    </div>`
    } 
}

function FlipCard(card){
        if(card.className.includes("fliped")) {
            return;

        }
        if(FirstCard === ""){
        card.classList.add("fliped")
        FirstCard = card;
        PlaysCounter += 1
    }
        else if(SecondCard === ''){
            card.classList.add("fliped")
            SecondCard = card;
            PlaysCounter += 1
            CheckCards()
        }
        
}

function CheckCards(){
    const FirstParrot = FirstCard.getAttribute("id")
    const SecondParrot = SecondCard.getAttribute("id")
    if (FirstParrot === SecondParrot){
        FirstCard.classList.add("matched")
        SecondCard.classList.add("matched")
        FirstCard = ""
        SecondCard = ""
        EndgameCounter += 2
        if(EndgameCounter === NumberOfCards) {
        setTimeout(() =>{

            EndGame()
        },2000 )
        }


    }
    else {
        setTimeout(() =>{
        FirstCard.classList.remove("fliped")
        SecondCard.classList.remove("fliped")
        FirstCard = ""
        SecondCard = ""

        },1000 )
        }
}

function EndGame(){
    alert(`"fim de jogo você ganhou em ${PlaysCounter} jogadas"`)

}