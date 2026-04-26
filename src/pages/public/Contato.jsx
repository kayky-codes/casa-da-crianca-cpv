import Header from "./Header";
import Footer from "./Footer";
import "./public.css";


function Contato() {
    return(
        <>
            <Header />
            <main className="pagina column">

                <section className="row jc_around align_center">
                    <div className="column">
                    <h2>FALE COM A GENTE</h2>
                    <p>
                        Estamos aqui para ouvir você. Seja para dúvidas, sugestões ou voluntariado.
                    </p>
                    </div>

                    <img className="img_media" src="/img/contato.jpg" />
                </section>

                <section className="f_cinza box row jc_around">

                    <div className="column form">
                    <h3>FORMULÁRIO</h3>

                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Telefone" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Motivo do Contato" />
                    <textarea placeholder="Descrição"></textarea>

                    <button>ENVIAR</button>
                    </div>

                    <div className="column contatos">
                    <h3>Contato</h3>

                    <p>📞 (15) 3333-0000</p>
                    <p>✉ contato@email.com</p>
                    <p>📍 Rua da Glória, 45</p>

                    <img className="mapa" src="/img/mapa.jpg" />
                    </div>

                </section>

                <section className="row box gradiente jc_around align_center">
                    <div>
                    <h3 className="branco">SUA AJUDA TRANSFORMA VIDAS</h3>
                    <p className="branco">Pequenas atitudes fazem grande diferença</p>
                    </div>

                    <img className="img_media" src="/img/criancas2.png" />
                </section>

                <section className="column">
                    <h3 className="jc_center row">Faça parte dessa corrente do bem</h3>

                    <div className="linha_cards">
                    <div className="card f_verde branco">Financeiro</div>
                    <div className="card f_rosa branco">Alimentos</div>
                    <div className="card f_azul branco">Roupas</div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
export default Contato;