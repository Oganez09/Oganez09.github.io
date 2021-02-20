const btn = document.querySelector('[data-content="action"]');
const blockMakeUp = document.querySelector('[data-content="make-up"]');
const blockExport = document.querySelector('[data-content="export"]');
btn.addEventListener('click', function(e) {
  e.preventDefault();

  if (this.textContent === 'Export') {
    this.textContent = 'Make Up';
    blockMakeUp.setAttribute('hidden', '')
    blockExport.removeAttribute('hidden')
  } else {
    this.textContent = 'Export';
    blockExport.setAttribute('hidden', '')
    blockMakeUp.removeAttribute('hidden')
  }
})