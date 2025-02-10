import { useState, useEffect } from "react";
import Navbar from "../componentes/NavBar";

export default function FilmeTable() {
    const [filmes, setFilmes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;

    useEffect(() => {
        fetch("http://localhost:8086/api/filmes/todos") // Ajuste a URL conforme necessário
            .then((res) => res.json())
            .then((data) => setFilmes(data));
    }, []);

    // Paginação: calcular índices de início e fim
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFilmes = filmes.slice(indexOfFirstItem, indexOfLastItem);

    // Total de páginas
    const totalPages = Math.ceil(filmes.length / itemsPerPage);

    return (
        <div className="overflow-x-auto">
            <Navbar />
            <div className="overflow-x-auto">
                <table className="table w-full table-fixed">
                    <thead>
                        <tr>
                            <th className="w-16">#</th>
                            <th className="w-64">Nome</th>
                            <th className="w-16">Nota</th>
                            <th className="w-24">Ano</th>
                            <th className="w-48">Gênero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentFilmes.map((filme) => (
                            <tr key={filme.id}>
                                <td className="w-16">{filme.id}</td>
                                <td className="w-64 truncate overflow-hidden whitespace-nowrap">{filme.name}</td>
                                <td className="w-16">{filme.rating}</td>
                                <td className="w-24">{filme.date}</td>
                                <td className="w-48">{filme.genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-center items-center mt-4 space-x-4">
                    <button 
                        onClick={() => setCurrentPage(currentPage - 1)} 
                        disabled={currentPage === 1}
                        className="btn btn-sm"
                    >
                        ⬅ Anterior
                    </button>
                    
                    <span>Página {currentPage} de {totalPages}</span>
                    
                    <button 
                        onClick={() => setCurrentPage(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="btn btn-sm"
                    >
                        Próximo ➡
                    </button>
                </div>
            </div>
        </div>
    );
}