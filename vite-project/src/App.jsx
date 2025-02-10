import { useState } from 'react'
import './App.css'
import AutoComplete from "./componentes/AutoComplete";
import TabelaLista from "./componentes/TabelaLista";


function App() {
    const [atualizar, setAtualizar] = useState(false);
  
  const handleAtualizar = () => {
    setAtualizar(!atualizar);
  }

  return (
    <div className="w-full">
        <AutoComplete onAtualizar={handleAtualizar}/>
        <br />
        <TabelaLista atualizar={atualizar}/>
        <br />
    </div>
  )

}

export default App
