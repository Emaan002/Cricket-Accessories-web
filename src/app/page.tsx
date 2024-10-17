import Link from "next/link";
import React from "react";
import "./styles/home.css"; 

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlighted-text">Our Cricket</span> Accessories{" "}
            <span className="highlighted-text">Store</span>
          </h1>
          <p className="hero-subtitle">
            The best place to find all your cricket gear!
          </p>
          <Link href="/store">
            <button className="hero-button">
              Let&apos;s Look
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
