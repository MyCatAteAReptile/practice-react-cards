import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CardType } from '../types';
import { fetchCards } from '../store/action-creators/card';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import styles from './CardBoard.module.css'
import classNames from 'classnames/bind';
import { themeSlice } from '../store/reducers/ThemeSlice';

const CardBoard = () => {
  const classes = classNames.bind(styles);

  const dispatch = useAppDispatch();
  const loadCards = fetchCards();

  const { isLoading, cards, error } = useAppSelector(state => state.cardReducer);
  const { color } = useAppSelector(state => state.themeReducer);

  const [card, setCard] = useState({ quote: "", author: "" });

  const setNewCard = (array: CardType[]) => {
    const cardIndex = Math.floor(Math.random() * (array.length - 1));
    setCard(array[cardIndex]);
    dispatch(
      themeSlice.actions.setColor(
        '#' + (Math.random().toString(16) + 'fffff0').substring(2, 8).toUpperCase()
      )
    )
  }

  useEffect(() => {
    loadCards(dispatch);
  }, [])

  useEffect(() => {
    setNewCard(cards);
  }, [cards])

  return (
    <div className={classes({ cardboard: true, })} style={{ backgroundColor: color, color: color, transitionDuration: '0.1' }}>
      {
        isLoading
          ?
          <p>Карточки загружаются</p>
          :
          error !== null
            ?
            <p>{error}</p>
            :
            <Card
              card={card}
              setNewCard={() => { setNewCard(cards) }}
            />
      }
    </div>
  )
}

export default CardBoard