// Get reference to DOM elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('generate-new-quote');

// Array of motivational quotes
const quotes = [
    {
        quote:"If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
        author:"Wayne Dyer"
    }, 
    {
        quote:"Believe you can and you're halfway there.",
        author:"Theodore Roosevelt"
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

// Function to get a random quote and display it
function getRandomQuote() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random()* quotes.length);
    // Select a random quote from the array
    const randomQuote = quotes[randomIndex];
    // Update the quote and author text content
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = `-${randomQuote.author}`;
}
newQuoteButton.addEventListener("click", getRandomQuote);