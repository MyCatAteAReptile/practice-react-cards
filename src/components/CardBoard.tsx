import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CardType } from '../types';
import { fetchCards } from '../store/action-creators/card';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import styles from './CardBoard.module.css'
import classNames from 'classnames/bind';
import { themeSlice } from '../store/reducers/ThemeSlice';
import { generateRandomColor } from '../utils';

// перенести получение текста в саму карточку? или нет

const CardBoard = () => {
  const classes = classNames.bind(styles);

  const dispatch = useAppDispatch();
  const loadCards = fetchCards();

  const { isLoading, cards, error } = useAppSelector(state => state.cardReducer);
  //const { color } = useAppSelector(state => state.themeReducer);

  const [card, setCard] = useState({ quote: "", author: "" });
  const color = generateRandomColor();

  const setNewCard = (array: CardType[]) => {
    const cardIndex = Math.floor(Math.random() * (array.length - 1));
    setCard(array[cardIndex]);
  }

  useEffect(() => {
    loadCards(dispatch);
  }, [])

  useEffect(() => {
    setNewCard(cards);
  }, [cards])

  return (
    <div className={classes({ cardboard: true })} style={{ backgroundColor: color }}>
      {
        isLoading
          ?
          <p>Карточки загружаются...</p>
          :
          error === null
            ?
            <Card
              card={card}
              setNewCard={() => { setNewCard(cards) }}
              color={color}
            />
            :
            <p>{error}</p>
      }
    </div>
  )
}

export default CardBoard