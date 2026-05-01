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
                <main className="conteiner_public">
                    <div className="row">
                        <div className="div_texto">
                            <h1><b className="azul">CASA</b><b className="verde">DA</b></h1>
                            <h1 className="t1 rosa">CRIANÇA</h1>
                            <h2 className="t2">Transformando vidas através do cuidado e da educação</h2>
                            <h2 className="t3">A Casa da Criança de Capivari é uma instituição sem fins lucrativos que acolhe, orienta e acompanha crianças e adolescentes, promovendo desenvolvimento social, educacional e humano.</h2>
                        </div>
                            
                        <img className="div_img" src={home_1} alt="" />
                    </div>

                    <div className="p2">
                        <img src={home_2} alt="" />
                    </div>
                    
                    <div className="mural column">
                        <h1 className="branco">Mural</h1>
                        <h2 className="branco">Cada sorriso aqui carrega uma história de cuidado, esperança e transformação.</h2>
                        <div className="row">
                            <img src={ong1} alt="" />
                            <img src={ong2} alt="" />
                            <img src={ong3} alt="" />
                            <img src={ong4} alt="" />
                        </div>
                    </div>

                    <div className="p3 row">
                        <div className="info column">
                            <h1 className="rosa">Como você pode ajudar?</h1>
                            <ul className="mar0 bold">
                                <li>Faça uma doação</li>
                                <li>Seja voluntário</li>
                                <li>Divulgue nossa causa</li>
                                <li>Apoie nossos projetos</li>                        
                            </ul>
                            <a className="f_rosa branco" href="">Saiba Mais!</a>
                        </div>

                        <div className="info column">
                            <h1 className="verde bold">Nossa História!</h1>
                            <h3 className="mar0 bold">A Casa da Criança de Capivari nasceu com o propósito de oferecer apoio e acolhimento a crianças e adolescentes em situação de vulnerabilidade social.</h3>
                            <a className="f_verde branco" href="">Saiba Mais!</a>
                        </div>
                    </div>

                </main>
                <Footer />
            </>
        
    );
}
export default Home;
