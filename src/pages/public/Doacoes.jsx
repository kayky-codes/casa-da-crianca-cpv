import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Doacoes() {
    return(
        <>
            <Header />
            <main className="pagina esquerda">
                <section className="hero">
                    <div className="texto">
                    <h1>SUA AJUDA TRANSFORMA VIDAS!</h1>
                    <p>
                        Uma Pequena Doação Pode Mudar Uma Grande História.
                    </p>
                    <button className="btn_verde">AJUDAR</button>
                    </div>

                    <img src="/img/doacoes.png" alt="Doações" />
                </section>

                <section className="info destaque">
                    <div className="imagens">
                    <img src="/img/criancas1.jpg" />
                    <img src="/img/criancas2.jpg" />
                    </div>

                    <div className="texto">
                    <h3>Sua doação vira cuidado, aprendizado e esperança</h3>
                    <ul>
                        <li>Refeições nutritivas</li>
                        <li>Apoio escolar</li>
                        <li>Atividades educativas</li>
                        <li>Esporte e recreação</li>
                    </ul>
                    </div>
                </section>

                <section className="galeria">
                    <h3>Ao doar, você ajuda a manter sonhos vivos!</h3>
                    <div className="cards">
                    <img src="/img/galeria1.jpg" />
                    <img src="/img/galeria2.jpg" />
                    <img src="/img/galeria3.jpg" />
                    </div>
                </section>

                <section className="doacoes">
                    <h2>Faça parte dessa corrente do bem.</h2>

                    <div className="cards_doacao">
                    <div className="card verde">
                        <h4>Doações financeiras</h4>
                    </div>

                    <div className="card rosa">
                        <h4>Doações de alimentos</h4>
                    </div>

                    <div className="card azul">
                        <h4>Doações de roupas</h4>
                    </div>
                    </div>
                </section>

                <section className="entrega">
                    <div>
                    <h3>Onde entregar?</h3>
                    <p>Rua da Glória, 45 - Capivari, SP</p>
                    </div>
                    <img src="/img/local.jpg" />
                </section>
            </main>
            <Footer />
        </>
    );
}
export default Doacoes;