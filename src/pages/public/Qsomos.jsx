import Header from "./Header";
import Footer from "./Footer";
import "./public.css";

function Qsomos() {
    return (
        <>
            <Header />

            <main className="conteiner_home">

                {/* DIV 1 */}
                <div className="p1">
                    <div className="div_texto">
                        <h1 className="azul">Quem Somos!</h1>

                        <p className="t2">
                            Primeiro parágrafo de descrição
                        </p>

                        <p className="t3">
                            Segundo parágrafo explicativo
                        </p>

                        <p className="t3">
                            Terceiro parágrafo complementar
                        </p>
                    </div>

                    <img src="/img/exemplo1.jpg" alt="imagem" />
                </div>

                {/* DIV 2 */}
                <div className="p2_blocos">
                    <div className="bloco">
                        <h2>Bloco 1</h2>
                        <p>Descrição do bloco</p>
                    </div>

                    <div className="bloco">
                        <h2>Bloco 2</h2>
                        <p>Descrição do bloco</p>
                    </div>

                    <div className="bloco">
                        <h2>Bloco 3</h2>
                        <p>Descrição do bloco</p>
                    </div>
                </div>

                {/* DIV 3 */}
                <div className="p3_alt">
                    <h1>Seção Alternada</h1>

                    <div className="linha">
                        <div className="texto">
                            <p>Texto à esquerda</p>
                        </div>
                        <img src="/img/exemplo2.jpg" alt="" />
                    </div>

                    <div className="linha invertido">
                        <img src="/img/exemplo3.jpg" alt="" />
                        <div className="texto">
                            <p>Texto à direita</p>
                        </div>
                    </div>
                </div>

                {/* DIV 4 */}
                <div className="p4">
                    <h1>Informações</h1>

                    <div className="listas">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>

                        <ul>
                            <li>Item A</li>
                            <li>Item B</li>
                            <li>Item C</li>
                        </ul>
                    </div>
                </div>

                {/* DIV 5 */}
                <div className="p5">
                    <h1>Galeria</h1>

                    <div className="linha_cards">
                        <div className="card">
                            <img src="/img/exemplo4.jpg" alt="" />
                            <h3>Título</h3>
                            <p>Texto 1</p>
                            <p>Texto 2</p>
                            <p>Texto 3</p>
                        </div>

                        <div className="card">
                            <img src="/img/exemplo4.jpg" alt="" />
                            <h3>Título</h3>
                            <p>Texto 1</p>
                            <p>Texto 2</p>
                            <p>Texto 3</p>
                        </div>

                        <div className="card">
                            <img src="/img/exemplo4.jpg" alt="" />
                            <h3>Título</h3>
                            <p>Texto 1</p>
                            <p>Texto 2</p>
                            <p>Texto 3</p>
                        </div>
                    </div>
                </div>

                {/* DIV 6 */}
                <div className="p6">
                    <div className="coluna">
                        <h1>Coluna 1</h1>
                        <div className="linha_cards">
                            <div className="card">Item</div>
                            <div className="card">Item</div>
                            <div className="card">Item</div>
                        </div>
                    </div>

                    <div className="coluna">
                        <h1>Coluna 2</h1>
                        <div className="linha_cards">
                            <div className="card">Item</div>
                            <div className="card">Item</div>
                            <div className="card">Item</div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
}

export default Qsomos;