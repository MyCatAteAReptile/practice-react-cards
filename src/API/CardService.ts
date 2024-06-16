import { ResponseType } from "../types";

export default class CardService {
    static async getAll(page: number = 1, limit: number = 10) {
        try {
            const response: ResponseType[] =
                await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
                    .then((response) => response.json())
                    .then((json) => json)
                    .catch(error => { throw error; });
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}