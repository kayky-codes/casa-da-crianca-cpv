import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Instalacoes() {
    return(
        <>
            <Header />
            <main className="pagina direita">

            <section className="instalacoes">
                <div>
                <h2>INSTALAÇÕES!</h2>
                <p>Um espaço preparado para acolher.</p>
                </div>

                <img src="/img/criancas.jpg" />
            </section>

            <section className="ambiente">
                <h3>Um ambiente que acolhe</h3>

                <div className="cards_info">
                <div className="card rosa">Atividades educativas</div>
                <div className="card verde">Espaço de lazer</div>
                <div className="card azul">Refeitório</div>
                <div className="card cinza">Área externa</div>
                </div>
            </section>

            <section className="galeria">
                <img src="/img/grupo.jpg" />
                <img src="/img/sala.jpg" />
            </section>

            <section className="doacoes">
                <h3>Faça parte dessa corrente do bem.</h3>

                <div className="cards_doacao">
                <div className="card verde">Financeiro</div>
                <div className="card rosa">Alimentos</div>
                <div className="card azul">Roupas</div>
                </div>
            </section>

            </main>
            <Footer />
        </>
    );
}
export default Instalacoes;