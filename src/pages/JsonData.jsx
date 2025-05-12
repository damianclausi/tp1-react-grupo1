import data from '../data/data.json'

export default function JsonData() {
  return (
    <div>
      <h2>🎬 Lista de Películas (desde JSON)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {data.map((pelicula) => (
          <div key={pelicula.id} style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            width: '200px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3>{pelicula.titulo}</h3>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Año:</strong> {pelicula.anio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
