import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4wkl9t",
        "template_4opf1hu",
        form.current,
        "vy5deVCnABo7EoZp5"
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            Swal.fire({
              title: 'Merci pour votre message, bien reçu !',
              text: 'Réponse sous 48h',
              icon: 'success',
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    
    <div className="container-contact">
        <div className="meet">
            <h2>Rencontrons-nous !</h2>
        </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="griddy">
        <input type="text" name="user_name" placeholder="Votre nom " className="item" required/>
        
        <input type="email" name="user_email" placeholder="Votre adresse mail"  className="item" required />
        </div>
        <textarea name="message" placeholder="Votre message" className="mess"   required />
        <div className="bouton">
        <input type="submit" value="Envoyer !" className="button" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
