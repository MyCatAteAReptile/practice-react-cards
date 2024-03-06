import React from 'react'
import classes from './Card.module.css'
import { CardType } from '../types';

type CardProps = {
    card: CardType,
    setNewCard: React.MouseEventHandler
  }; 

const Card = ({ card, setNewCard }: CardProps) => {
  const vkLink: string = `https://vk.com/share.php?comment=${ card.quote + '-' + card.author }`

  return (
    <div className={ classes.card }>
        <p className={ classes.card__quote }>{ card.quote }</p>
        <p className={ classes.card__author }>- { card.author }</p>
        <div className={ classes.card__bottom }>
            <a href={ vkLink }>ВКонтакте</a>
            <button onClick={ setNewCard }>New quote</button>
        </div>
    </div>
  )
}

export default Card