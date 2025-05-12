import { useEffect, useState } from 'react';

export default function ApiData() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin'
    )
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los datos');
        return res.json();
      })
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>📈 Precios de Criptomonedas (CoinGecko)</h2>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <img src={coin.image} alt={coin.name} width={24} style={{ verticalAlign: 'middle' }} />
            <strong> {coin.name} ({coin.symbol.toUpperCase()})</strong>: ${coin.current_price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
