import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-full">
        <a className="btn btn-ghost text-xl"><Link to="/" className="px-3">Sua Lista</Link></a>
        <a className="btn btn-ghost text-xl"><Link to="/filmes" className="px-3">Todos os Filmes</Link></a> 
    </div>
  );
};

export default Navbar;