import React, { useState } from 'react';
import { cardData } from './data';  
import Card from './components/Card'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import Search from './components/Search';  
import './App.css';
const App = () => {
  const [filteredCards, setFilteredCards] = useState(cardData);

  const handleButtonClick = () => {
    window.open('https://lichess.com', '_blank');
  };

  const handleSearch = (query) => {
    const filtered = cardData.filter(card => 
      card.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="app">
      <Header />
      <Search onSearch={handleSearch} />
      <button onClick={handleButtonClick} className="open-website-btn">
        Go to Lichess
      </button>
      
      <div className="card-container">
        {filteredCards.map((card) => (
          <Card 
            key={card.id} 
            title={card.title} 
            description={card.description} 
            image={card.image} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
