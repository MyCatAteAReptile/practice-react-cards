import { ResponseType, isResponseType } from '../types';

export default class CardService {
    static async getAll() {
        const rawResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`,
        );

        if (!rawResponse.ok) {
            throw new Error(
                `Не удалось загрузить карточки: ${rawResponse.status} ${rawResponse.statusText}`,
            );
        }

        const data = await rawResponse.json();

        if (!Array.isArray(data) || !data.every(isResponseType)) {
            throw new Error('Неверный формат данных');
        }

        return data as ResponseType[];
    }
}
