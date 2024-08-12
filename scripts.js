// scripts.js

document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let mainContent = document.querySelector('main');
    let sections = mainContent.getElementsByTagName('section');

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let textContent = section.textContent || section.innerText;

        if (textContent.toUpperCase().indexOf(filter) > -1) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    }
});

