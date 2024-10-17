
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "../styles/header.css"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
    
        <div className="logo-section">
          <Image
            src="/cricket.png"
            alt="Logo"
            width={50}
            height={50}
            className="logo"
          />
          <h1 className="site-title">Cricket Accessories</h1>
        </div>

   
        <div className="hamburger">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-button"
          >
            <svg
              className="hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

     
        <nav className="navbar">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/store" className="nav-link">
            Our Store
          </Link>
          <Link href="/about" className="nav-link">
            About us
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>

  
      {isMenuOpen && (
        <nav className="mobile-menu">
          <Link
            href="/"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/store"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Store
          </Link>
          <Link
            href="/about"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
