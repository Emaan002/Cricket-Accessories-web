import Image from 'next/image';
import "../styles/about.css"; 

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-subtitle">Our Journey</h2>
            <p>
              Cricket is more than just a sport; It&apos;s a tradition that dates back to the 16th century in England. Over the centuries, cricket has evolved into a global sport, inspiring millions of fans and players around the world. 
            </p>
            <p>
              Our journey began with a passion for cricket and a desire to provide high-quality cricket accessories to enthusiasts of the game. Established in [Year], our store has grown from a small local shop to a trusted name in cricket equipment, serving players of all levels. 
            </p>
            <p>
              We believe in the spirit of cricket — teamwork, dedication, and the pursuit of excellence. Our goal is to provide players with the best equipment, so they can perform at their peak.
            </p>
          </div>
          
          <div className="about-image">
            <Image 
              src="/about.jpg" 
              alt="Cricket History" 
              width={600} 
              height={400} 
              className="image-style"
            />
          </div>
        </div>
        
        <div className="about-vision">
          <h2 className="about-subtitle">Our Vision</h2>
          <p className="about-description">
            We aim to inspire cricketers worldwide by offering top-notch accessories that enhance performance and bring out the best in every player. Whether You&apos;re a beginner or a professional, we have something for you.
          </p>
        </div>
      </div>
    </section>
  );
}
