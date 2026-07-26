const selector = document.querySelector('.selector');
const selectField = document.getElementById('selectField');
const selectedIcon = selectField.querySelector('.selected-icon');
const selectedLabel = selectField.querySelector('.selected p');
const options = document.querySelectorAll('.options');

selectField.addEventListener('click', () => {
  selector.classList.toggle('active');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    const iconSrc = option.querySelector('img').getAttribute('src');
    const label = option.querySelector('p').textContent;

    selectedIcon.setAttribute('src', iconSrc);
    selectedIcon.classList.add('visible');
    selectedLabel.textContent = label;
    selector.classList.remove('active');
  });
});

window.addEventListener('click', (event) => {
  if (!selector.contains(event.target)) {
    selector.classList.remove('active');
  }
});
