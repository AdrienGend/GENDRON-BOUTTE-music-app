let homepage = `<div style="color: #fff">
test app
</div>
<button id="btn_changepage">changement de page</button>
`;

let searchpage = `<input type="text" id="search_input" placeholder="Rechercher une musique">
`;



document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM chargé');
    
    const bouton_accueil = document.getElementById('home_btn');
    const bouton_recherche = document.getElementById('search_btn');
    const bouton_biblio = document.getElementById('lib_btn');

    bouton_accueil.addEventListener('click', () => {
        document.getElementById('app_ctn').innerHTML = homepage;
    });

    bouton_recherche.addEventListener('click', () => {      
        document.getElementById('app_ctn').innerHTML = searchpage;
    });

      
  });


  