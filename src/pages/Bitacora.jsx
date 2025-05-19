export default function Bitacora() {
  return (
    <div>
      <h2>📝 Bitácora del Proyecto - Grupo 1</h2>

      <section style={{ marginBottom: '2rem' }}>
        <h3>👥 Roles de los integrantes</h3>
        <ul>
          <li><strong>Damián Andrés Clausi:</strong> Desarrollo de interfaz y navegación</li>
          <li><strong>Antonio Gill:</strong> Desarrollo de API y lógica de negocio</li>
          <li><strong>Cristian Descosido:</strong> Documentación y pruebas</li>
          <li><strong>Rocío Ailén Gómez:</strong> Diseño y estilos</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>🛠️ Herramientas utilizadas</h3>
        <ul>
          <li><strong>Visual Studio Code</strong> – editor de código</li>
          <li><strong>GitHub</strong> – control de versiones y repositorio</li>
          <li><strong>Vercel</strong> – despliegue del sitio</li>
          <li><strong>Discord</strong> – comunicación grupal</li>
          <li><strong>Trello</strong> – organización de tareas (metodología Scrum)</li>
        </ul>
      </section>

      <section>
        <h3>📌 Metodología de trabajo</h3>
        <p>
          El equipo adoptó una metodología ágil basada en <strong>Scrum</strong>. Se organizaron tareas semanales,
          asignadas a cada integrante en un tablero de Trello. Las decisiones se tomaron por consenso en reuniones
          virtuales vía Discord. El código se gestionó con Git y ramas individuales para cada sección.
        </p>
        <p>
          Al finalizar cada módulo, se revisó en conjunto y se hicieron ajustes finales antes de subir a GitHub y desplegar
          en Vercel.
        </p>
      </section>
    </div>
  )
}
