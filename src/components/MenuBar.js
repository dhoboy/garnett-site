import React from 'react';
import MenuBarItem from './MenuBarItem';

const MenuBar = () => {
  return (
    <ul className="menu-bar">
      <MenuBarItem display="News" path="/news" />
      <MenuBarItem display="Bio" path="/bio" />
      <MenuBarItem display="How I Work" path="/how-i-teach" />
      <MenuBarItem display="ACAC" path="/acac" />
      <MenuBarItem display="Testimonial" path="/testimonials" />
      <MenuBarItem display="Contact" path="/contact" />
    </ul>
  );
};

export default MenuBar;