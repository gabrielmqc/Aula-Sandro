
import { useState } from 'react';
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/button";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/burger.svg"
import "../styles/utility.css";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/product.css";
import "../styles/footer.css";
import ProductImage1 from "../assets/images/product1.png";
import ProductImage2 from "../assets/images/product2.png";
import ProductImage3 from "../assets/images/product3.png";
import Facebook from "../assets/facebook-icon.svg";
import Instagram from "../assets/instagram-icon.svg";
import Twitter from "../assets/twitter-icon.svg";



export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={60} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#products">Produtos</a>
                            </li>

                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#products">Produtos</a>
                                        </li>

                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>

                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id='hero'>
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Ola!
                    </p><h1>Doces maravilhosos e baratos a pronta entrega!</h1><p>Já pensou em matar aquela vontade repentina de doce que surge do nada?</p><div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>
            <section id='products' className="container py-lg">
                <div className=''>

                </div>
                <h1 className="items-center mb-md">Nossos Produtos Deliciosos</h1>
                <div className="product-grid">
                    <div className="product-card">
                        <img src={ProductImage1} alt="Produto 1" className="product-image" />
                        <h3>Pudim de Marcujá</h3>
                        <p>Delicioso pudim feito utilizando da poupa do maracujá</p>
                    </div>
                    <div className="product-card">
                        <img src={ProductImage2} alt="Produto 2" className="product-image" />
                        <h3>Bolo de Chocolate</h3>
                        <p>Bolo de chocolate com cobertura cremosa</p>
                    </div>
                    <div className="product-card">
                        <img src={ProductImage3} alt="Produto 3" className="product-image" />
                        <h3>Torta de Limão</h3>
                        <p>Torta de massa crocante recheada com creme de limão</p>
                    </div>
                </div>
                <p id='produto-p'>
                    Descubra o sabor irresistível dos nossos doces artesanais! Cada mordida é uma explosão de felicidade.
                    Feitos com ingredientes selecionados e muito amor, nossos produtos são perfeitos para adoçar seu dia
                    ou presentear alguém especial. Experimente agora e se apaixone!
                </p>
                <div className='button-container'>
                    <a href="#contact"><Button text="Entre em contato" secondary /></a>

                </div>


            </section>

            <section id='testimonials' className="bg-light py-lg">
                <div className="container">
                    <h2 className="text-center mb-md">O que nossos clientes dizem</h2>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-text">"Os doces da DonaFrost são simplesmente divinos! Sempre peço para eventos especiais e todos adoram."</p>
                            <h4 className="testimonial-name">Maria Silva</h4>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">"Qualidade excepcional e sabor inigualável. DonaFrost é minha escolha número um para satisfazer minha vontade de doces!"</p>
                            <h4 className="testimonial-name">João Santos</h4>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">"Atendimento impecável e produtos sempre frescos. Recomendo a todos os amantes de doces!"</p>
                            <h4 className="testimonial-name">Ana Oliveira</h4>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-light py-lg" id="contact">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <img src={Logo} alt="Logo DonaFrost" width={180} height={50} />
                            <p className="mt-sm">Doces deliciosos para todos os momentos.</p>
                        </div>
                        <div className="footer-column">
                            <h4>Links Rápidos</h4>
                            <ul>
                                <li><a href="#hero">Home</a></li>
                                <li><a href="#products">Produtos</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Contato</h4>
                            <p>Rua dos Doces, 123</p>
                            <p>Cidade Doce - SP</p>
                            <p>Email: contato@donafrost.com</p>
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
                        <p>© 2023 DonaFrost. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}
