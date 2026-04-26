import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Voluntario() {
    return(
        <>
            <Header />
            <main className="pagina meio">

            <section className="transformacao">
                <div>
                <h2>FAÇA PARTE DESSA TRANSFORMAÇÃO!</h2>
                <button className="btn_verde">QUERO SER VOLUNTÁRIO</button>
                </div>

                <img src="/img/moto.jpg" />
            </section>

            <section className="voluntario_info">
                <h3>Por que ser voluntário?</h3>
                <ul>
                <li>Transforma vidas</li>
                <li>Faz diferença</li>
                <li>Ajuda a comunidade</li>
                </ul>
            </section>

            <section className="contribuir">
                <h3>Como você pode contribuir</h3>
                <div className="cards">
                <img src="/img/galeria1.jpg" />
                <img src="/img/galeria2.jpg" />
                </div>
            </section>

            <section className="acoes">
                <h3>Veja algumas ações</h3>
                <div className="galeria">
                <img src="/img/acao1.jpg" />
                <img src="/img/acao2.jpg" />
                <img src="/img/acao3.jpg" />
                </div>
            </section>

            <section className="cta">
                <h3>Pronto para começar?</h3>
                <button className="btn_azul">Quero ajudar</button>
            </section>

            </main>
            <Footer />
        </>
    );
}
export default Voluntario;