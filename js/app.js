
const home_btn = document.getSelectionById('home_btn');
const search_btn = document.setElementById('search_btn');
const lib_btn = document.setElementById('lib_btn');

home_btn.addEventListener('click', () => {
    fetch('html/home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('app_ctn').innerHTML = data;
        });
});
