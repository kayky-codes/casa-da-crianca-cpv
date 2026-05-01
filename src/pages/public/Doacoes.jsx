import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import comida from "/src/assets/comida.png";
import d1 from "/src/assets/d_1.png";
import d2 from "/src/assets/d_2.png";
import d3 from "/src/assets/d_3.png";
import d4 from "/src/assets/d_4.png";
import ong from "/src/assets/img_ong3-2.png";

function Doacoes() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="doacoes row">
                    <div className="p1">
                        <h1>SUA AJUDA</h1>
                        <h1>TRANSFORMA VIDAS !</h1>
                        <h2>Uma Pequena Doação Pode Mudar Um Grande Futuro.</h2>
                        <p>Todos os dias, a Casa da Criança de Capivari acolhe crianças e adolescentes oferecendo cuidado, alimentação, educação e oportunidades de crescimento.</p>
                        <p>Mas para continuar esse trabalho tão importante, contamos com a solidariedade de pessoas que acreditam em um futuro melhor.</p>
                        <p className="italico bold">Sua ajuda pode mudar a vida de uma criança.</p>

                        <a className="f_verde branco">AJUDAR !</a>
                    </div>

                    <img src={comida} alt="" />
                </div>

                <div className="doacoes2 column f_rosa branco">
                    <h1>Sua doação vira cuidado, aprendizado e esperança</h1>
                    <div className="row">
                        <img className="img1" src={d1} />
                        <img className="img1" src={d2} />
                    
                        <div className="column texto">
                            <p>Cada contribuição recebida ajuda a garantir:</p>
                            <ul>
                                <li>Refeições nutritivas</li>
                                <li>Apoio escolar</li>
                                <li>Atividades educativas</li>
                                <li>Esporte e recreação</li>
                            </ul>
                            <p>
                                Quando você doa, não está apenas ajudando uma instituição. <br />
                                Você está investindo no futuro de muitas crianças.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="doacoes2 column f_branco">
                    <h1>Ao doar, você ajuda a manter sonhos vivos !</h1>
                    <div className="row">                        
                        <div className="column texto2">
                            <p>Cada criança merece a chance de aprender, sonhar e construir um caminho cheio de oportunidades.</p>
                            <p>Com sua ajuda, conseguimos manter projetos educativos, atividades culturais e apoio social para quem mais precisa.</p>
                            <p>💛 Sua solidariedade faz toda a diferença.</p>
                        </div>

                        <img className="img2" src={d3} />
                        <img className="img2" src={d4} />
                    </div>
                </div>

                <div className="doacoes3-4">
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

                        <img src={ong} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Doacoes;