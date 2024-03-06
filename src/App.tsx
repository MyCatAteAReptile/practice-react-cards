import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { CardType, ResponceType } from './types';


/*
useEffect для инициализации первой карточки и запроса карточек
Redux для хранения массива карточек ?
контролировать уникальность показанных карточек?
https://vk.com/share.php?comment=1111111
*/

function App() {
  const loadURL = 'https://jsonplaceholder.typicode.com/posts';
  
  const initialCardsArray: CardType[] = [
    {quote: '', author: ''},
  ];

  const [cardsArray, setCardsArray] = useState(initialCardsArray);

  const [card, setCard] = useState({quote: "", author: ""});

  const setNewCard = (maxCardsCount: number) => {
    const cardIndex = Math.floor(Math.random() * maxCardsCount);
    setCard(cardsArray[cardIndex]);
  }

  const parseResponce = (responce: ResponceType[]) => {
    const result: CardType[] = [];

    responce.forEach(element => {
      result.push({quote: element.body, author: element.title});
    });

    return result;
  }

  const loadNewCards = (page: number = 1, limit: number = 10) => {
    fetch(loadURL + `?_limit=${ limit }&_page=${ page }`).then((response) => response.json())
    .then((json) => {setCardsArray(parseResponce(json))});
  }

  useEffect(() => {
    loadNewCards();
    setNewCard(cardsArray.length);
  }, [])

  return (
    <div className="App">
      {cardsArray.length !== 1 ? 
      <Card 
        card={ card }
        setNewCard={ () => {setNewCard(cardsArray.length)} }
      />
      :
      "Грузин"}
    </div>
  );
}

export default App;
