// script.js
document.getElementById('flipButton').addEventListener('click', () => {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
  
    coin.classList.remove('flip-animation'); // Reset animation
    void coin.offsetWidth; // Trigger reflow
    coin.classList.add('flip-animation'); // Start animation
  
    setTimeout(() => {
      if (outcome === 'heads') {
        coin.style.transform = 'rotateY(0deg)';
        resultText.textContent = 'Result: HEADS';
      } else {
        coin.style.transform = 'rotateY(180deg)';
        resultText.textContent = 'Result: TAILS';
      }
    }, 2000); // Match the duration of the flip animation
  });
  