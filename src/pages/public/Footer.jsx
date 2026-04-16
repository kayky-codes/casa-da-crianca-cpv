function Footer() {
    return(
        <footer>
            <div className="contato">
                <h2>Contato</h2>
                <div className="tipos">
                    <div className="telefone">
                        <h3>Telefone</h3>
                        <h3>(19) 3491 - 5944</h3>
                    </div>

                    <div className="email">
                        <h3>E-mail</h3>
                        <h3>contatocasadacriancacapivari@gmail.com</h3>
                    </div>

                    <div className="endereco">
                        <h3>Endereço</h3>
                        <h3>Rua da Glória, 45, Capivari, SP</h3>
                    </div>
                </div>
            </div>

            <div className="rsociais">
                <h3>Rede Sociais</h3>
                <a href="https://www.facebook.com/casadacriancacapivari/?locale=pt_BR" target="_blank" rel="noopener noreferrer"><img className="face" src="src/assets/face.png" alt="Facebook" /></a>
                <a href="https://www.instagram.com/casadacriancacapivari/" target="_blank" rel="noopener noreferrer"><img className="insta" src="src/assets/instagram.png" alt="Intagram" /></a>
            </div>

            <div className="horario">
                <h2>Horario de atendimento</h2>
                <div className="dias">
                    <div className="uteis">
                        <h3>Segunda à Sexta</h3>
                        <h3>8h às 17h</h3>
                    </div>
                    <div>
                        <h3>Sábado</h3>
                        <h3>8h às 12h</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;