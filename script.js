function comparador() { 
	return Math.random() - 0.5; 
}

let NumberOfCards
const ContainerDiv = document.querySelector(".game-container")
const CardFronts= ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','unicornparrot.gif','tripletsparrot.gif','revertitparrot.gif']
let CardList =[]
let SelectedCards = []


function SelectNumberOfCards() {


    let NumberOfCards = Number(prompt("Com quantas cartas iremos jogar"))

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
    `<div class="card" onclick="FlipCard(this)">
    <div class="card-front"><img src="./assets/${CardList[i]}""></div>
    <div class="card-back"><img src="./assets/card-back.png"></div>
    </div>`
    } 
}

function FlipCard(card){
    card.classList.add("clicked")
    card.classList.add("checked")
}

