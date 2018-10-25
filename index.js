function main() {
  const quoteText = document.querySelector('.quote');
  const quoteAuthor = document.querySelector('.author');
  const gimmeMore = document.querySelector('.gimme-more');
  const whatIsThis = document.querySelector('.what-is-this');
  const close = document.querySelector('.close');
  const body = document.querySelector('body');
  const modalContainer = document.querySelector('.modal-container');

  const songTitle = document.querySelector('.song-title');
  const songEmbed = document.querySelector('.song-embed');

  const { quotes, songs} = inspiration;

  const gimme = ['Give me another', 'Gimme another one', 'I need more inspiration', 'Pump me up!', 'I\'m not tired!', 'Hit me'];

  let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  let currentSongIndex = Math.floor(Math.random() * songs.length);

  function populateQuote() {
    const { author, quote } = quotes[currentQuoteIndex];
    quoteText.innerHTML = `&ldquo;${quote}&rdquo;`;
    quoteAuthor.innerHTML = `- ${author}`;
  }

  function populateSong() {
    const { artist, title, link, embed } = songs[currentSongIndex];
    songEmbed.innerHTML = embed;
  }

  populateQuote();
  populateSong();

  gimmeMore.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    currentSongIndex = (currentQuoteIndex + 1) % songs.length;
    populateQuote();
    populateSong();

    const randomGimme = gimme[Math.floor(Math.random() * gimme.length)];
    gimmeMore.innerText = randomGimme;
  });

  whatIsThis.addEventListener('click', () => {
    body.classList.add('freeze');
    modalContainer.classList.remove('hide');
  });

  close.addEventListener('click', () => {
    body.classList.remove('freeze');
    modalContainer.classList.add('hide');
  });
}

document.addEventListener('DOMContentLoaded', main);
