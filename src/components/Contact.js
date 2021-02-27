import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <p className="blurb">
        <i className="fas fa-phone"></i>
        Phone: (434) 260-7794
      </p>
      <p className="blurb">
        <i className="fas fa-envelope"></i>
        Email: garnettmellen@gmail.com
      </p>
      <p className="blurb">
        <i className="fab fa-instagram"></i>
        <span>Instagram: <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/strengthvigorvitality/">instagram.com/strengthvigorvitality/</a></span>
      </p>
      <p className="blurb">
        <i className="fas fa-walking"></i>
        <span>ACAC: <a target="_blank" rel="noopener noreferrer" href="https://acac.com/eleanormellen/">acac.com/eleanormellen/</a></span>
      </p>
    </div>
  );
};

export default Contact;