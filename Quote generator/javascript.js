//Inspirational qootes array.
var quotes = ['“People who are crazy enough to think they can change the world, are the ones who do.” -Rob Siltanen',
    '“Happiness is not something readymade. It comes from your own actions.” -Dalai Lama',
    '“All our dreams can come true if we have the courage to pursue them.” -Walt Disney',
    '“Believe you can and you’re halfway there.” -Theodore Roosevelt',
    '“Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.” -Brian Tracy',
    '“You are never too old to set another goal or to dream a new dream.” –C.S. Lewis'

];

//pick a random number from 0 to quote.length.
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}