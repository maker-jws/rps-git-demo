// import statement for JS 

let pAttack
// initial state of player choice is undefined

let computer = ['🏔', '📄', '✂️']
// an array of options for the computer to choose

let winner = null
// initial state of winner is null, but could have used 'undefined'

let pWins = 0
let cWins = 0
// initial win count for player and computer
// this will refresh after page loads, can store scores (after each turn) using window.localStorage.setItem('scores': JSON.stringify({player: pWins, computer: cWins})

const allWeapons = document.querySelectorAll('.container > button')

function makeAttack(e) {
  let choice = e.target.dataset.attack
  pAttack = choice
  document.querySelector('#display').textContent = `The computer is deciding...`
  // update the user with information about what the computer is doing... (builds anticipation, but is a lie)
  setTimeout(computerAttack, 2500)
  // delay computer choices for 2.5 seconds (slowing down the game flow / computer)

  disableButtons()
  // disabling will occur immediately after user click to prevent accidental clicks/duplicate events
  // the computerAttack call will be made after a short delay
  // in total each 'turn' takes three seconds to complete
}


function computerAttack() {
  let cAttack = computer[Math.floor(Math.random() * computer.length)]
  // - timer that runs once - setTimeout
  setTimeout(() => determineWinner(pAttack, cAttack), 250)
  // wait .25 seconds to evaluate the winner
}


function determineWinner(p1, p2) {
  if (p1 === p2) {
    winner = "Tie"
  } else if ((p1 === "🏔" && p2 === "✂️") || (p1 === "📄" && p2 === "🏔") || (p1 === "✂️" && p2 === "📄")) {
    winner = "Player"
    pWins++
  } else {
    winner = "Computer"
    cWins++
  }
  // - timer that runs once - setTimeout
  setTimeout(() => updateWinnerDisplay(p1, p2), 250)
  // wait .25 seconds to update the display 
}


function updateWinnerDisplay(p1, p2) {
  document.querySelector('#display').setAttribute('style', 'white-space: pre;')
  // allow for linebreaks in your HTML content  
  document.querySelector('#display').textContent = `${winner} Wins!${"\n\r\r"} Player chose: ${p1}${"\n\r\r"} Computer chose ${p2} ${"\n\r\r"} P Wins ${pWins}${"\n\r\r"} C Wins ${cWins}`
  resetGame()

  // use one text content update to display win count, current winner (or tie) and choices made by player/computer
  // this info could be broken out into a div / with child nodes taking on the game state, went for MVP approach and one DOM update
}


function resetGame() {
  allWeapons.forEach(weapon => weapon.addEventListener('click', makeAttack))
  // allWeapons.forEach(weapon => weapon.removeAttribute('disabled'))
  // you would need to remove disabled attribute if implementation was used
}


// helper function for disabling button presses while the computer is 'choosing' an attack
function disableButtons() {
  allWeapons.forEach(weapon => weapon.removeEventListener('click', makeAttack))
  // allWeapons.forEach(weapon => weapon.setAttribute('disabled', 'false'))
  // either approach would work (removing click events or disabling the button)
}
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
console.log('My code is different from the main branch')
// Initialize game
resetGame()