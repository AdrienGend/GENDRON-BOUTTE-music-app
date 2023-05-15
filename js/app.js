
fetch('html/app.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('app_ctn').innerHTML = data;
    });
