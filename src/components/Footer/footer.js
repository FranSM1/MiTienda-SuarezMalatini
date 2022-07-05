import './footer.css';

function Footer() {
  return (
  <footer className="footer">
    <p className="subtitulo">Puedes seguirnos en nuestras redes sociales</p>

    <div className="container-iconos">
      <a href="instagram.com">
        <span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>
      </a>

      <a href="facebook.com">
        <span className="iconify" data-icon="logos:facebook" data-inline="false"></span>
      </a>

      <a href="youtube.com">
        <span className="iconify" data-icon="logos:youtube-icon" data-inline="false"></span>
      </a>
    </div>

    <p className="texto texto_footer">Todos los Derechos Reservados &copy; - LoloDeportes</p>
  </footer>
  );
}

export default Footer;