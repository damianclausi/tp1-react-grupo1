import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div style={{
      width: '200px',
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
    }}>
      <h3>Grupo 1</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">🏠 Inicio</Link></li>
        <li><Link to="/antonio">👨 Antonio</Link></li>
        <li><Link to="/cristian">👨 Cristian</Link></li>
        <li><Link to="/damian">👨 Damián</Link></li>           
        <li><Link to="/rocio">👩 Rocío</Link></li>
        <li><Link to="/json">📄 Datos JSON</Link></li>
        <li><Link to="/api">🌐 API Pública</Link></li>
        <li><Link to="/bitacora">📝 Bitácora</Link></li>
      </ul>
    </div>
  )
}
