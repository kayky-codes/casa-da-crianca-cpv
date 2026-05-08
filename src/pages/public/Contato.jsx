import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import ac1 from "/src/assets/ac_1.png";
import ac2 from "/src/assets/ac_2.png";
import h from "/src/assets/home_p2.png";


function Contato() {
    return(
        <>
            <Header />
            <main className="conteiner_public">

                <div className="contato1 row jc_around align_center">
                    <div className="texto column">
                        <h1>FALE COM A GENTE</h1>
                        <p>Estamos aqui para ouvir você</p>
                        <p>Seja para tirar dúvidas, fazer uma doação, se tornar voluntário ou conhecer melhor nosso trabalho, será um prazer falar com você.</p>
                    </div>

                    <div className="imgs">
                        <img className="img1" src={ac1} />
                        <img className="img2" src={ac2} />
                    </div>
                </div>

                <div className="contato2">
                    <div className="c_div f_cinza2 row jc_around">
                        <div className="c_form column">
                            <h1 className="italico cinza">FORMULÁRIO</h1>
                            <h2 className="italico cinza">Nome:</h2>
                            <input type="text"/>
                            <h2 className="italico cinza">Telefone:</h2>
                            <input type="text"/>
                            <h2 className="italico cinza">E-mail:</h2>
                            <input type="email"/>
                            <h2 className="italico cinza">Motivo de contato:</h2>
                            <input type="text"/>
                            <h2 className="italico cinza">Descrição:</h2>
                            <textarea></textarea>

                            <a className="f_cinza3 cinza">ENVIAR</a>
                        </div>

                        <div className="c_tipos column">
                            <div className="row">
                                <div className="c_tipo column">
                                    <img src="" alt="" />
                                    <h3>Telefone</h3>
                                    <p>(19) 3491-5944</p>
                                </div>
                                <div className="c_tipo column">
                                    <img src="" alt="" />
                                    <h3>Email</h3>
                                    <p>contatocasadacriancacapivari@gmail.com</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="c_tipo column">
                                    <img src="" alt="" />
                                    <h3>WhatsApp</h3>
                                    <p>(19) 3491-5944</p>
                                </div>
                                <div className="c_tipo column">
                                    <img src="" alt="" />
                                    <h3>Endereço</h3>
                                    <p>Rua da Glória, 45, Capivari, SP</p>
                                </div>
                            </div>

                            <div className="mapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7242883352615!2d-47.48830212468688!3d-22.99716397919163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61d0177b15555%3A0x5f8b6d8ada810213!2sCasa%20da%20Crian%C3%A7a%20Capivari!5e0!3m2!1spt-BR!2sbr!4v1778138323436!5m2!1spt-BR!2sbr"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner">
                    <img className="" src={h} />
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
export default Contato;