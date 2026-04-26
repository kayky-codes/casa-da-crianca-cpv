import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Atividades() {
    return(
        <>
            <Header />
            <main className="pagina direita">
                <section className="atividades">
                    <div className="texto">
                    <h1>ATIVIDADES</h1>
                    <p>Desenvolvimento que vai além da sala de aula.</p>

                    <ul>
                        <li>Estímulo à autonomia</li>
                        <li>Aprendizado social</li>
                        <li>Apoio familiar</li>
                    </ul>
                    </div>

                    <img src="/img/atividade.jpg" />
                </section>

                <section className="voluntario">
                    <h2>Quer ser um voluntário?</h2>
                    <button>SAIBA MAIS</button>
                </section>

                <section className="refeicoes">
                    <div className="imagens">
                    <img src="/img/ref1.jpg" />
                    <img src="/img/ref2.jpg" />
                    <img src="/img/ref3.jpg" />
                    </div>

                    <div className="texto">
                    <h3>REFEIÇÕES DIÁRIAS</h3>
                    <ul>
                        <li>Café da manhã</li>
                        <li>Almoço</li>
                        <li>Lanche da tarde</li>
                    </ul>
                    </div>
                </section>

                <section className="doacoes">
                    <h2>Faça parte dessa corrente do bem.</h2>

                    <div className="cards_doacao">
                    <div className="card verde">
                        Doações financeiras
                    </div>

                    <div className="card rosa">
                        Doações de alimentos
                    </div>

                    <div className="card azul">
                        Doações de roupas
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
export default Atividades;