import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuaLista from "./pages/SuaLista";
import TodosFilmes from "./pages/TodosFilmes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuaLista />} />
        <Route path="/filmes" element={<TodosFilmes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;