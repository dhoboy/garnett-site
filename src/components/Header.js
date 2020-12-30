import React, { useEffect, useRef } from 'react';

const Header = () => {
  const largeHeader = useRef(null);
  const smallHeader = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // nice offsets for small and large window size
      const offset = window.innerWidth > 768 ? 110 : 90;
      if (window.pageYOffset > offset) { // hide big header, show small header
        largeHeader.current.style = "opacity: 0";
        smallHeader.current.style = "opacity: 1; display: block";
      } else { // hide small header, show big header
        largeHeader.current.style = "opacity: 1";
        smallHeader.current.style = "opacity: 0; display: none";
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={smallHeader} className="smallHeader">
        <h1>Garnett Mellen</h1>
      </div>
      <div ref={largeHeader} className="largeHeader">
        <h1>Garnett Mellen</h1>
        <h2>Strength / Vigor / Health</h2>
      </div>
    </>
  );
};

export default Header;
