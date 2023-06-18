import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-12 capitalize">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="mb-6 md:mb-0">
      <span>&copy; {currentYear} {String.fromCharCode(169)}</span>
      <span> Mustafa Gamal. All rights reserved.</span>
    </div>
    <div className="t">
      <span>Visit </span>
      <a href="https://ktaby.vercel.app" className="underline">كتابي</a>
      <span> for a wide collection of books and downloads.</span>
    </div>
    <div className="mt-6 md:mt-0 flex flex-col">
      <span>Email: mustafagamal51112@gmail.com</span>
      <span>Phone: +201276071829</span>
      <span>Address: mansoura, egypt</span>
    </div>
  </div>
</footer>

  );
};

export default Footer;
