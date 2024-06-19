import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="column">
        <div className="socials">
          <a href="https://github.com/Valesqass"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/Mikael_Dev__"><i className="ri-twitter-line"></i></a>
        </div>
      </div>
      <div className="scrollTop" onClick={scrollToTop}>
        Revenir à l'accueil
      </div>
      <div className="copyright">
        Copyright © 2024 Mikaël Lahlou Portfolio
      </div>
    </footer>
  );
}

export default Footer;


