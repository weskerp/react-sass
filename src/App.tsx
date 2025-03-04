import { useEffect } from "react";
import MainContent from "./componentes/MainContent";
import Sidebar from "./componentes/Sidebar";
import BackgroundVanta from "./componentes/BackgroundVanta"

import "./styles/componentes/app.sass";

function App() {

  return (
    <div id="portifolio">
      <BackgroundVanta />
      <h1>Iago Nogueira</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
