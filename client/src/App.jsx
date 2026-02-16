import { useState } from 'react';
import './App.css';

function App() {
  const [truth, setTruth] = useState("");
  const [status, setStatus] = useState("WAITING FOR NEIGHBOR...");

  const submitTruth = async () => {
    setStatus("SENDING SIGNAL...");
    try {
      // Direct connection to the backend. No Service Worker interception.
      const response = await fetch('http://localhost:3000/set-truth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ truth })
      });
      
      const data = await response.json();
      setStatus(`SERVER SAYS: ${data.message}`);
    } catch (error) {
      console.error(error);
      setStatus("ERROR: Connection Refused. (Is the Server running? Is the SW dead?)");
    }
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#111', color: '#0f0', height: '100vh', fontFamily: 'monospace' }}>
      <h1>THE BRIDGE</h1>
      <p>The trap is gone. The line is open.</p>
      
      <input
        type="text"
        value={truth}
        onChange={(e) => setTruth(e.target.value)}
        placeholder="Type here..."
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={submitTruth} style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer', backgroundColor: '#0f0', color: '#000', fontWeight: 'bold' }}>
        SPEAK
      </button>
      
      <div style={{ marginTop: '20px', border: '1px dashed #0f0', padding: '10px' }}>
        {status}
      </div>
    </div>
  );
}

export default App;