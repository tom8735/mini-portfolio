const hoverBox = document.getElementById('hoverBox');

function showHoverBox(text, color) {
  hoverBox.textContent = text;
  hoverBox.style.opacity = '1';
  hoverBox.style.background = color ? `rgba(${color},0.3)` : 'rgba(255,255,255,0.25)';
}

function hideHoverBox() {
  hoverBox.style.opacity = '0';
}

// Aggiungi eventi
const cards = document.querySelectorAll('.skill-card, .exp-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    let bgColor;
    if(card.classList.contains('it')) bgColor = '42,75,255';
    else if(card.classList.contains('admin')) bgColor = '42,200,75';
    else if(card.classList.contains('log')) bgColor = '255,165,0';
    showHoverBox(card.dataset.bg, bgColor);
  });
  card.addEventListener('mouseleave', hideHoverBox);
});
