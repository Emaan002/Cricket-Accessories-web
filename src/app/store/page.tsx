import React from "react";
import "../styles/store.css";

const accessories = [
  { name: 'Cricket Bat', description: 'High quality bat', price: '$100', img: '/bat.png' },
  { name: 'Cricket Ball', description: 'Durable leather ball', price: '$70', img: '/ball.png' },
  { name: 'Batting Equipment', description: 'Deliver powerful shots', price: '$150', img: '/batting-equipment.png' },
  { name: 'Cricket Footwear', description: 'Boost field performance', price: '$200', img: '/footwear.png' },
  { name: 'Cricket Gloves', description: 'Enhance grip control', price: '$90', img: '/gloves.png' },
  { name: 'Cricket Helmet', description: 'Ensure complete protection', price: '$50', img: '/helmet.png' },
];

const Store = () => {
  return (
    <>
      <section className="store-container">
        <h2 className="store-title">Our Products</h2>
        <div className="product-grid">
          {accessories.map((item, index) => (
            <div key={index} className="product-card">
              <img
                src={item.img}
                alt={item.name}
                className="product-image"
              />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-description">{item.description}</p>
              <p className="product-price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Store;
