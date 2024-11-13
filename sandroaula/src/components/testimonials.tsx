import LeoImage from "../assets/images/leoImage.png";
import JoaoImage from "../assets/images/joaoProfundo.png";
import Ninguem from "../assets/images/ninguem.png";
import "../styles/testimonial.css"

export default function Testimonials() {

    return (
        <section id='testimonials' className="bg-light py-lg">
            <div className="container">
                <h2>O que nossos clientes dizem</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Os doces da DonaFrost são simplesmente divinos! Sempre peço para eventos especiais e todos adoram."</p>
                        <img src={Ninguem} alt="Joao Image" className="testimonial-image" />
                        <h4 className="testimonial-name">Maria Silva</h4>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Qualidade excepcional e sabor inigualável. DonaFrost é minha escolha número um para satisfazer minha vontade de doces!"</p>
                        <img src={JoaoImage} alt="Joao Image" className="testimonial-image" />
                        <h4 className="testimonial-name">João Santos</h4>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">"Atendimento impecável e produtos sempre frescos. Recomendo a todos os amantes de doces!"</p>
                        <img src={LeoImage} alt="Leo Image" className="testimonial-image" />
                        <h4 className="testimonial-name">Ana Oliveira</h4>
                    </div>
                </div>
            </div>
        </section>
    )


}