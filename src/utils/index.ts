import { CardType, ResponceType } from "../types";

export const parseResponse = (responce: ResponceType[] | undefined) => {
  const result: CardType[] = [];

  if (responce !== undefined) {
    responce.forEach(element => {
      result.push({ quote: element.body, author: element.title });
    });
  }

  return result;
}

export const makeAuthorName = (string: string): string => {
  const stringArray: string[] = string.split(' ');
  let name: string = '';

  for (let i = 0; i < 2 && i < stringArray.length; i++) {
    stringArray[i].charAt(0).toUpperCase();
    name = name + stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1) + ' ';
  }

  return name.slice(0, -1);
} 
