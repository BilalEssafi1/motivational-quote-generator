const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('generate-new-quote');


quoteElement.textContent ="Click the button to generate your quote";
authorElement.textContent="";

const quotes = [
    {
        quote:"If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
        author:"Wayne Dyer"
    }, 
    {
        quote:"Believe you can and you're halfway there.",
        author:"Theodore Roosevel"
    },
    {
        quote:"Do one thing every day that scares you.",
        author:"Eleanor Roosevelt"       
    },

    {
        quote:"I didn't get there by wishing for it or hoping for it, but by working for it.",
        author:"Estée Lauder"           
    },
    {
        quote:"If you can dream it, you can do it.",
        author:"Walt Disney"          
    },
    {
        quote:"Even if you are on the right track, you'll get run over if you just sit there.",
        author:"Will Rogers"          
    },
    {
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author:"Winston Churchill"       
    },
    {
        quote:"The ones who are crazy enough to think they can change the world are the ones who do.",
        author:"Steve Jobs"   
    },
    {
        quote:"Try to be a rainbow in someone's cloud.",
        author:"Maya Angelou"           
    },
    {
        quote:"A year from now you may wish you had started today.",
        author:"Karen Lamb"   
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