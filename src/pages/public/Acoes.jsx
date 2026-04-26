import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Acoes() {
    return(
        <>
            <Header />
            <main className="pagina column">

                <section className="row jc_around align_center">
                    <div className="column">
                    <h2>AÇÕES QUE TRANSFORMAM VIDAS TODOS OS DIAS</h2>
                    <p>
                        A Casa da Criança realiza ações contínuas voltadas ao desenvolvimento social.
                    </p>
                    <button className="btn_verde">QUERO SER VOLUNTÁRIO</button>
                    </div>

                    <img className="img_media" src="/img/acoes.jpg" />
                </section>

                <section className="f_verde branco box column">
                    <h3 className="jc_center row">TIPOS DE AÇÕES</h3>

                    <div className="row jc_around align_center">
                    <ul>
                        <li>Ações educativas</li>
                        <li>Ações culturais</li>
                        <li>Ações sociais</li>
                    </ul>

                    <img className="img_media" src="/img/criancas.jpg" />
                    </div>
                </section>

                <section className="f_rosa box column">
                    <h3 className="jc_center row">PROJETOS ESPECIAIS</h3>

                    <div className="row jc_center">
                    <img className="img_pequena" src="/img/projeto1.jpg" />
                    <img className="img_pequena" src="/img/projeto2.jpg" />
                    </div>
                </section>

                <section className="column">
                    <h3 className="jc_center row">Veja algumas ações que já ocorreram!</h3>

                    <div className="row jc_center">
                    <img className="img_pequena" src="/img/acao1.jpg" />
                    <img className="img_pequena" src="/img/acao2.jpg" />
                    <img className="img_pequena" src="/img/acao3.jpg" />
                    <img className="img_pequena" src="/img/acao4.jpg" />
                    </div>
                </section>

                <section className="f_azul branco box row jc_around align_center">
                    <div>
                    <h3>Pronto para Começar?</h3>
                    <p>Sua presença faz toda diferença.</p>
                    </div>

                    <button className="btn_branco">Quero ser voluntário</button>
                </section>

            </main>
            <Footer />
        </>
    );
}
export default Acoes;