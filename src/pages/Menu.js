import React from 'react';
import './menubutton.css';
import Specials from '../components/Specials';
import soups from '../components/soups';
import appetizers from '../components/appetizers';
export default function Menu() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <button
          className="menu-button"
          onClick={() => scrollToSection('soups')}
        >
          Soups
        </button>
        <button
          className="menu-button"
          onClick={() => scrollToSection('appetizers')}
        >
          Appetizers
        </button>
        <button
          className="menu-button"
          onClick={() => scrollToSection('main-course')}
        >
          Main Course
        </button>
        <button
          className="menu-button"
          onClick={() => scrollToSection('desserts')}
        >
          Desserts
        </button>
      </div>
      {/* In-page sections */}
      <h2> Soups</h2>
      <div id="soups" className="menu-section">
        {/* Content for Soups section */}
        {soups.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
      <h2>Appetizers</h2>
      <div id="appetizers" className="menu-section">
        {/* Content for Appetizers section */}
        {appetizers.map((special) => (
          <Specials
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
      <div id="main-course" className="menu-section">
        {/* Content for Main Course section */}
      </div>
      <div id="desserts" className="menu-section">
        {/* Content for Desserts section */}
      </div>
    </>
  );
}
