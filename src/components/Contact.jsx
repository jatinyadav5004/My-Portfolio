import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // open mail client
    window.location.href = `mailto:jatinyadav5004@gmail.com?subject=${subject}&body=${body}`;

    // clear inputs
    setEmail('');
    setMessage('');
    setName('');
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            className="contact__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <input 
            id="email" 
            type="email" 
            placeholder="Email" 
            className="contact__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <textarea 
            cols="0" 
            rows="10" 
            placeholder="Write your message here." 
            className="contact__input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="contact__button button">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
