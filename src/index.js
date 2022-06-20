document.addEventListener('DOMContentLoaded', function(){
    fetchQuotes()
})

const fetchQuotes = () =>{
fetch ('https://type.fit/api/quotes')
.then(res=>res.json())
.then(data=>{data.forEach(quoteObject => {
    const quoteList = document.getElementById('quote-list');
    const quoteEl = document.createElement('li');
    quoteEl.innerText = quoteObject.text;
    quoteList.appendChild(quoteEl);
    console.log(quoteObject.author)
})
})
}

