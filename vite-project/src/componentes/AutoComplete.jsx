import { useState, useEffect, useRef } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function AutoComplete({ onAtualizar }) {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      if (input.length > 1) {
        try {
          const response = await axios.get(`http://localhost:8086/api/filmes/autocomplete?query=${input}`);
          setSuggestions(response.data);
          setShowSuggestions(true); // Exibir sugestões ao carregar os dados
        } catch (error) {
          console.error("Erro ao buscar sugestões:", error);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false); // Esconder dropdown se não houver sugestões
      }
    };

    fetchData();
  }, [input]);

  const adicionar = async () => {
    try {
      if (input === "") {
        return;
      }
      await axios.post(`http://localhost:8086/api/sua_lista/adicionar`, {
        name: input,
        rating: rating,
      });
      setInput("");
      setRating(0);
      setShowSuggestions(false);
      onAtualizar();
    } catch (error) {
      console.error("Erro ao adicionar filme:", error);
    }
  };

  // Esconder sugestões ao clicar fora do componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mx-auto items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Adicionar Filme</h1>
      <div className="flex items-center justify-center">
        <div className="relative w-80 mt-5" ref={inputRef}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => input.length > 1 && setShowSuggestions(true)} // Reexibir se houver texto
            placeholder="Digite o nome do filme..."
            className="input input-bordered w-full"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="menu flex flex-row bg-base-100 w-full mt-1 rounded-box shadow-lg absolute z-10 max-h-60 overflow-y-auto overflow-x-hidden">
              {suggestions.map((filme, index) => (
                <li key={index}>
                  <button onClick={() => setInput(filme.name)}>
                    {filme.name} ({filme.date})
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rating rating-lg rating-half ml-5 mt-5">
          {[...Array(10)].map((_, i) => (
            <input
              key={i}
              type="radio"
              name="rating-10"
              className={`mask mask-star-2 ${i % 2 === 0 ? "mask-half-1" : "mask-half-2"} bg-green-500`}
              onChange={() => setRating((i + 1) / 2)}
              checked={rating === (i + 1) / 2}
            />
          ))}
        </div>
        <button onClick={() => { adicionar(); onAtualizar(); }} className="btn btn-primary mt-5 ml-5">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AutoComplete;