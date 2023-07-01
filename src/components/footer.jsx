import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-12 capitalize text-sm mt-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="mb-6 md:mb-0">
      <span>&copy; {currentYear} {String.fromCharCode(169)}</span>
      <span> Mustafa Gamal. All rights reserved.</span>
    </div>
    <div className="text-center m-2 ">
      <span> يرجي زيارة </span>
      <a href="https://ktaby.vercel.app" className="underline">كتابي</a>
      <span> لمجموعة كبيرة من الكتب والتنزيلات.</span>
    </div>
    <div className="mt-6 md:mt-0 flex flex-col">
      <span>Email: mustafagamal51112@gmail.com</span>
      <span>Phone: +201276071829</span>
      <span>Address: mansoura, egypt</span>
    </div>

  </div>
    <div className="flex justify-center mt-4 text-lg text-blue-500">
        <Link to="https://www.facebook.com/mustafa.gamal.9231712/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className=" hover:text-white mx-2" />
        </Link>
        <Link to="https://github.com/mustafagamal51112" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className=" hover:text-white mx-2" />
        </Link>
        <Link to="https://www.linkedin.com/in/mustafa-gamal-ba48a7243/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className=" hover:text-white mx-2" />
        </Link>
        <Link to="https://wa.me/+201276071829" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className=" hover:text-white mx-2" />
        </Link>
      </div>
</footer>

  );
};

export default Footer;
