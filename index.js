const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menuIcon');
const crossIcon = document.querySelector('#crossIcon');

burger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  crossIcon.classList.toggle('hidden');
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#menu') && !e.target.closest('#burger')) {
    menu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    crossIcon.classList.add('hidden');
  }
});


document.getElementById('fileContainer').addEventListener('click', function(event) {
    if (event.target !== this) {
        return; // Clicked outside of the div, do nothing
    }

    // Clicked inside the div, open the file input
    document.getElementById('bgfile').click();
});


