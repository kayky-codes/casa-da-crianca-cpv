import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import ong from "/src/assets/img_ong2.png";
import ong2 from "/src/assets/img_ong4.png";
import a1 from "/src/assets/a_1.png";
import a2 from "/src/assets/a_2.png";
import a3 from "/src/assets/a_3.png";
import a4 from "/src/assets/a_4.png";
import ong3 from "/src/assets/img_ong3-2.png";

function Atividades() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="atividades row branco f_rosa">
                    <div className="texto">
                        <h1>ATIVIDADES</h1>
                        <h2>Desenvolvimento que vai além da sala de aula.</h2>
                        <p>Oferecemos atividades que contribuem para o crescimento físico, emocional e social das crianças.</p>
                        <p className="bold">Entre nossas ações estão:</p>
                        <ul>
                            <li>Oficinas educativas</li>
                            <li>Atividades recreativas</li>
                            <li>Acompanhamento social</li>
                            <li>Projetos culturais</li>
                            <li>Ações de fortalecimento familiar</li>
                        </ul>
                    </div>

                    <div className="img">
                        <img id="img1" src={ong} />
                        <img id="img2" src={ong2} />
                    </div>
                </div>

                <div className="atividades2 f_azul branco">
                    <h1 className="mar0">Quer ser um voluntário?</h1>
                    <p>Você pode fazer parte desse universo de aprendizado! </p>
                    <p className="txt">Seja ensinando algo que você ama, liderando uma oficina ou simplesmente oferecendo seu tempo para jogar, conversar ou inspirar — toda ajuda é importante e muito bem-vinda.</p>
                    <a className="f_branco preto bold">SAIBA MAIS!</a>
                </div>

                <div className="atividades3 row gradiente branco">
                    <div className="painel column">
                        <div className="row">
                            <img src={a1} />
                            <img src={a2} />
                        </div>
                        <div className="row">
                            <img src={a3} />
                            <img src={a4} />
                        </div>
                    </div>

                    <div className="texto column">
                        <h1>REFEIÇÕES</h1>
                        <h2>DIÁRIAS</h2>
                        <p>Todos os dias servimos refeições nutritivas para as crianças e adolescentes atendidos:</p>
                        <ul className="mar0">
                            <li>Café da manhã</li>
                            <li>Almoço</li>
                            <li>Lanche da tarde</li>
                        </ul>
                        <p>Essas refeições garantem energia, saúde e bem-estar para um dia cheio de atividades e aprendizado</p>
                    </div>
                </div>

                <div className="entrega">
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

                        <img src={ong3} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Atividades;