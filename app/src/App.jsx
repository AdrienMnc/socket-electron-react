import { useState, useEffect } from 'react'
import {io} from "socket.io-client";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const socket = io("192.168.1.87:3000", {
    autoConnect: false,
  });
  socket.connect();

   socket.on('lobby.enroll', (data) => {
    console.log(data)
    console.log("lobby.enroll");
  });
  
function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    
    //Message de bienvenue avec l'evenement "lobby.enroll"
    
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("lobby.enroll.username", username)
    setUsername('');
  }
 
  //Ecouter l'evenement "lobby.enroll.error" et afficher le message d'erreur
  socket.on('lobby.enroll.error', (data) => {
    console.log(data)
  }
  )
  //Ecouter l'evenement "lobby.enroll.success" et afficher le message de succes
  socket.on('lobby.enroll.success', (data) => {
    console.log(data)
    console.log("seccdqmkld,");
  }
  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>allo</h1>
      <div className="card">
      <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Enter your username" 
          />
          <br /> 
          <br />
          <button type="submit">Connect</button>
        </form>

      </div>
      
    </>
  )
}

export default App
