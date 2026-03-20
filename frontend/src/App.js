import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [echoInput, setEchoInput] = useState('');
  const [echoResult, setEchoResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch hello message on mount
  useEffect(() => {
    fetchHello();
  }, []);

  const fetchHello = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/hello');
      if (!response.ok) throw new Error('Failed to fetch message');
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError('Error fetching message: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Error fetching users: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEcho = async () => {
    if (!echoInput.trim()) {
      setError('Please enter some text');
      return;
    }
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: echoInput })
      });
      if (!response.ok) throw new Error('Failed to echo');
      const data = await response.json();
      setEchoResult(`Echo: ${data.echo} (${new Date(data.timestamp).toLocaleTimeString()})`);
    } catch (err) {
      setError('Error sending echo: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full Stack App 🚀</h1>
        
        {error && <div className="error">{error}</div>}
        
        <section>
          <h2>Hello Message</h2>
          <p>{loading && 'Loading...'}</p>
          <p>{message}</p>
          <button onClick={fetchHello}>Refresh Message</button>
        </section>

        <section>
          <h2>Users</h2>
          <button onClick={fetchUsers}>Load Users</button>
          {users.length > 0 && (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2>Echo Service</h2>
          <input
            type="text"
            value={echoInput}
            onChange={(e) => setEchoInput(e.target.value)}
            placeholder="Type something..."
            onKeyPress={(e) => e.key === 'Enter' && handleEcho()}
          />
          <button onClick={handleEcho}>Send</button>
          {echoResult && <p>{echoResult}</p>}
        </section>
      </header>
    </div>
  );
}

export default App;
