const cors = require('cors');

app.use(cors());

document.addEventListener('DOMContentLoaded', function() {
    
    const home_btn = document.getElementById('home_btn');
    const search_btn = document.getElementById('search_btn');
    const lib_btn = document.getElementById('lib_btn');

    home_btn.addEventListener('click', () => {
        fetch('html/home.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('app_ctn').innerHTML = data;
            });
    });

    // Identifiant client Spotify API : a1e952d70faf431993ea9dce2b15a001
    // https://developer.spotify.com/documentation/web-api/reference/#category-search
    // Il y avait une erreur de syntaxe dans les en-têtes, il manquait une virgule après "Client-ID"
    // et Access-Control-Allow-Origin n'est pas nécessaire ici.
    fetch('https://api.spotify.com/v1/search?q=metal&type=track', {
        method: 'GET',
        headers: { 
            "Client-ID": "a1e952d70faf431993ea9dce2b15a001",
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

});
