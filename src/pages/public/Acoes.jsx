import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import ac1 from "/src/assets/ac_1.png";
import ac2 from "/src/assets/ac_2.png";
import ac3 from "/src/assets/ac_3.png";
import h from "/src/assets/home_p2.png";
import i1 from "/src/assets/i_3.png";
import d1 from "/src/assets/d_3.png";
import d2 from "/src/assets/d_4.png";
import f1 from "/src/assets/f_1.png";
import f2 from "/src/assets/f_2.png";
import f3 from "/src/assets/f_3.png";
import f4 from "/src/assets/f_4.png";

function Acoes() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="inicio row jc_around align_center">
                    <div className="texto column">
                        <h1>AÇÕES QUE TRANSFORMAM VIDAS TODOS OS DIAS</h1>
                        <p>
                            A Casa da Criança realiza ações contínuas voltadas ao desenvolvimento social, educacional e emocional de crianças e adolescentes. 
                            <br />Cada iniciativa é pensada para gerar impacto real e duradouro.
                        </p>
                        <a className="f_verde branco bold">QUERO SER VOLUNTÁRIO!</a>
                    </div>

                    <img src={ac3} />
                </div>

                <div className="div_bloco column f_verde branco" id="comp">
                    <h1>TIPOS DE AÇÕES</h1>
                    <div className="row">                        
                        <div className="texto column">
                            <h3>Ações educativas</h3>
                            <ul>
                                <li>Reforço escolar, incentivo à leitura e acompanhamento pedagógico.</li>
                            </ul>
                            <h3>Ações de cuidado</h3>
                            <ul>
                                <li>Alimentação, acolhimento e suporte diário.</li>
                            </ul>
                            <h3>Ações culturais</h3>
                            <ul>
                                <li>Oficinas de arte, música, dança e expressão.</li>
                            </ul>
                            <h3>Ações esportivas</h3>
                            <ul>
                                <li>Atividades que promovem saúde, disciplina e trabalho em equipe.</li>
                            </ul>
                        </div>

                        <div className="twins_imgs" id="comp">
                            <img className="img1" src={i1} />
                            <img className="img2" src={i1} />
                        </div>
                    </div>
                </div>

                <div className="div_bloco column f_rosa branco" id="comp">
                    <h1>PROJETOS ESPECIAIS</h1>
                    <div className="row">                        
                        <div className="texto2 column normal" id="comp">                            
                            <h3>Muito além do dia a dia</h3>
                            <h3>Realizamos também:</h3>
                            <ul>
                                <li>Campanhas solidárias</li>
                                <li>Eventos comemorativos</li>
                                <li>Ações sazonais (Natal, Dia das Crianças, etc.)</li>
                                <li>Passeios e experiências externas</li>
                            </ul>
                        </div>

                            <img className="img_2" src={d1} />
                            <img className="img_2" src={d2} />
                    </div>
                </div>

                <div className="g_fotos column">
                    <div className="t_fotos">
                        <h1>Veja algumas ações que já ocorreram!</h1>
                        <p>Os voluntários podem realizar workshops de um dia ou mesmo dar aulas semanais, quinzenais, conforme disponibilidade. Toda ajuda é bem vinda!</p>
                    </div>

                    <div className="fotos f_cinza">
                        <img src={f1} />
                        <img src={f2} />
                        <img src={f3} />
                        <img src={f4} />
                    </div>

                    <div className="f_bloco row f_azul branco">
                        <div className="texto column">
                            <h1>Pronto para começar?</h1>
                            <p>Junte-se a nós e ajude a construir um futuro melhor para muitas crianças.</p>
                            <p className="bold">💛 Sua presença faz toda a diferença.</p>
                        </div>

                        <div className="btn_horarios column">
                            <a className="f_verde bold">QUERO SER VOLUNTÁRIO!</a>
                            <div className="row">
                                <div className="column p1">
                                    <p className="dias bold">Segunda à Sexta</p>
                                    <p className="normal">8h às 17h</p>
                                </div>
                                <div className="column p2 jc_around">
                                    <p className="dias bold">Sábado</p>
                                    <p className="normal">8h às 12h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Acoes;