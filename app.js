const quotes = ["Every moment is a fresh beginning."," Die with memories, not dreams", "Change the world by being yourself.", "Never regret anything that made you smile", "Aspire to inspire before we expire.", "Do good and good will come to you."];
const btn = document.getElementById('btn');
const quote= document.getElementById('quote');
btn.addEventListener("click",() => {
     let randomNumber = getRandomNumber();
     quote.textContent = quotes[randomNumber];
     console.log(quotes[randomNumber]);
})

function getRandomNumber () {
    return Math.floor(Math.random()* quotes.length);
}
