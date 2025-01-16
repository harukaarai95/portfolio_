window.addEventListener('DOMContentLoaded', () => {
    
    const section = document.querySelector('.cherry-blossom-container');
  
    // pedal
    const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = 'petal';
      const minSize = 8;
      const maxSize = 12;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * (innerWidth - size) + 'px';
      section.appendChild(petalEl);
  
      // remove
      setTimeout(() => {
        petalEl.remove();
      }, 10000);
    }
  
    // generate span
    setInterval(createPetal, 400);
  });