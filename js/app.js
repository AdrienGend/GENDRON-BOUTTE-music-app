document.addEventListener('DOMContentLoaded', function app() {
    fetch('html/app.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('app_ctn').innerHTML = data;
        });

    const btn_changepage = document.getElementById('btn_changepage');
    btn_changepage.addEventListener('click', function () {
        fetch('html/page2.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('app_ctn').innerHTML = data;
            });
    });
});
