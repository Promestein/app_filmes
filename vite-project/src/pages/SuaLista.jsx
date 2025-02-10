import { useState } from 'react'
import '../App.css'
import AutoComplete from "../componentes/AutoComplete";
import TabelaLista from "../componentes/TabelaLista";
import Navbar from '../componentes/NavBar';

function SuaLista() {
  const [atualizar, setAtualizar] = useState(false);
  
  const handleAtualizar = () => {
    setAtualizar(!atualizar);
  }

  return (
    <div className="overflow-x-auto w-full">
        <Navbar />
        <AutoComplete onAtualizar={handleAtualizar}/>
        <br />
        <TabelaLista atualizar={atualizar}/>
        <br />
    </div>
  )
}

export default SuaLista