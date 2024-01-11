import type { Component } from "solid-js"
import logo from "../assets/logo.png"

const Header: Component = () => {
  return (
    <header>
      <img src={logo.src} alt="Logo" style={{ height: "100px" }} />
      {/* Placeholder for top-right content */}
      <div style={{ float: "right" }}>
        {/* Content for top-right (e.g., a button, link, or text) */}
      </div>
    </header>
  )
}

export default Header
