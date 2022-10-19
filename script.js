
let NumberOfCards
const ContainerDiv = document.querySelector(".game-container")



function SelectNumberOfCards() {
    CardList =[]



    let NumberOfCards = Number(prompt("Com quantas cartas iremos jogar"))


    if (NumberOfCards < 4 || NumberOfCards > 12  || NumberOfCards % 2 !== 0){
        return SelectNumberOfCards()
    }
    else{
        i = 0
            while (i  < NumberOfCards){
                ContainerDiv.innerHTML +=  `<div class="card"></div>`
                i++
        }
    }
}