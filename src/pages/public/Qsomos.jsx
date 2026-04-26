import Header from "./Header";
import Footer from "./Footer";
import "./public.css";
import qs1 from "/src/assets/qs1.png";
import ong from "/src/assets/img_ong3-2.png";
import logo from "/src/assets/logo.png";

function Qsomos() {
    return (
        <>
            <Header />

            <main className="conteiner_public">

                {/* DIV 1 */}
                <div className="row f_branco">
                    <div className="div_texto" id="qsomos">
                        <h1 className="t1qs">QUEM SOMOS!</h1>
                        <h2 className="t2qs">A Casa da Criança de Capivari nasceu com o propósito de oferecer apoio e acolhimento a crianças e adolescentes em situação de vulnerabilidade social.</h2>
                        <h2 className="t2qs">Ao longo dos anos, construímos uma trajetória baseada no amor, respeito e compromisso com a transformação social.</h2>
                        <h2 className="t2qs">Trabalhamos para garantir que cada criança tenha acesso a atividades educativas, acompanhamento e um ambiente seguro para crescer e se desenvolver.</h2>
                    </div>

                    <img className="qs1" src={qs1} alt="" />
                </div>

                {/* DIV 2 */}
                <div className="p2_blocos branco">
                    <div className="bloco f_verde">
                        <h2>Nossa Missão</h2>
                        <p>Promover o desenvolvimento integral de crianças e adolescentes, fortalecendo valores, autoestima e oportunidades.</p>
                    </div>

                    <div className="bloco f_azul">
                        <h2>Nossa Visão</h2>
                        <p>Ser referência no atendimento socioeducativo no município de Capivari.</p>
                    </div>

                    <div className="bloco f_rosa">
                        <h2>Nossos Valores</h2>
                        <ul>
                            <li>Respeito</li>
                            <li>Transparência</li>
                            <li>Responsabilidade social</li>
                            <li>Compromisso com o futuro</li>
                        </ul>
                    </div>
                </div>

                {/* DIV 3 */}
                <div className="p3_qs">
                    <h1>Nossa História</h1>

                    <div className="coluna row">
                        <div className="texto1 column">
                            <p> 
                                Em 1994 um grupo de pessoas imbuídas de bom-senso, espírito humanitário e responsabilidade social, reuniram-se no salão nobre da Faculdade de Administração de Capivari (atual CNEC), para fundarem a Central de Educação e Atendimento da Criança - CEAC. Nesse dia, ficou decidido que a instituição teria, como nome popular, "Casa da Criança", e que seria uma instituição filantrópica, sem fins lucrativos, sem vinculação político-partidária ou religiosa.
                                Nesse período, o Brasil atravessava uma fase conturbada. O sociólogo Fernando Henrique Cardoso havia sido eleito presidente e, um pouco antes, os brasileiros haviam atravessado um período nebuloso no chamado impeachment do ex-presidente Fernando Collor de Mello.                                
                            </p>
                            <p>
                                Em 1990, havia sido aprovado o Estatuto da Criança e do Adolescente - ECA e, nesse início de década, houve alguns acontecimentos graves, como o episódio conhecido como a Chacina da Candelária, no Rio de Janeiro, onde oito adolescentes, moradores de rua, foram barbaramente assassinados a sangue frio, por policiais militares, enquanto dormiam sob uma marquise em frente à Igreja da Candelária.
                            </p>
                            <img src={ong} alt="" />
                        </div>

                        <div className="texto2">
                            <img src={logo} alt="" />
                            <p>
                                Essa somatória de fatores e a preocupação com o futuro das crianças e adolescentes de nossa cidade levou as seguintes pessoas a plantar a semente para um futuro melhor: Ailton Giovanetti  Júnior, Ailton Pereira Brito, Alexandre Pacheco May, Alfredo Mattar Macluf, Ana Alves Gerônimo, André Luiz Teixeira Nardi, Ângelo Carlos Tezotto, Ângelo Ovídio Valesin, Arnaldo Divo Rodrigues de Camargo, Beatriz Fonseca Macluf, Delçon Andriotti, Dirceu Ortolani Stein, Eliana Aparecida Fronho, José Maria Carravero, Lenira Puglia Raimundo de Góes, Lourdes Assunção Forti, Luiz Antonio Pereira da Silva, Marco César Raimundo de Góes, Mara Regina Rodrigues Tezotto, Maria Amélia D'Arcádia, Maria Angélica Albertini Ortolani, Maria Angelina Marturano, Maria Aparecida de Arruda, Maria Elisa Chiarini Martins, Marilena Toledo Amaral Andreotti, Marli Oliveira, Nadir Prado Monticelli, Nilde Antonio Barroso de Brito, Norberto Vidoto de Negreiros, Norival Benedito Figueiredo, Otávio da Costa, Otília Fornazieri, Pedro Ortolani, Rosa Maria Macluf Carravero, Rosângela Précoma, Vera Lúcia Cassaniga e Virgínia Bastos de Mattos.                                
                            </p>                            
                            <p>
                                Graças a essas pessoas, e tantas outras que hoje apoiam a instituição com suas doações, muitas crianças e adolescentes carentes são atendidas diariamente na instituição, hoje dirigida também por integrantes que abraçaram a causa da criança e do adolescente em Capivari.
                            </p>
                        </div>
                    </div>
                </div>

                {/* DIV 4 */}
                <div className="p4 column branco">
                    <h1>Registros</h1>

                    <div className="listas row">
                        <ul>
                            <li>CNPJ: 00.365.696/0001-50</li>
                            <li>Inscrição Estadual: isenta</li>
                            <li>Utilidade Pública Estadual: lei nº 14.445/2011, de 4 de maio de 2011</li>
                        </ul>
                        <ul>
                            <li>Utilidade Pública Municipal: lei nº 2.642/1999, de 4 de agosto de 1999</li>
                            <li>Conselho Municipal de Assistência Social: inscrição nº 07</li>
                            <li>Conselho Municipal dos Direitos da Criança e do Adolescente: registro nº 11 </li>
                        </ul>
                    </div>
                </div>

                {/* DIV 5 */}
                <div className="p5">
                    <h1 className="mar0">Nossos Diretores</h1>

                    <div className="linha_cards row">
                        <div className="card column">
                            <img src="" alt="" />                    
                            <div className="texto column">
                                <p>Pedro Sérgio Bottesini Ramalho</p>
                                <p><b>2º Vice - Presidente</b></p>
                            </div>
                        </div>

                        <div className="card column">
                            <img src="" alt="" />                    
                            <div className="texto column">
                                <p>Nadia Paes Piazentino</p>
                                <p><b>1° Secretaria</b></p>
                            </div>
                        </div>

                        <div className="card column">
                            <img src="" alt="" />                    
                            <div className="texto column">
                                <p>Aparecida de Fátima Cristoforo Laucci</p>
                                <p><b>2° Secretaria</b></p>
                            </div>
                        </div>

                        <div className="card column">
                            <img src="" alt="" />                    
                            <div className="texto column">
                                <p>Leonardo Carrara</p>
                                <p><b>1° Tesoureiro</b></p>
                            </div>
                        </div>

                        <div className="card column">
                            <img src="" alt="" />                    
                            <div className="texto column">
                                <p>Paulo de Tarso Juliani</p>
                                <p><b>2° Tesoureiro</b></p>
                            </div>
                        </div>

                        <div className="card column">
                            <img src="/img/exemplo4.jpg" alt="" />                    
                            <div className="texto column">
                                <p>Marcos Marrocco</p>
                                <p><b>Presidente</b></p>
                            </div>
                        </div>

                        <div className="card column">
                            <img src="/img/exemplo4.jpg" alt="" />                    
                            <div className="texto column">
                                <p>Carlos Roberto Laucci</p>
                                <p><b>1° Vice-Presidente</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="tipos row jc_around">
                        <h1 className="mar0">Conselho Fiscal</h1>
                        <h1 className="mar0">Suplentes</h1>
                    </div>
                    <div className="linha_cards2 jc_around">
                        <div className="seg row">
                            <div className="card">
                                <img src="" alt="" />                        
                                <div className="texto column">
                                    <p>Carlos Giraldi</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src="/img/exemplo4.jpg" alt="" />                        
                                <div className="texto column">
                                    <p>Antônio Carlos Rossi</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src="/img/exemplo4.jpg" alt="" />                        
                                <div className="texto column">
                                    <p>Célia Maria Giacomini Juliani</p>                                    
                                </div>
                            </div>
                        </div>
                        <div className="seg row">
                            <div className="card">
                                <img src="" alt="" />
                                <div className="texto column">
                                    <p>Maria Aparecida Schincariol de Castro Carvalho</p>                                    
                                </div>
                            </div>

                            <div className="card">
                                <img src="/img/exemplo4.jpg" alt="" />                        
                                <div className="texto column">
                                    <p>Alex Roberto Laucci</p>                                    
                                </div>
                            </div>

                            <div className="card">
                                <img src="/img/exemplo4.jpg" alt="" />                        
                                <div className="texto column">
                                    <p>Vânia Rosatto de Carvalho Marrocco</p>                                    
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

export default Qsomos;