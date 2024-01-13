import type { Component } from "solid-js"
import logo from "../assets/dark-mode-logo.png"

const Header: Component = () => {
  return (
    <header class="flex items-center justify-center p-2 shadow-md">
      <a href="/">
        <img src={logo.src} alt="Logo" class="h-16" />
      </a>
    </header>
  )
}

export default Header
