import React, { useEffect, useRef, useState } from 'react'
import styles from './Card.module.css'
import { CardType } from '../types';
import classNames from 'classnames/bind';
import { makeAuthorName } from '../utils';
import { useAppSelector } from '../hooks/redux';

type CardProps = {
  card: CardType,
  setNewCard: Function,
  color: string
};

const Card = ({ card = { quote: "", author: "" }, setNewCard, color }: CardProps) => {
  const authorName: string = makeAuthorName(card.author);
  const quote: string = card.quote.charAt(0).toUpperCase() + card.quote.slice(1) + '.';

  const classes = classNames.bind(styles);
  const vkLink: string = `https://vk.com/share.php?comment=${quote} (${authorName})`

  const textRef = useRef<HTMLDivElement>(null);

  const animateText = () => {
    if (textRef.current) {
      textRef.current.animate([{ opacity: 0 }, { opacity: 1 }], 1400);
    }
  }

  const handleClick: React.MouseEventHandler = () => {
    animateText();
    setNewCard();
  }

  useEffect(() => {
    animateText();
  }, [])

  return (
    <div className={classes({ card: true })}>
      <div ref={textRef}>
        <p className={classes({ 'card__quote': true })} style={{ color }}>{quote}</p>
        <p className={classes({ 'card__author': true })} style={{ color }}>- {authorName}</p>
      </div>
      <div className={classes({ card__bottom: true })}>
        <a className={classes({ 'card__link': true, 'card__buttons': true })} style={{ backgroundColor: color }} href={vkLink} aria-label='Запостить цитату в Вконтакте'></a>
        <button className={classes({ 'card__button-new-card': true, 'card__buttons': true })} style={{ backgroundColor: color }} onClick={handleClick}>Новая цитата</button>
      </div>
    </div>
  )
}

export default Card