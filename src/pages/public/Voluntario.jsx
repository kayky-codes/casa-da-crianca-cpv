import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import v1 from "/src/assets/v_1.png";
import i1 from "/src/assets/i_3.png";
import d1 from "/src/assets/d_3.png";
import d2 from "/src/assets/d_4.png";
import f1 from "/src/assets/f_1.png";
import f2 from "/src/assets/f_2.png";
import f3 from "/src/assets/f_3.png";
import f4 from "/src/assets/f_4.png";

function Voluntario() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="inicio row jc_around align_center" id="voluntario">
                    <div className="texto column">
                        <h1>FAÇA PARTE DESSA TRANSFORMAÇÃO!</h1>
                        <h2>Seu tempo pode mudar o futuro de uma criança.</h2>
                        <p>Ao se tornar voluntário, você contribui diretamente para o desenvolvimento, aprendizado e bem-estar de crianças e adolescentes.</p>
                        <a className="f_verde branco bold">QUERO SER VOLUNTÁRIO!</a>
                    </div>

                    <img src={v1} />
                </div>

                <div className="div_bloco column f_azul branco" id="comp">
                    <h1>Transforme vidas</h1>
                    <div className="row">                        
                        <div className="texto column">
                            <h3>Por que ser voluntário?</h3>
                            <ul>
                                <li>Ajude crianças a terem mais oportunidades e um futuro melhor</li>
                            </ul>
                            <h3>Compartilhe conhecimento</h3>
                            <ul>
                                <li>Use suas habilidades para ensinar, inspirar e apoiar.</li>
                            </ul>
                            <h3>Faça parte de algo maior</h3>
                            <ul>
                                <li>Conecte-se com pessoas que acreditam na solidariedade.</li>
                            </ul>
                            <h3>Cresça pessoalmente</h3>
                            <ul>
                                <li>Ser voluntário também transforma você.</li>
                            </ul>
                        </div>

                        <div className="twins_imgs" id="comp">
                            <img className="img1" src={i1} />
                            <img className="img2" src={i1} />
                        </div>
                    </div>
                </div>

                <div className="div_bloco column f_rosa branco" id="comp">
                    <h1>Como você pode contribuir</h1>
                    <div className="row">                        
                        <div className="texto2 column normal" id="voluntario">                            
                            <h4>Apoio escolar</h4>
                            <p>Ajude nas tarefas e incentive o aprendizado.</p>
                            <h4>Oficinas criativas</h4>
                            <p>Artes, música, dança ou qualquer talento que você queira compartilhar.</p>
                            <h4>Esportes e recreação</h4>
                            <p>Promova diversão e trabalho em equipe.</p>
                            <h4>Eventos e ações especiais</h4>
                            <p>Ajude na organização e execução de atividades.</p>
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
export default Voluntario;