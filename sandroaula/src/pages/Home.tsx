
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
                <h1 className="items-center mb-md">Nossos Produtos Deliciosos</h1>
                <div className="product-grid" id='products-cards'>
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
                 <a href="#contact"><Button text="Entre em contato" secondary/></a>           
                
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
                                <a href="#"><img src={Facebook} alt="Facebook" /></a>
                                <a href="#"><img src={Instagram} alt="Instagram" /></a>
                                <a href="#"><img src={Twitter} alt="Twitter" /></a>
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
