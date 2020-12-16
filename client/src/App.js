import './App.css';
import Chat from './Chat';
import io from 'socket.io-client';
import { useState, useEffect } from 'react'

function App() {
  const [socket] = useState(() => io(':8000'));
    useEffect(() => {
        console.log('is this running?');
        socket.on('event', data => console.log(data));

        return () => socket.disconnect(true);
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Chat />
      </header>
    </div>
  );
}

export default App;
