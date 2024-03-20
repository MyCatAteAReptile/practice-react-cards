import { ResponceType } from "../types";

export default class CardService {
    static async getAll(page: number = 1, limit: number = 10) {
        try {
            console.log('start loading');
            const response: ResponceType[] =
                await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
                    .then((response) => response.json())
                    .then((json) => json)
                    .catch(error => { throw error; });
            console.log('end loading, response: ' + response);
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}