document.addEventListener('DOMContentLoaded', function(){
    fetchQuotes();
    generateRandomQuote()
    tweetQuote();
    addQuoteSelectListener();
    addQuote(quote)
})

//use fetch requst to get all the quotes
const fetchQuotes = () =>{
fetch ('https://type.fit/api/quotes')
.then(res=>res.json())
.then(data=>{data.forEach(quoteObject => {
    const quoteList = document.getElementById('quote-list');
    const quoteEl = document.createElement('li');
    const spanAuthor = document.createElement('p');
    quoteEl.innerText = `${quoteObject.text}`;
    spanAuthor.innerText = `${quoteObject.author}`;
    spanAuthor.className = 'quote-span';
    quoteEl.appendChild(spanAuthor);
    quoteList.appendChild(quoteEl);
})
})
}

//generate a random quote on click of a button
function generateRandomQuote(){
quoteEl = document.getElementById('quote');
quoteAuthorEl = document.getElementById('author');

document.getElementById('new-quote').addEventListener('click', function (e){
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then (data => {
    const randomQuoteIndex = Math.floor(Math.random() * data.length);
    const quoteText = data[randomQuoteIndex].text;
    let author = data[randomQuoteIndex].author;

    if (!author) {
        author = 'Unknown';
    }

    if (quoteText.length > 120) {
        quoteEl.classList.add('long-quote');
    } else {
        quoteEl.classList.remove('long-quote');
    }
    quoteEl.textContent = quoteText;
    quoteAuthorEl.textContent = author;
});

});
}

function tweetQuote() {
    document.getElementById('twitter').addEventListener('click', function(){
        const twitterQuoteUrl = `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${quoteAuthorEl.textContent}`;
        window.open(twitterQuoteUrl, '_blank');
    });
}
// Use dropdown to select quotes from authors beginning with specific letters
function startsWith(letter){

}
function selectBreedsStartingWith(letter) {
    fetch('https://type.fit/api/quotes')
    .then(newresponse=>newresponse.json())
    .then(quotes=>{
   // quotes.filter(quote => quote.author(letter))
    console.log(quotes.text);
});
  }
  
  function addQuoteSelectListener() {
    let quoteDropdown = document.querySelector('#quote-dropdown');
    quoteDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addQuote(quote) {
    let ul = document.querySelector('#quote-detail');
    let li = document.createElement('li');
    li.innerText = quote;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
  }
  



