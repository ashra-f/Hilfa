import type { Component } from "solid-js";
import logo from "../assets/logo.png";
import instagramLogo from "../assets/instagram-logo.png"; 

const Header: Component = () => {
  return (
    <header class="flex items-center justify-between p-2 shadow-md">
      <a href="/">
        <img src={logo.src} alt="Logo" class="h-24" /> 
      </a>
      <div class="flex items-center">
        <a href="https://www.instagram.com/hilfastudios" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo.src} alt="Instagram" class="h-6" /> 
        </a>
      </div>
    </header>
  );
};

export default Header;
