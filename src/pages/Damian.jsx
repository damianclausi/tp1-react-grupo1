import './Damian.css';

export default function Damian() {
  return (
    <div className="damian-container">
      <h2>Damián Andrés Clausi</h2>
      <img src="https://damianclausi.github.io/portfoliopersonal-pfo2/img/avatar.png" alt="Avatar de Damián Clausi" className="damian-avatar" />
      <h3>Sobre mí</h3>
      <p>
        Apasionado por la tecnología desde muy joven. Disfruto explorando proyectos open source y aprendiendo sobre tecnologías libres. Actualmente me formo para ser desarrollador, explorando distintos campos de la informática. Además, me encanta andar en bicicleta y salir a correr.
      </p>
      <h3>Habilidades en programación</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML5 & CSS3</li>
        <li>SQL</li>        
      </ul>
      <h3>Proyectos</h3>
      <div className="damian-projects">
        <div className="damian-project-card">
          <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'56px',height:'56px',background:'#e0e7ef',borderRadius:'0.7rem',fontSize:'2.2rem'}} title="Tren">
            🚆
          </span>
          <div>
            <strong>Actividad de cierre Profesionales tramo 1 – Línea Sarmiento</strong><br />
            <a href="https://actividad-profesionales-ls-tramo-1.netlify.app/" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
            <p className="damian-project-desc">Simulación de mejoras del sistema GPS de Trenes Argentinos, con información en tiempo real sobre trenes y estado de vías.</p>
          </div>
        </div>
        <div className="damian-project-card">
          <img src="https://damianclausi.github.io/portfoliopersonal-pfo2/img/proyecto-2-animado.gif" alt="Club Deportivo" className="damian-project-thumb" />
          <div>
            <strong>Aplicación Mobile Club Deportivo</strong><br />
            <a href="https://damianclausi.github.io/portfoliopersonal-pfo2/img/proyecto-2-animado.gif" target="_blank" rel="noopener noreferrer">Ver animación</a>
            <p className="damian-project-desc">App móvil en equipo para la gestión de un club deportivo, con animación de flujo completo.</p>
          </div>
        </div>
        <div className="damian-project-card">
          <img src="https://damianclausi.github.io/portfoliopersonal-pfo2/img/avatar.png" alt="Landing Page Startup" className="damian-project-thumb" />
          <div>
            <strong>Landing Page para Startup</strong><br />
            <span style={{color:'#888'}}>Demo visual</span>
            <p className="damian-project-desc">Página de presentación para una startup ficticia, desarrollada con HTML5, CSS3 y JS.</p>
          </div>
        </div>
      </div>
      <h3>Tecnologías favoritas</h3>
      <div className="damian-tech">
        <span title="Linux" style={{color:'#333'}}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" style={{height:'2.2rem',verticalAlign:'middle'}} />
        </span>
        <span title="Node.js">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" style={{height:'2.2rem',verticalAlign:'middle'}} />
        </span>
        <span title="React">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{height:'2.2rem',verticalAlign:'middle'}} />
        </span>
        <span title="GitHub">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height:'2.2rem',verticalAlign:'middle',background:'#fff',borderRadius:'50%'}} />
        </span>
        <span title="SQL">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" style={{height:'2.2rem',verticalAlign:'middle'}} />
        </span>
      </div>
      <h3>Contacto</h3>
      <div className="damian-contact">
        <a href="https://github.com/damianclausi" target="_blank" rel="noopener noreferrer" title="GitHub" style={{display:'flex',alignItems:'center',gap:'0.4rem'}}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height:'1.7rem',verticalAlign:'middle',background:'#fff',borderRadius:'50%'}} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{display:'flex',alignItems:'center',gap:'0.4rem'}}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{height:'1.7rem',verticalAlign:'middle'}} />
          LinkedIn
        </a>
      </div>
    </div>
  )
}
