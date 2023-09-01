const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btn = document.querySelector('#new-quote');

const getNewQuotes = async () => {
    // const res = await fetch('https://api.quotable.io/random');
    // const data = await res.json();
    // console.log(data);
    // quote.textContent = data.content;
    // person.textContent = data.author;

    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const randomNum = Math.floor(Math.random() * data.length);
    quote.textContent = data[randomNum].text;
    const author = data[randomNum].author;
    const person1 = author.split(',');
    person.textContent = person1[0];
}

btn.addEventListener('click', getNewQuotes);