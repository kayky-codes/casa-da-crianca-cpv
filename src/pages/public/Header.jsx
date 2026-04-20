import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

function Header() {
    return(
        <header>
            <img className="logo" src={logo} alt="Casa da Criança" />

            <div className="navbar">
                <h2 className="link"><Link to="/">Home</Link></h2>
                <h2 className="link"><Link to="/Qsomos">Quem Somos</Link></h2>
                <h2 className="link"><Link>Transparência</Link></h2>
                <h2 className="link"><Link>Doações</Link></h2>
                <h2 className="link"><Link>Atividade da Casa</Link></h2>
                <h2 className="link"><Link>Voluntáriado</Link></h2>
                <h2 className="link"><Link>Instalações</Link></h2>
                <h2 className="link"><Link>Ações</Link></h2>
                <h2 className="link"><Link>Mais</Link></h2>
            </div>
        </header>
    );
}
export default Header;