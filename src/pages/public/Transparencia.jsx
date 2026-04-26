import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Transparencia() {
    return(
        <>
            <Header />
            <main className="pagina esquerda">

            <section className="topo">
                <h1>PÁGINA DE TRANSPARÊNCIA</h1>

                <div className="bloco">
                <img src="/img/equipe.jpg" />
                <p>
                    Compromisso com a confiança e responsabilidade.
                </p>
                </div>
            </section>

            <section className="entrega">
                <div>
                <h3>Onde entregar?</h3>
                <p>Rua da Glória, 45 - Capivari, SP</p>
                </div>
                <img src="/img/local.jpg" />
            </section>

            <section className="prestacao">
                <h2>Prestação de contas</h2>
                <div className="cards_info">
                <div className="card verde">Entradas</div>
                <div className="card rosa">Saídas</div>
                <div className="card azul">Investimentos</div>
                </div>
            </section>

            <section className="arquivos">
                <h3>Espaço Transparência</h3>
                <div className="grid_docs">
                <div className="doc">Documento</div>
                <div className="doc">Documento</div>
                <div className="doc">Documento</div>
                <div className="doc">Documento</div>
                </div>
            </section>

            </main>
            <Footer />
        </>
    );
}
export default Transparencia;