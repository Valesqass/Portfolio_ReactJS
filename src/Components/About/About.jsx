import "./About.css"
import PicsMe from '../../Assets/about.png'


function About() {
  return (
    <div className="containerr">
      <h2 class="me">A propos </h2>
      <div class="about">
        <div class="image">
          <img src={PicsMe} alt="" />
        </div>
        <p>
          Après l'obtention d'un baccalauréat général, année 2022-2023,
          spécialités Histoire-Géographie Géopolitique, Langues, Littératures et
          Civilisations Etrangères , tout portait à croire que je m'orienterais
          vers des études littéraires, loin du monde de l'informatique. C’est
          ainsi que j’ai intégré l'école Hetic pour changer complètement
          d'horizon et me lancer dans le domaine de l’informatique que je
          considère comme une forme d’art. Pour moi, le génie de l’informatique
          réside dans toutes les méthodologies déployées pour développer,
          décrire et produire une solution efficace à un problème.
          <br />
          <br />
          Après 6 mois de formation théorique, je recherche un stage de 4 mois
          pour faire mes premiers pas dans le monde du travail, mettre en
          pratique mes connaissances et apprendre davantage mon métier.
        </p>
      </div>
    </div>
  );
}

export default About;
