import MainContent from "./componentes/MainContent"
import Sidebar from "./componentes/sidebar"

import React from 'react';


import "./styles/componentes/app.sass"

function App() {
  return (
    <div id="portifolio">
      <h1>Iago Nogueira</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
