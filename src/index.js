document.addEventListener('DOMContentLoaded', function(){
    fetchQuotes();
    generateRandomQuote()
})

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
    console.log(quoteEl);
})
})
}

//
function generateRandomQuote(){
const quoteEl = document.getElementById('quote');
const quoteAuthorEl = document.getElementById('author');

document.getElementById('new-quote').addEventListener('click', function (e){
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then (quotes => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomQuoteIndex].text;
    let author = quotes[randomQuoteIndex].author;

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

//const quotesPromise = fetchQuotes();
const quoteEl = document.getElementById('quote');
const quoteAuthorEl = document.getElementById('author');

document.getElementById('new-quote').addEventListener('click', function (e){
    fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
    .then (quotes => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomQuoteIndex].text;
    let author = quotes[randomQuoteIndex].author;

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





