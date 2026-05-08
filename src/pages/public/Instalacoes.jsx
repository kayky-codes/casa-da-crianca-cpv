import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
// import  from "";
import i1 from "/src/assets/i_1.png";
import i2 from "/src/assets/i_2.png";
import i3 from "/src/assets/i_3.png";

function Instalacoes() {
    return(
        <>
            <Header />
            <main className="conteiner_public">
                <div className="instalacoes1 row f_branco">
                    <div className="texto column">
                        <h1>INSTALAÇÕES!</h1>
                        <h2>Um espaço preparado para acolher e transformar</h2>
                        <p>Cada ambiente da Casa da Criança foi pensado para oferecer conforto, segurança e bem-estar, criando um espaço onde as crianças podem aprender, brincar e se desenvolver com tranquilidade.</p>
                    </div>

                    <div className="twins_imgs">
                        <img className="img1" src={i3} />
                        <img className="img2" src={i3} />
                    </div>
                </div>

                <div className="instalacoes2 column">
                    <h1 className="titulo normal">Um ambiente que acolhe de verdade</h1>
                    <p className="subtitulo">Mais do que estrutura física, oferecemos um espaço onde cada criança se sente segura, respeitada e valorizada.</p>

                    <div className="linha_cards3 row jc_center branco">
                        <div className="card column jc_center f_rosa">
                            <p className="p2 bold">Ambientes educativos</p>
                            <p className="mar0">Salas organizadas e preparadas para atividades pedagógicas, reforço escolar e oficinas.</p>
                        </div>
                        <div className="card column jc_center f_verde">
                            <p className="p2 bold">Espaço de atividades</p>
                            <p className="mar0">Ambiente criativo para artes, oficinas e desenvolvimento de habilidades.</p>
                        </div>
                    </div>
                    <div className="linha_cards3 row jc_center branco">
                        <div className="card column jc_center f_azul">
                            <p className="p2 bold">Refeitório</p>
                            <p className="mar0">Espaço dedicado à alimentação, onde são servidas refeições nutritivas diariamente.</p>
                        </div>
                        <div className="card column jc_center f_cinza-escuro">
                            <p className="p2 bold">Área externa</p>
                            <p className="mar0">Local para brincadeiras, esportes e momentos de lazer.</p>
                        </div>
                    </div>
                </div>

                <div className="instalacoes3 column">
                    <p>Cada espaço guarda momentos de aprendizado, alegria e crescimento.</p>
                    <div className="row">
                        <img src={i1} />
                        <img src={i2} />
                    </div>
                </div>

                <div className="entrega">
                    <div className="entrega_texto column">
                        <h1>Faça parte dessa corrente do bem.</h1>
                        <p>Sua doação ajuda a transformar o presente e construir o futuro de muitas crianças.</p>
                        <a className="f_verde branco" href="">QUERO AJUDAR!</a>
                    </div>
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