import type { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="flex flex-col items-center justify-center bg-gray-900 text-white p-5 text-center">
      <div class="mb-2.5">
        <a href="/" class="text-white no-underline mx-2.5">
          Home
        </a>
        <a href="/about" class="text-white no-underline mx-2.5">
          About Us
        </a>
        <a href="/contact" class="text-white no-underline mx-2.5">
          Contact Us
        </a>
      </div>
      <div class="mb-2.5">
        <a href="https://www.instagram.com/hilfastudios/" class="text-white no-underline mx-2.5" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        {/* Add additional social media links here */}
      </div>
      <p class="text-sm m-2.5">
        © 2024 Hilfa Studios. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
