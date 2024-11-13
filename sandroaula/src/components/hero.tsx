import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "./button";
import "../styles/hero.css";

export default function Hero() {

    return (
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
    )
}