
const apple = document.querySelector("#apple")
const microsoft = document.querySelector("#microsoft")
const spotify = document.querySelector("#spotify")
const stripe = document.querySelector("#stripe")
const webflow = document.querySelector("#webflow")

const span = document.querySelector(".child-span")

const appleContainer = document.querySelector(".apple")
const microsoftContainer = document.querySelector(".microsoft")
const spotifyContainer = document.querySelector(".spotify")
const stripeContainer = document.querySelector(".stripe")
const webflowContainer = document.querySelector(".webflow")


// Home-Experience JS
apple.addEventListener("click", function(e){
    microsoftContainer.style.display = "none"
    spotifyContainer.style.display = "none"
    stripeContainer.style.display = "none"
    webflowContainer.style.display = "none"

    appleContainer.style.display = "flex"
    appleContainer.style.flexDirection = "column"

    span.style.marginTop = "0px"
})


microsoft.addEventListener("click", function(e){
    appleContainer.style.display = "none"
    spotifyContainer.style.display = "none"
    stripeContainer.style.display = "none"
    webflowContainer.style.display = "none"

    microsoftContainer.style.display = "flex"
    microsoftContainer.style.flexDirection = "column"
    
    span.style.marginTop = "50px"
})


spotify.addEventListener("click", function(e){
    appleContainer.style.display = "none"
    microsoftContainer.style.display = "none"
    stripeContainer.style.display = "none"
    webflowContainer.style.display = "none"

    spotifyContainer.style.display = "flex"
    spotifyContainer.style.flexDirection = "column"

    span.style.marginTop = "100px"
    
})


stripe.addEventListener("click", function(e){
    appleContainer.style.display = "none"
    spotifyContainer.style.display = "none"
    microsoftContainer.style.display = "none"
    webflowContainer.style.display = "none"

    stripeContainer.style.display = "flex"
    stripeContainer.style.flexDirection = "column"
    
    span.style.marginTop = "151px"
})


webflow.addEventListener("click", function(e){
    appleContainer.style.display = "none"
    spotifyContainer.style.display = "none"
    stripeContainer.style.display = "none"
    microsoftContainer.style.display = "none"

    webflowContainer.style.display = "flex"
    webflowContainer.style.flexDirection = "column"

    span.style.marginTop = "201px"
})