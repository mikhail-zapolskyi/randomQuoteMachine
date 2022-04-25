const text = document.querySelector('#text');
const author = document.querySelector('#author');
const button = document.querySelector('#new-quote');
const tweet = document.querySelector('#tweet-quote');

button.addEventListener('click', () => {
     fetch("https://type.fit/api/quotes")
     .then(res => {
          return res.json();
     })
     .then(data => {
          const quote = data[Math.floor(Math.random() * data.length)];
          text.textContent = quote.text;
          author.textContent = quote.author;
          tweet.href = `https://twitter.com/intent/tweet?text=${quote.text} / ${ quote.author }`
     });
});