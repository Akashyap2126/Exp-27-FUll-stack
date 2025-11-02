import React, { useEffect, useState } from 'react';

export default function App() {
  const [pong, setPong] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/api/ping` : '/api/ping')
      .then(r => r.json())
      .then(data => setPong(data))
      .catch(err => setPong({ error: err.message }));
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>Simple Fullstack App</h1>
      <pre>{JSON.stringify(pong, null, 2)}</pre>
      <p>Open the browser console or use curl to test /api/ping on backend.</p>
    </div>
  );
}
