const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const reset = document.querySelector(".reset")

// Score Tally
let yourScore = 0;
let computerScore = 0
let scoreTally = function(computerChoice){
    alert(`Computer chose ${computerChoice} 
    Your Score: ${yourScore}, Computer Score: ${computerScore}`);  
}


// What computer chooses
const randomPick = function(){
    const pick = Math.floor((Math.random()*3)+1)
    if (pick==1) {
        return "rock";
    } else if (pick==2) {
        return "paper";
    }   else {
        return "scissor";
    }
}
// Comparing between User and computer
rock.addEventListener("click", function(e){
    let computerChoice = randomPick();

    if (computerChoice == "scissor") {
        yourScore+=1;
    } else if (computerChoice == "paper") {
        computerScore+=1;
    }

   scoreTally(computerChoice);
    
})
paper.addEventListener("click", function(e){
    let computerChoice = randomPick();

    if (computerChoice == "rock") {
        yourScore+=1;
    } else if (computerChoice == "scissor") {
        computerScore+=1;
    }

    scoreTally(computerChoice);
})
scissor.addEventListener("click", function(e){
    let computerChoice = randomPick();

    if (computerChoice == "paper") {
        yourScore+=1;
    } else if (computerChoice == "rock") {
        computerScore+=1;
    }

    scoreTally(computerChoice);
})

// Resetting the score tally
reset.addEventListener("click", function(e){
    yourScore = 0;
    computerScore = 0;
    alert("Score has been reset!")
})



// Isse ye seekhne mila ki function ko if else ke andar call mat karo wo baar baar call hota rahega usse ek hi baar ekdum bahar call kro
// agar if else ke condition mai call krna hai function ko to usse sabse pehle variable mai store karo aur fir uss variable se bulao



