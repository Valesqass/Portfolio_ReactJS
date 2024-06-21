import "./Project.css";

function Project() {
  return (
    <div className="container">
      <h2 class="header">Mes projets</h2>
      <p class="sub-header">
        Au cours de ma formation, j'ai intensément pratiqué. Des projets autant
        individuel que scolaire.
      </p>

      <div className="features">
        <div className="card">
          <span>
            <i class="fa-brands fa-js"></i>
          </span>
          <h4>ChatBox </h4>
          <p>
            ChatBox en JavaScript effefctué au milieu de ma progression. Projet
            scolaire fait en JavaScript. Beaucoup de CSS pour progresser.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/ChatBox_JS">
            Visiter ChatBox !
          </a>
        </div>

        <div className="card">
          <span>
            <i class="fa-brands fa-js"></i>
          </span>
          <h4>Site vitrine</h4>
          <p>
            Création d'un site responsive en HTML/CSS. Utilisation de JavaScript
            pour dynamiser le site. Premiers pas avec JavaScript.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/Site-Vitrine-JS">
            Visiter Site Vitrine en JS !
          </a>
        </div>

        <div className="card">
          <span>
            <i class="fa-brands fa-react"></i>
          </span>
          <h4>Morpion en ReactJs</h4>
          <p>
            Premier projet scolaire en ReactJs. Morpion stylisé avec CSS. Projet
            scolaire entièrement réalisé en ReactJs dans mes débuts.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/Morpion_ReactJS">
            Jouer au morpion !
          </a>
        </div>

        <div className="card">
          <span>
            <i class="fa-brands fa-react"></i>
          </span>
          <h4>Header site web</h4>
          <p>
            Header de site de voiture dynamique en ReactJs. Stylisé avec CSS.
            Projet individuel entreprit pour performer dans ce langage.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/HomePage-ReactJS">
            Visiter le site !
          </a>
        </div>

        <div className="card">
          <span>
            <i class="fa-brands fa-js"></i>
          </span>
          <h4>Deezer clone</h4>
          <p>
            Clone de Deezer responsive crée avec JavaScript stylisé avec CSS.
            Projet individuel qui mets aussi en avant mes centres d'intérêts.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/Deezer_Clone">
            Ecoutez de la musique !
          </a>
        </div>
        <div className="card">
          <span>
            <i class="fa-brands fa-js"></i>
          </span>
          <h4>ToDoList</h4>
          <p>
            To do list en JavaScript, projet individuel stylisé avec CSS. To do
            list responsive et personnalisable utile au quotidien.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/ToDoList">
            Des tâches à ajouter ?
          </a>
        </div>
        <div className="card">
          <span>
            <i class="fa-brands fa-python"></i>
          </span>
          <h4>Reproduction SNCF</h4>
          <p>
            Projet scolaire produit en Python avec le framework Django. Stylisé
            avec CSS.
            <br />
            Premiers pas avec le langage python.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/Projet_Train">
            Un train à prendre ?
          </a>
        </div>
        <div className="card">
          <span>
            <i class="fa-brands fa-js"></i>
          </span>
          <h4>HETIC x DEKUPLE</h4>
          <p>
            Projet scolaire en collaboration avec DEKUPLE, visant les objets
            connectés IOT.
            <br />
            Supabase, NodeJs, JavaScript, HTML/CSS.
          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/Dekuple-Hetichttps://github.com/Valesqass/Dekuple-Hetic">
            Découvrir notre projet ?
          </a>
        </div>
        <div className="card">
          <span>
          <i class="fa-brands fa-react"></i>
          </span>
          <h4>Portfolio.jsx</h4>
          <p>
            Refonte de mon Portfolio cette fois ci en ReactJs. 
            <br />

          </p>

          <hr />
          <hr />

          <a href="https://github.com/Valesqass/Portfolio_ReactJS">
            Analysez mon Portfolio !
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
