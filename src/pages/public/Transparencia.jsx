import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import t1 from "/src/assets/t_1.png";
import ong from "/src/assets/img_ong3-2.png";
import doc from "/src/assets/doc.png";

function Transparencia() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="transparencia1 column">
                    <h1 className="azul">PÁGINA DE TRANSPARÊNCIA</h1>

                    <div className="row">
                        <img src={t1} />

                        <div className="column">
                            <h2>Compromisso com a confiança e responsabilidade.</h2>
                            <p>Na Casa da Criança de Capivari, acreditamos que a transparência é essencial para construir relações de confiança com a comunidade, parceiros e apoiadores.</p>                            
                            <p>Por isso, trabalhamos com responsabilidade na gestão de todos os recursos recebidos, garantindo que cada contribuição seja utilizada de forma ética e eficiente.</p>
                        </div>
                    </div>
                </div>

                <div className="entrega">
                    <div className="bloco2 row f_azul branco">                                        
                        <div className="column texto">
                            <h1>Onde entregar?</h1>
                            <h1 className="normal">Rua da Glória, 45 - Capivari, SP</h1>

                            <div className="d_horario column">
                                <h2>Horario de atendimento</h2>
                                <div className="row">
                                    <div className="d_uteis">
                                        <h3>Segunda à Sexta</h3>
                                        <h4>8h às 17h</h4>
                                    </div>
                                    <div>
                                        <h3>Sábado</h3>
                                        <h4>8h às 12h</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={ong} />
                    </div>
                    
                    <h1>Faça parte dessa corrente do bem.</h1>
                    <p>Sua doação ajuda a transformar o presente e construir o futuro de muitas crianças.</p>

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

                <div className="t_m">
                    <div className="transparencia2 column gradiente branco" style={{"--angulo": "0deg"}}>
                        <h1>Espaço Transparência</h1>
                        <h2 className="italico">Prestação de Contas</h2>
                        <div className="topo">
                            <p className="branco">Pesquisa:</p>
                            <div className="inputs row">
                                <input className="inpt1" type="text" />
                                <input className="inpt2" type="search" name="" id="" />
                            </div>
                        </div>

                        <div className="arquivos">
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">ALVARÁ DE FUNCIONAMENTO</p>                    
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                                                
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                    
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                                                
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                    
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                                                
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                    
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                                                
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                    
                            </div>
                            <div className="doc column jc_center">
                                <img src={doc} alt="" />
                                <p className="preto mar0">Documento</p>                                                
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
export default Transparencia;