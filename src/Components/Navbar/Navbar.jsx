import './Navbar.css'

function Navbar() {

    
  const scrollToElement = (elementSelector) => {
    const element = document.querySelector(elementSelector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="nav-links">
        <li className="link"><a href="#/">Accueil</a></li>
        <li id="link1" className="link"><a href="#/" onClick={() => scrollToElement('.me')}>A propos</a></li>
        <li id="link2" className="link"><a href="#/" onClick={() => scrollToElement('.header')}>Projets</a></li>
        <li id="link3" className="link"><a href="#/" onClick={() => scrollToElement('.header-comp')}>Compétences</a></li>
        <li id="link4" className="link"><a href="#/" onClick={() => scrollToElement('.meet')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
