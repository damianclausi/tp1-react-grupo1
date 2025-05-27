// src/pages/Perfil.jsx
// src/pages/Perfil.jsx
import { useParams, Link } from 'react-router-dom';
import './Perfil.css';

const integrantes = [
  {
    id: '1',
    nombre: 'César Antonio Gill',
    habilidades: ['JavaScript', 'React', 'CSS'],
    proyectos: ['App de recetas', 'Portfolio personal', 'Sitio para ONG'],
    tecnologias: [
      { nombre: 'HTML', icono: '/icons/html.svg' },
      { nombre: 'CSS', icono: '/icons/css.svg' },
      { nombre: 'JavaScript', icono: '/icons/js.svg' },
      { nombre: 'React', icono: '/icons/react.svg' },
      { nombre: 'Git', icono: '/icons/git.svg' },
    ],
  },
  {
    id: '2',
    nombre: 'Cristian Descosido',
    habilidades: ['Python', 'Django', 'PostgreSQL'],
    proyectos: ['Blog en Django', 'Gestor de tareas', 'API RESTful'],
    tecnologias: [
      { nombre: 'HTML', icono: '/icons/html.svg' },
      { nombre: 'CSS', icono: '/icons/css.svg' },
      { nombre: 'JavaScript', icono: '/icons/js.svg' },
      { nombre: 'React', icono: '/icons/react.svg' },
      { nombre: 'Git', icono: '/icons/git.svg' },
    ],
  },
  {
    id: '3',
    nombre: 'Damián Andrés Clausi',
    descripcion:
      'Apasionado por la tecnología desde muy joven. Disfruto explorando proyectos open source y aprendiendo sobre tecnologías libres. Actualmente me formo para ser desarrollador, explorando distintos campos de la informática. Además, me encanta andar en bicicleta y salir a correr.',
    habilidades: ['JavaScript', 'React', 'Node.js', 'HTML5 & CSS3', 'MySQL'],
    proyectos: [
      {
        nombre: 'Actividad de cierre Profesionales tramo 1 – Línea Sarmiento',
        imagen: 'https://images.emojiterra.com/google/android-12l/512px/1f686.png',
        descripcion:
          'Simulación de mejoras del sistema GPS de Trenes Argentinos, con información en tiempo real sobre trenes y estado de vías.',
        haveLink: true,
        link: 'https://actividad-profesionales-ls-tramo-1.netlify.app/'
      },
      {
        nombre: 'Aplicación Mobile Club Deportivo',
        imagen:
        'https://damianclausi.github.io/portfoliopersonal-pfo2/img/proyecto-2-animado.gif',
        descripcion:
        'App móvil en equipo para la gestión de un club deportivo, con animación de flujo completo.',
        haveLink: true,
        link: 'https://damianclausi.github.io/portfoliopersonal-pfo2/img/proyecto-2-animado.gif'
      },
      {
        nombre: 'Landing Page para Startup',
        imagen:
          'https://damianclausi.github.io/portfoliopersonal-pfo2/img/avatar.png',
        descripcion:
          'Página de presentación para una startup ficticia, desarrollada con HTML5, CSS3 y JS.',
        haveLink:false
      },
    ],
    tecnologias: [
      {
        nombre: 'Linux',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
      {
        nombre: 'Node.js',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        nombre: 'React',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        nombre: 'GitHub',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        nombre: 'SQL',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
    ],
    icono:
      'https://damianclausi.github.io/portfoliopersonal-pfo2/img/avatar.png',
  },
  {
    id: '4',
    nombre: 'Rocío Ailén Gómez',
    descripcion:
      'Soy desarrolladora Python con experiencia en scraping y análisis de datos. Me especializo en crear soluciones eficientes que automatizan la extracción de información desde sitios webs y aplicaciones móviles, ya sea mediante APIs públicas o a partir de contenido visible. En mi tiempo libre me gusta pasear con amigos y hacer actividad física',
    habilidades: ['Python', 'Scrapy', 'JavaScript', 'Airflow', 'PostgreSQL'],
    proyectos: [
      {
        nombre: 'Scraping de food service',
        imagen: 'https://github.com/rragmz/portafoliojs/blob/main/img/proyecto1.jpg?raw=true',
        descripcion:
          'Desarrollo de spider para monitorear menúes de Little Caesars para los países de Chile y Costa Rica con actualización diaria.',
        haveLink: false,
      },
      {
        nombre: 'Interceptación de solicitudes de app móvil',
        imagen: 'https://github.com/rragmz/portafoliojs/blob/main/img/proyecto2.jpg?raw=true',
        descripcion: 'Análisis e interceptación del tráfico móvil de la app DiDi-Food para identificar y documentar los endpoints de su API.',
        haveLink: false
      },
    ],
    tecnologias: [
      {
        nombre: 'Python',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        nombre: 'JavaScript',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        nombre: 'PostgreSQL',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        nombre: 'GitHub',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        nombre: 'Airflow',
        icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg',
      },
    ],
    icono:
      'https://github.com/rragmz/portafoliojs/blob/main/img/profile.png?raw=true',

  },
];

export default function Perfil() {
  const { id } = useParams();

  if (!id) {
    // VISTA RESUMIDA: Tarjetas de todos los integrantes
    return (
      <div className="perfil-cards-container">
        {integrantes.map((persona) => (
          <Link to={`/perfil/${persona.id}`} key={persona.id} className="perfil-card">
            <img src={persona.icono} alt={persona.nombre} className="perfil-card-img" />
            <h3>{persona.nombre}</h3>
            <p>{persona.habilidades.join(', ')}</p>
          </Link>
        ))}
      </div>
    );
  }

  // VISTA DETALLADA: Un solo integrante
  const persona = integrantes.find((i) => i.id === id);

  if (!persona) {
    return <div className="perfil"><h2>Integrante no encontrado</h2></div>;
  }

  return (
    <div className="damian-container">
      <img src={persona.icono} alt={persona.nombre} className="damian-avatar" />
      <h2>{persona.nombre}</h2>
      <p>{persona.descripcion}</p>

      <h3>Habilidades</h3>
      <ul>{persona.habilidades.map((hab, i) => <li key={i}>{hab}</li>)}</ul>

      {persona.proyectos && (
        <>
          <h3>Proyectos</h3>
          <div className="damian-projects">
            {persona.proyectos.map((p, i) => (
              <div key={i} className="damian-project-card">
                <img src={p.imagen} alt={p.nombre} className="damian-project-thumb" />
                <div>
                  <strong>{p.nombre}</strong>
                  <p className="damian-project-desc">{p.descripcion}</p>

                  {p.haveLink && p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      Ver proyecto
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <h3>Tecnologías</h3>
      <div className="damian-tech">
        {persona.tecnologias.map((tec, i) => (
          <img
            key={i}
            src={tec.icono}
            alt={tec.nombre}
            title={tec.nombre}
            style={{ width: '32px' }}
          />
        ))}
      </div>
    </div>
  );
}
