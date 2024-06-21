import { ResponseType } from '../types';

export default class CardService {
    static async getAll(page: number = 1, limit: number = 10) {
        const response: ResponseType[] = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
        )
            .then((rawResponse) => rawResponse.json())
            .catch((error) => {
                throw error;
            });
        return response;
    }
}
