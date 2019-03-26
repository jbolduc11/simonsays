console.log('connected')

var buttons = document.getElementsByClassName('button')
var scoreKeeper
var quitButton
var simonsArray = []
var whosTurnIsIt = 'computers'

randomColorGenerator()

for( let i = 0; i <buttons.length; i++) {

    this.addEventListener('click', handleButton)
}

function handleButton(event) {

}
function randomColorGenerator () {
    var randomButton = buttonsbuttons[Math.trunc(Math.random()*4)]
    randomButton.classList.toggle('border')
    setTimeout(() => {
        randomButton.classList.toggle ('boarder')
    }, 1000)
    simonsArray.push(randomButton.id)
    handlePlayerTurns(whosTurnIsIt)
}

function handlePlayerTurns(whosTurn) {
    if(whosTurn === 'computers'){
        whosTurnIsIt = 'player'
    } else {
        whosTurnIsIt = 'computers'
    }
}