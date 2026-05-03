import Header from "./Header";
import Footer from "./Footer";
import "./public.css";


function Contato() {
    return(
        <>
            <Header />
            <main className="conteiner_public">

                <div className="contato1 row jc_around align_center">
                    <div className="column">
                        <h2>FALE COM A GENTE</h2>
                        <p>Estamos aqui para ouvir você. Seja para dúvidas, sugestões ou voluntariado.</p>
                        <p></p>
                    </div>

                    {/* <img className="img_media" src={} /> */}
                    {/* <img className="img_media" src={} /> */}
                </div>

                <div className="contato2 f_cinza row jc_around">

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

                        {/* colocar um mapa aqui */}
                    </div>

                </div>

                <div className="mural">
                    {/* <img className="img_media" src={} /> */}
                </div>

                <div className="entrega">
                    <div className="d_blocos row branco">
                        <div className="bloco f_verde">
                            <h2>Doações financeiras</h2>
                            <h3 className="mar0">Você pode contribuir por meio de:</h3>
                            <ul>                                
                                <li>Transferência bancária</li>
                                <li>PIX</li>
                                <li>Depósito</li>
                            </ul>    
                            <h4>BANCO SANTANDER</h4>
                            <h5 className="mar0">Agência 0149 - C/C 13-001141-1</h5>
                        </div>

                        <div className="bloco f_rosa branco">
                            <h2>Doações de alimentos</h2>
                            <h3 className="mar0">Itens mais necessários:</h3>
                            <ul>                                
                                <li>Arroz</li>
                                <li>Feijão</li>
                                <li>Leite</li>
                                <li>Macarrão</li>
                                <li>Óleo</li>
                                <li>Açúcar</li>
                            </ul>    
                        </div>

                        <div className="bloco f_azul branco">
                            <h2>Doações de roupas e itens diversos</h2>
                            <ul>                                
                                <li>Roupas infantis</li>
                                <li>Calçados</li>
                                <li>Produtos de higiene</li>
                                <li>Materiais escolares</li>
                            </ul>    
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
export default Contato;