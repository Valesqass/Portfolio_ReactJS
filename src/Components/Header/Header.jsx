import './Header.css'
import HeaderImg from '../../Assets/header.png'
import CValt from '../../Assets/CV_ALT.pdf'

function Header() {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h1>
          Bonjour je m'appelle <span>Mikaël</span>, Développeur Web{" "}
        </h1>
        <p>
          Etudiant en première année à l'école HETIC.
          <br />
          <br />
          Depuis octobre 2023, plongé dans le developpement web,
          <br />
          avec plusieurs projets à mon actif,
          <br />
          je vous présente mon Portfolio pour m'introduire dans le monde
          professionnel.
        </p>
        <button className="btn"><a href={CValt}>Téléchargez mon CV</a></button>
      </div>
      <div className="img">
        <img src={HeaderImg} alt="" />
      </div>
    </header>
  );
}

export default Header;
