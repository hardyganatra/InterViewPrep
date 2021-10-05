// DOM Selectors

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBth = document.getElementById('twitter');
const newQuoteBth = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const hideLoadingSpinner = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

// Show New Quote

const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if text and author is blank and replace it with 'unknown'
  quote.text ? (quoteText.textContent = quote.text) : (quoteText.textContent = 'unknown');
  quote.author ? (authorText.textContent = quote.author) : (authorText.textContent = 'unknown');
  // Check Quote Length To Determine Styling
  quote.text.length > 100 && quoteText.classList.add('long-quote');
  hideLoadingSpinner();
};

// Get Quotes Form API
const getQuotes = async () => {
  showLoadingSpinner();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
};

// Tweet Quote

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
};

//Event Listeners

newQuoteBth.addEventListener('click', newQuote);
twitterBth.addEventListener('click', tweetQuote);

// On Load

getQuotes();
