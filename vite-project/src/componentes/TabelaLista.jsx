import React, { useState, useEffect } from "react";
import axios from "axios";

function TabelaLista({atualizar}){
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8086/api/sua_lista/todos`);
          console.log("Filmes encontrados:", response.data);
          setFilmes(response.data);
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
    };
    fetchData();
    }, [atualizar]);

    const onDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8086/api/sua_lista/deletar/${id}`);
          setFilmes(filmes.filter(filme => filme.id !== id));
        } catch (error) {
          console.error("Erro ao remover filme:", error);
        }
    }

  return (
    <div className="mx-auto mt-5">
        <h1 className="text-3xl font-bold text-center">
            Sua Lista
        </h1>
        <table className="table table-lg">
            <thead>
                <tr>
                <th></th>
                <th>Filme</th>
                <th>Nota</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {filmes.map((filme, index) => (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{filme.name}</td>
                        <td>{filme.rating}</td>
                        <td>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => onDelete(filme.id)}
                            >
                                🗑️
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default TabelaLista;