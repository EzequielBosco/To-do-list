import React, { useEffect, useState } from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [backendData, setBackendData] = useState({ users: [] })

  useEffect(() => {
    fetch('http://localhost:3000/api')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener la respuesta del servidor')
      }
      return response.json()
    })
    .then(data => { setBackendData(data) })
    .catch(error => {
      console.error('Error al obtener datos', error)
    })
  }, [])

  return (
    <>
      <p>Hello client</p>
        {backendData.users.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {backendData.users.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
        )}
    </>
  )
}

export default App
