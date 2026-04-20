import Header from "./Header";
import Footer from "./Footer";
import "./public.css"
import home_1 from "/src/assets/home_p1.png";
import home_2 from "/src/assets/home_p2.png";
import ong1 from "/src/assets/img_ong1.png";
import ong2 from "/src/assets/img_ong2.png";
import ong3 from "/src/assets/img_ong3.png";
import ong4 from "/src/assets/img_ong4.png";

function Home(){
        return(
            <>
                <Header />
                <div className="conteiner_home">
                    <div className="p1">
                        <div className="texto">
                            <h1><b className="azul">CASA</b><b className="verde">DA</b></h1>
                            <h1 className="t1 rosa">CRIANÇA</h1>
                            <h2 className="t2">Transformando vidas através do cuidado e da educação</h2>
                            <h2 className="t3">A Casa da Criança de Capivari é uma instituição sem fins lucrativos que acolhe, orienta e acompanha crianças e adolescentes, promovendo desenvolvimento social, educacional e humano.</h2>
                        </div>
                            
                        <img src={home_1} alt="" />
                    </div>

                    <div className="p2">
                        <img src={home_2} alt="" />
                    </div>
                    
                    <div className="mural">
                        <h1 className="branco">Mural</h1>
                        <h2 className="branco">Cada sorriso aqui carrega uma história de cuidado, esperança e transformação.</h2>
                        <div className="img">
                            <img src={ong1} alt="" />
                            <img src={ong2} alt="" />
                            <img src={ong3} alt="" />
                            <img src={ong4} alt="" />
                        </div>
                    </div>

                    <div className="p3">
                        <div className="doacao">
                            <h1>Como você pode ajudar?</h1>
                            <ul>
                                <li>Faça uma doação</li>
                                <li>Seja voluntário</li>
                                <li>Divulgue nossa causa</li>
                                <li>Apoie nossos projetos</li>                        
                            </ul>
                            <a href="">Saiba Mais!</a>
                        </div>

                        <div className="historia">
                            <h1>Nossa História!</h1>
                            <h3>A Casa da Criança de Capivari nasceu com o propósito de oferecer apoio e acolhimento a crianças e adolescentes em situação de vulnerabilidade social.</h3>
                            <a href="">Saiba Mais!</a>
                        </div>
                    </div>

                </div>
                <Footer />
            </>
        
    );
}
export default Home;
