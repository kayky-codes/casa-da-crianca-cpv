import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Acoes() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="acoes1 row jc_around align_center">
                    <div className="column">
                        <h2>AÇÕES QUE TRANSFORMAM VIDAS TODOS OS DIAS</h2>
                        <p>
                            A Casa da Criança realiza ações contínuas voltadas ao desenvolvimento social.
                        </p>
                        <a className="f_verde">QUERO SER VOLUNTÁRIO</a>
                    </div>

                    {/* <img className="img_media" src={} /> */}
                </div>

                <div className="bloco3 column f_verde">
                    <div className="row">
                        <div className="column">
                            <h3>Por que ser voluntário?</h3>
                            <ul>
                                <li>Transforma vidas</li>
                            </ul>
                            <h3>Por que ser voluntário?</h3>
                            <ul>
                                <li>Transforma vidas</li>
                            </ul>
                            <h3>Por que ser voluntário?</h3>
                            <ul>
                                <li>Transforma vidas</li>
                            </ul>
                            <h3>Por que ser voluntário?</h3>
                            <ul>
                                <li>Transforma vidas</li>
                            </ul>
                        </div>

                        {/* <img src={} alt="" /> */}
                        {/* <img src={} alt="" /> */}
                    </div>
                </div>

                <div className="bloco4 column f_rosa">
                    <div className="row">
                        <div className="column">
                            <h3>Por que ser voluntário?</h3>
                            <p>asdada</p>
                            <h3>Por que ser voluntário?</h3>
                            <p>asdada</p>
                            <h3>Por que ser voluntário?</h3>
                            <p>asdada</p>
                            <h3>Por que ser voluntário?</h3>
                            <p>asdada</p>
                        </div>

                        {/* <img src={} alt="" /> */}
                        {/* <img src={} alt="" /> */}
                    </div>
                </div>

                <div className="t_fotos">
                    <h3>Veja algumas ações</h3>
                    <p>asdasdasd</p>
                </div>

                <div className="fotos">
                    <img src="/img/acao1.jpg" />
                    <img src="/img/acao2.jpg" />
                    <img src="/img/acao3.jpg" />
                </div>

                <div className="comecar row">
                    <div className="column">
                        <h3>Pronto para começar?</h3>
                        <p></p>
                        <p className="bold"></p>
                    </div>

                    <div className="column">
                        <a className="f_verde">Quero ajudar</a>

                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
export default Acoes;