let homepage = `<div style="color: #fff">
test app
</div>`;

let searchpage = `<input type="text" id="search_input" placeholder="Rechercher une musique">`;

let biblio = `<div style="color: #fff">
test biblio
</div>`;

const base_body_color = "#000";



document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM chargé');
    
    const bouton_accueil = document.getElementById('home_btn');
    const bouton_recherche = document.getElementById('search_btn');
    const bouton_biblio = document.getElementById('lib_btn');

    bouton_accueil.addEventListener('click', () => {
        document.getElementById('app_ctn').innerHTML = homepage;
        document.body.style.background = base_body_color;
        document.body.style.background = "#098a5a";
    });

    bouton_recherche.addEventListener('click', () => {      
        document.getElementById('app_ctn').innerHTML = searchpage;
        document.body.style.background = base_body_color;
        document.body.style.background = "#fda707";
    });

    bouton_biblio.addEventListener('click', () => {
        document.getElementById('app_ctn').innerHTML = biblio;
        document.body.style.background = base_body_color;
        document.body.style.background = "#d2d4ff";
    });


    
    let token = "";

    let client_id = "a1e952d70faf431993ea9dce2b15a001";
    let client_secret = "0e26f83dd700431bb3cda5d0c2acdafd";
    
    SpotifyAuthentification().then(r => console.log("Authentification done"));
    
    
    async function SpotifyAuthentification() {
        token = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
        }).then(response => response.json()).catch(error => console.log(error));
    }


      
  });


  