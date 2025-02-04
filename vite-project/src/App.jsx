import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [filmes, setFilmes] = useState([]);
  const [filme, novoFilme] = useState('');
  // const [listaFIlmes] = useState([])
  const handleAddItem = () => {
    if (filme.trim() !== '') {
      setFilmes([...filmes, filme]);
      novoFilme('');
    }
  };
  return (
    <>
      <div className="container items-center">
        <div className='flex items-center justify-center'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" value={filme} onChange={(e) => novoFilme(e.target.value)}/>
          </label>
          <button className="btn btn-primary" onClick={handleAddItem}>Adicionar</button>
        </div>
      </div>
      <br />
      <h1 className="text-3xl font-bold text-center">
        Lista de Filmes
      </h1>
      <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Filme</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((filme, index) => (
              <tr key={index}>
                <th>{index+1}</th>
                <td>{filme}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </>
  )
}

export default App
