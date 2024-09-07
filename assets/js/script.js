const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('generate-new-quote');


quoteElement.textContent ="Click the button to generate your quote";
authorElement.textContent="";

const quotes = [
    {
        quote:"You are doing a great job.",
        author:"Bilal Essafi"
    }, 
    {
        quote:"You are amazing",
        author:"Bilal Essafi"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random()* quotes.length);
    const randomQuote = quotes[randomIndex];
        quoteElement.textContent
    = randomQuote.quote;
    authorElement.textContent = `-${randomQuote.author}`;
}
newQuoteButton.addEventListener("click", getRandomQuote);

getRandomQuote();