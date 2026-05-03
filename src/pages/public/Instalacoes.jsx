import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Instalacoes() {
    return(
        <>
            <Header />
            <main className="pagina direita">

                <div className="instalacoes1 row">
                    <div className="column">
                        <h2>INSTALAÇÕES!</h2>
                        <p>Um espaço preparado para acolher.</p>
                    </div>

                    {/* <img src={} /> */}
                    {/* <img src={} /> */}
                </div>

                <div className="instalacoes2">
                    <h3>Um ambiente que acolhe</h3>
                    <p></p>

                    <div className="cards_info">
                        <div className="card f_rosa">Atividades educativas</div>
                        <div className="card f_verde">Espaço de lazer</div>
                        <div className="card f_azul">Refeitório</div>
                        <div className="card f_cinza">Área externa</div>
                    </div>
                </div>

                <div className="instalacoes3">
                    <p></p>
                    {/* <img src={} /> */}
                    {/* <img src={} /> */}
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
export default Instalacoes;