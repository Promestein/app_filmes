import React, { useState, useEffect } from "react";
import axios from "axios";

function AutoComplete({ onAtualizar }) {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (input.length > 1) {
        try {
          const response = await axios.get(`http://localhost:8086/api/filmes/autocomplete?query=${input}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error("Erro ao buscar sugestões:", error);
        }
      } else {
        setSuggestions([]);
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
        rating: rating
      });
      setInput("");
      setRating(0);
      onAtualizar();
    } catch (error) {
      console.error("Erro ao adicionar filme:", error);
    }
  };

  return (
    <div className="relative mx-auto items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Adicionar Filme</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="relative w-80 mt-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite o nome do filme..."
            className="input input-bordered w-full"
          />
          {suggestions.length > 0 && (
            <ul className="menu bg-base-100 w-full mt-1 rounded-box shadow-lg absolute z-10">
              {suggestions.map((filme, index) => (
                <li key={index}>
                  <button onClick={() => setInput(filme.name)}>
                    {filme.name} ({filme.rating})
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