document.addEventListener('DOMContentLoaded', function(){
    fetchQuotes()
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

