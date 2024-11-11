import React, { useState } from "react";
import "./ContactForm.css";
import { useTranslations } from "../../hooks/useTranslations";
import { ContactButton, ContactClosePop, ContactError, ContactFormPop, ContactInput, PopContactContainer } from "./ContactFormStyles";

const ContactForm: React.FC = () => {
  const t = useTranslations();

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showError, setShowError] = useState(false);

  const isValid = name !== "" && birthdate !== "" && city !== "" && email !== "" && phone !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      console.log(`Name: ${name}`);
      console.log(`Birthday: ${birthdate}`);
      console.log(`City: ${city}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      setShowPopup(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
    setShowError(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowError(false);
  };

  return (
    <div>
      <ContactButton onClick={handleOpenPopup}>{t.sidebar.contact.text}</ContactButton>

      {showPopup && (
        <div className="popup-overlay">
          <PopContactContainer>
            <ContactClosePop className="close-button" onClick={handleClosePopup}>
              X
            </ContactClosePop>
            <ContactFormPop onSubmit={handleSubmit}>
              <ContactInput
                type="text"
                placeholder={t.sidebar.contact.content.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <ContactInput
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
              <ContactInput
                type="text"
                placeholder={t.sidebar.contact.content.city}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <ContactInput
                type="email"
                placeholder={t.sidebar.contact.content.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <ContactInput
                type="tel"
                placeholder={t.sidebar.contact.content.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <ContactButton type="submit">
                {t.sidebar.contact.content.send}
              </ContactButton>
            </ContactFormPop>
          </PopContactContainer>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
