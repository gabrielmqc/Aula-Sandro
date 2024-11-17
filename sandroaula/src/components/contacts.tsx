import { useState } from "react";
import Button from "./button";
import "../styles/contacts.css";
import { useEmailRequest } from "../hooks/useEmailRequest";

export default function Contacts() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const { mutateAsync } = useEmailRequest();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      toMail: email,
      content: "Obrigado pelo interesse! Entraremos em contato em breve.",
    };

    try {
      setStatus("Enviando...");
      await mutateAsync(emailData);
      setStatus("E-mail enviado com sucesso!");
      setEmail("");
    } catch (error) {
      setStatus("Erro ao enviar o e-mail. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <section id="contacts">
      <header>
        <h2>Entre em contato</h2>
        <p>
          Ficou interessado em algum produto? Nos informe seu email para
          podermos entrar em contato!
        </p>
      </header>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button text="Enviar" />
          </div>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
}
