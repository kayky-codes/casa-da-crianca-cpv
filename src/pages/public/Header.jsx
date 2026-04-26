import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

function Header() {
    return(
        <header>
            <img className="logo" src={logo} alt="Casa da Criança" />

            <div className="navbar row">
                <h2 className="link"><Link to="/">Home</Link></h2>
                <h2 className="link"><Link to="/qsomos">Quem Somos</Link></h2>
                <h2 className="link"><Link to="/transparencia">Transparência</Link></h2>
                <h2 className="link"><Link to="/doacoes">Doações</Link></h2>
                <h2 className="link"><Link to="/atividade">Atividade da Casa</Link></h2>
                <h2 className="link"><Link to="/voluntario">Voluntáriado</Link></h2>
                <h2 className="link"><Link to="/instalacoes">Instalações</Link></h2>
                <h2 className="link"><Link to="/acoes">Ações</Link></h2>
                <h2 className="link"><Link to="/">Mais</Link></h2>
            </div>
        </header>
    );
}
export default Header;