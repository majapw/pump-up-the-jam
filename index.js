function main() {
  const quoteText = document.querySelector('.quote');
  const quoteAuthor = document.querySelector('.author');
  const gimmeMore = document.querySelector('.gimme-more');

  const songTitle = document.querySelector('.song-title');
  const songEmbed = document.querySelector('.song-embed');

  const { quotes, songs} = inspiration;

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
  });
}

document.addEventListener('DOMContentLoaded', main);
