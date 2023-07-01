import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import myPhoto from "../assets/me.jpeg"
const Me = () => {
  return (
    <div className="container m-auto  mt-10 flex flex-col items-center" style={{"height":"100vh"}}>
      <div className="myImg border-4 border-green-500 rounded-full w-72 flex justify-center items-center overflow-hidden">
        <img src={myPhoto} alt="" className="w-full h-full rounded-full transition-all duration-500 user-select-none -webkit-user-drag-none hover:scale-150" />
      </div>

      <h1 className="myName relative mt-10 font-semibold text-xl">
        Mustafa Gamal Elsayed
        <span className="absolute top-0 right-0 w-full h-full bg-maindark border-l-2animate-myNameAnimation"></span>
      </h1>
      
      <p>Front End Dev</p>
      <div className="flex ">
        <a className="contact md:w-40 w-20 m-2 p-2 bg-blue-500 rounded text-center transition duration-200 cursor-pointer text-white no-underline hover:bg-blue-300" href="https://www.linkedin.com/in/mustafa-gamal-ba48a7243/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> Mustafa Gamal
        </a>
        <a className="contact md:w-40 w-20 m-2 p-2 bg-blue-500 rounded text-center transition duration-200 cursor-pointer text-white no-underline hover:bg-blue-300" href="https://github.com/mustafagamal51112" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Mustafa Gamal
        </a>
        <a className="contact md:w-40 w-20 m-2 p-2 bg-blue-500 rounded text-center transition duration-200 cursor-pointer text-white no-underline hover:bg-blue-300" href="https://www.facebook.com/mustafa.gamal.9231712/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} /> Mustafa Gamal
        </a>
        <a className="contact md:w-40 w-20 m-2 p-2 bg-blue-500 rounded text-center transition duration-200 cursor-pointer text-white no-underline hover:bg-blue-300" href="https://wa.me/+201276071829">
          <FontAwesomeIcon icon={faWhatsapp} /> Mustafa Gamal
        </a>
      </div>
    </div>
  );
};

export default Me;
