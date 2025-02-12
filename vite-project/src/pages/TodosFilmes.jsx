import { useState, useEffect } from "react";
import Navbar from "../componentes/NavBar";
import { useLocation } from "react-router-dom";

export default function FilmeTable() {
    const [filmes, setFilmes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;

    useEffect(() => {
        fetch("http://localhost:8086/api/filmes/todos") // Ajuste a URL conforme necessário
            .then((res) => res.json())
            .then((data) => setFilmes(data));
    }, []);

    const location = useLocation();
    const informacaoPassada = location.state;

    // Paginação: calcular índices de início e fim
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFilmes = filmes.slice(indexOfFirstItem, indexOfLastItem);

    // Total de páginas
    const totalPages = Math.ceil(filmes.length / itemsPerPage);

    return (
        <div className="overflow-x-auto">
            <Navbar />
            <h1 className="text-2xl font-bold text-center mt-4">Informação passada: {informacaoPassada}</h1>
        </div>
    );
}