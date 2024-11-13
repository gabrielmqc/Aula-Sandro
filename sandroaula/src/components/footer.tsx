import Facebook from "../assets/facebook-icon.svg";
import Instagram from "../assets/instagram-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Logo from "../assets/logo.svg";
import "../styles/footer.css";

export default function Footer() {

    return (
        <footer className="bg-dark text-light py-lg" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <img src={Logo} alt="Logo Totoya" width={180} height={50} />
                        <p className="mt-sm">Doces deliciosos para todos os momentos.</p>
                    </div>
                    <div className="footer-column">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#products">Produtos</a></li>
                            <li><a href="#testimonials">Relatos</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contato</h4>
                        <p>Rua dos Doces, 123</p>
                        <p>Cidade Doce - SP</p>
                        <p>Email: contato@totoya.com</p>
                        <p>Tel: (11) 1234-5678</p>
                    </div>
                    <div className="footer-column">
                        <h4>Redes Sociais</h4>
                        <div className="social-icons">
                            <a href="https://pt-br.facebook.com/pages/create" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a>
                            <a href="https://www.instagram.com/gabriel_mqc?igsh=MWg5aDg1ZnY1NW5oaQ==" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a>
                            <a href="https://www.google.com/search?sca_esv=c8ddd2c726ef673e&sca_upv=1&rlz=1C1ISCS_pt-PT&q=fuck+you+elon&udm=2&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTtShVNbk-60xlcGTvYzJ-DKSTGtJjS2FjB5pmTql0ubRQcrur8VCNRNtkKdC3ObBzKkmbLoRaBPwuLOWGy-L2SeKN5e-RaE9G50f7ELQ-7qM_eWh1264lk7KW_w1d7poKY8FoXLVFyobu_n7brwWzFssyzznMciTouWohlju3iwSe9POrA&sa=X&ved=2ahUKEwjrwOCFjr6IAxUgr5UCHSLjKgMQtKgLegQIDBAB&biw=1920&bih=953&dpr=1#vhid=55nWLnuWBCVPBM&vssid=mosaic" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter" /></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-lg">
                    <p>© 2023 Totoya. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}