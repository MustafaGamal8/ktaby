import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent('Contact Form Submission');
    const emailBody = encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`);
    const mailtoLink = `mailto:mustafagamal51112@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.open(mailtoLink);

    setName('');
    setMessage('');
  };

  return (
    <div className="md:w-full w-4/5 mt-16 mb-5 max-w-md mx-auto p-4 bg-white  rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">تواصل معنا</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 text-right">
            الاسم
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-right"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 text-right">
            الرسالة
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400 text-right"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-400 text-white rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
          >
            إرسال
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-4 text-lg">
        <Link to="https://www.facebook.com/mustafa.gamal.9231712/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-green-400 hover:text-green-500 mx-2" />
        </Link>
        <Link to="https://github.com/mustafagamal51112" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-green-400 hover:text-green-500 mx-2" />
        </Link>
        <Link to="https://www.linkedin.com/in/mustafa-gamal-ba48a7243/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-green-400 hover:text-green-500 mx-2" />
        </Link>
        <Link to="https://wa.me/+201276071829" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 hover:text-green-500 mx-2" />
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
