import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';
import Card from './Card';
import { CardType } from '../types';
import fetchCards from '../store/action-creators/card';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import styles from './CardBoard.module.css';
import { getRandomColor } from '../utils';
import colors from '../colors';

const CardBoard = () => {
    const classes = classNames.bind(styles);
    const defaultColor = '#000000';

    const dispatch = useAppDispatch();

    const loadCards = useCallback(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    const { isLoading, cards, error } = useAppSelector(
        (state) => state.cardReducer,
    );

    const [card, setCard] = useState({ quote: '', author: '' });
    const [color, setColor] = useState(defaultColor);

    const getNewRandomColor = useCallback((currentColor: string) => {
        let newColor = getRandomColor(colors);

        while (currentColor === newColor) {
            newColor = getRandomColor(colors);
        }

        return newColor;
    }, []);

    const fillNewCard = useCallback(
        (array: CardType[]) => {
            const cardIndex = Math.floor(Math.random() * array.length);
            setCard(array[cardIndex]);
            setColor((prevColor) => getNewRandomColor(prevColor));
        },
        [getNewRandomColor],
    );

    useEffect(() => {
        loadCards();
    }, [loadCards]);

    useEffect(() => {
        if (cards.length > 0) {
            fillNewCard(cards);
        }
    }, [cards, fillNewCard]);

    return (
        <div
            className={classes('cardboard')}
            style={{ backgroundColor: color }}
        >
            {isLoading && (
                <p className={classes('message')}>Карточки загружаются...</p>
            )}

            {!isLoading && error === null ? (
                <Card
                    card={card}
                    fillNewCard={() => {
                        fillNewCard(cards);
                    }}
                    color={color}
                />
            ) : (
                <p className={classes('message')}>{error}</p>
            )}
        </div>
    );
};

export default CardBoard;
