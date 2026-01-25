import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(subject || `Message from ${name}`);
    const emailBody = encodeURIComponent(message);

    window.location.href = `mailto:jatinyadav5004@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setEmail('');
    setMessage('');
    setName('');
    setSubject('');
  };

  const contactInfo = [
    {
      icon: 'bx bx-envelope',
      title: 'Email',
      value: 'jatinyadav5004@gmail.com',
      link: 'mailto:jatinyadav5004@gmail.com'
    },
    {
      icon: 'bx bx-phone',
      title: 'Phone',
      value: '+91 9079705004',
      link: 'tel:+919079705004'
    },
    {
      icon: 'bx bx-map',
      title: 'Location',
      value: 'Rewari, Haryana',
      link: '#'
    }
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact__intro">
        Have a project in mind or want to collaborate? I'd love to hear from you!
      </p>
      <div className="contact__container bd-grid">
        <div className="contact__wrapper">
          {/* Contact Information */}
          <div className="contact__info animate-on-scroll">
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact__info-list">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact__info-item"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact__info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact__info-content">
                    <span className="contact__info-label">{info.title}</span>
                    <span className="contact__info-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact__social">
              <h4>Follow Me</h4>
              <div className="contact__social-icons">
                <a href="https://www.linkedin.com/in/jatin-yadav-57629a203" target="_blank" rel="noopener noreferrer" className="contact__social-icon">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/jatinyadav5004" target="_blank" rel="noopener noreferrer" className="contact__social-icon">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.instagram.com/jatinyadav5004" target="_blank" rel="noopener noreferrer" className="contact__social-icon">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://wa.me/919079705004" target="_blank" rel="noopener noreferrer" className="contact__social-icon">
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact__form animate-on-scroll" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Send Message</h3>
            <div className="contact__form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="contact__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <i className="bx bx-user contact__input-icon"></i>
            </div>
            <div className="contact__form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="contact__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bx-envelope contact__input-icon"></i>
            </div>
            <div className="contact__form-group">
              <input
                type="text"
                placeholder="Subject"
                className="contact__input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <i className="bx bx-message-square contact__input-icon"></i>
            </div>
            <div className="contact__form-group">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="contact__input contact__textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <i className="bx bx-edit contact__input-icon contact__input-icon--textarea"></i>
            </div>
            <button type="submit" className="contact__button button">
              <span>Send Message</span>
              <i className="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
