import { useState, useEffect } from "react";
import Button from "./button";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/burger.svg"
import "../styles/header.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (showMobileMenu) {
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.width = '100%';
        } else {
            body.style.overflow = 'auto';
            body.style.position = 'static';
        }

        return () => {
            body.style.overflow = 'auto';
            body.style.position = 'static';
        };
    }, [showMobileMenu])


    return (
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
                            <a href="#testimonials">Relatos</a>
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
    )
}

