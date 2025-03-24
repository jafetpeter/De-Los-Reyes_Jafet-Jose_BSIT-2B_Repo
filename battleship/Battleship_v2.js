var randomLoc = Math.floor(math.random() * 5);

var location1 = randomLoc
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;
//game logic

while (isSunk == false) {
    guess = prompt("Ready!, Aim!, Fire! (Enter number 0-6): ");
    
    if (guess == null) {
        alert("Thankyou for Playing")
        break;
    }
    
    if (guess < 0 || guess > 6) {
        alert("Error")
    
    }else {

        guesses = guesses + 1 ;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;

            alert("Hit")

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship")

            }else 
            alert ("Hit")
        

        }else {
            alert("Miss")
        } 
    }
}

var accuracy = (guesses > 0 ?(hits / guesses) * 100 : 0). toFixed(2);

var stats = 'you took' + guesses + 'guesses tp sink the battleship' + '/n' + 'accuracy' + accuracy + '%'

alert (stats);