import { useState } from 'react'
import '../App.css'
import Navbar from "../componentes/NavBar";
import { useNavigate } from "react-router-dom";

function SuaLista() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handlePassarInformacao = () => {
    navigate("/filmes", { state: input });
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite a informação..."
          className="input input-bordered w-80"
        />
        <div className='btn btn-primary w-25' onClick={handlePassarInformacao}>Testar Passar Informação</div>
      </div>
    </div>
  )
}

export default SuaLista