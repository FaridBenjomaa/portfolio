import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../../css/Contact.css';

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const token = recaptchaRef.current.getValue();
            if (!token) {
                console.error("reCAPTCHA non validé !");
                setStatus("error");
                return;
            }

            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            setFormData({ name: '', email: '', message: '' });
            recaptchaRef.current.reset();
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setStatus("error");
        }
    };

    return (
        <div className="contact-container">
            <section className="contact-hero">
                <h1>Contactez-moi</h1>
                <p>
                    Un projet, une idée ou une question ? Je suis à votre écoute. N'hésitez pas à me contacter via le formulaire ci-dessous.
                </p>
            </section>

            <section className="contact-form-section">
                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Adresse email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            required
                        ></textarea>
                    </div>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        ref={recaptchaRef}
                        onChange={(token) => console.log("reCAPTCHA validé :", token)}
                    />
                    <button type="submit" className="btn btn-custom">
                        {status === "loading" ? "Envoi en cours..." : "Envoyer"}
                    </button>
                    {status === "success" && <p className="success-msg">Message envoyé ! ✅</p>}
                    {status === "error" && <p className="error-msg">Une erreur est survenue. Veuillez réessayer.</p>}
                </form>
            </section>
        </div>
    );
};

export default Contact;
