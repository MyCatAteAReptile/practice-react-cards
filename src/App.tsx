import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { CardType } from './types';


/*
useEffect для инициализации первой карточки и запроса карточек
Redux для хранения массива карточек ?
контролировать уникальность показанных карточек?
https://vk.com/share.php?comment=1111111
*/

const cardsArray: CardType[] = [
  {quote: '111111111111111111111111111111111111111111111111111', author: 'a1'},
  {quote: '22222222222222222222222222222222222222222222222222222', author: 'a2'},
  {quote: '333333333333333333333333333333333333333333333333333333', author: 'a3'},
  {quote: '444444444444444444444444444444444444444444444444444', author: 'a4'}
];

function App() {
  const [card, setCard] = useState({quote: "", author: ""});

  const setNewCard = (maxCardsCount: number) => {
    const cardIndex = Math.floor(Math.random() * maxCardsCount);
    setCard(cardsArray[cardIndex]);
  }

  useEffect(() => {
    setNewCard(cardsArray.length);
  }, [])

  return (
    <div className="App">
      <Card 
        card={ card }
        setNewCard={ () => {setNewCard(cardsArray.length)} }
      />
    </div>
  );
}

export default App;
