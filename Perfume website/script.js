function filterMood(mood){
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if(mood === 'all' || card.dataset.mood === mood){
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}