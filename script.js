// DOM Selectors

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBth = document.getElementById('twitter');
const newQuoteBth = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote

const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if text and author is blank and replace it with 'unknown'
  quote.text ? (quoteText.textContent = quote.text) : (quoteText.textContent = 'unknown');
  quote.author ? (authorText.textContent = quote.author) : (authorText.textContent = 'unknown');
  // Check Quote Length To Determine Styling
  quote.text.length > 100 && quoteText.classList.add('long-quote');
  console.log(quote);
};

// Get Quotes Form API
const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
};

console.log('Hardik');

// On Load

getQuotes();
