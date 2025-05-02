const butts = document.querySelector('.butts');

butts.addEventListener('click', function() {
    console.log("IT GOT CLICKED");
})

//Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick() {
    console.log("You are buying it");
}

buyButtons.forEach( function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
})