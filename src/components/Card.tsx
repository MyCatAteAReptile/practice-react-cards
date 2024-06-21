import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.css';
import { CardType } from '../types';
import { makeAuthorName } from '../utils';

type CardProps = {
    card: CardType;
    fillNewCard: () => void;
    color: string;
};

const Card = ({
    card = { quote: '', author: '' },
    fillNewCard,
    color,
}: CardProps) => {
    const authorName: string = makeAuthorName(card.author);
    const quote: string = `${card.quote}.`;

    const classes = classNames.bind(styles);
    const vkLink: string = `https://vk.com/share.php?comment=${quote} (${authorName})`;

    const textRef = useRef<HTMLDivElement>(null);

    const animateText = () => {
        if (textRef.current) {
            textRef.current.animate([{ opacity: 0 }, { opacity: 1 }], 1400);
        }
    };

    const handleClick: React.MouseEventHandler = () => {
        animateText();
        fillNewCard();
    };

    useEffect(() => {
        animateText();
    }, []);

    return (
        <div className={classes('card')}>
            <div ref={textRef}>
                <p className={classes('card__quote')} style={{ color }}>
                    {quote}
                </p>
                <p className={classes('card__author')} style={{ color }}>
                    - {authorName}
                </p>
            </div>
            <div className={classes('card__bottom')}>
                <a
                    className={classes('card__link', 'card__buttons')}
                    style={{ backgroundColor: color }}
                    href={vkLink}
                    aria-label="Запостить цитату в Вконтакте."
                />
                <button
                    type="button"
                    className={classes(
                        'card__button-new-card',
                        'card__buttons',
                    )}
                    style={{ backgroundColor: color }}
                    onClick={handleClick}
                >
                    Новая цитата
                </button>
            </div>
        </div>
    );
};

export default Card;
