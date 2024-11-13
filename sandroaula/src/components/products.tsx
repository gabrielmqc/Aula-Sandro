import ProductImage1 from "../assets/images/product1.png";
import ProductImage2 from "../assets/images/product2.png";
import ProductImage3 from "../assets/images/product3.png";
import Button from "./button";
import "../styles/product.css";

export default function Products() {

    return (
        <section id='products' className="container py-lg">

            <h2>Nossos Produtos Deliciosos</h2>


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
    )
}