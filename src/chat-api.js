import { Chat } from "./chat.js";

/**
 * The ChatAPI class that provides methods to interact with the chat storage API
 * @param {string} baseUrl - The base URL of the chat API
 * @param {string} apiKey - The API key for the chat API
 */
export class ChatAPI {

    /**
     * The constructor for the ChatAPI class
     * @requirements
     * - Should store the baseUrl and apiKey
     * - Should initialize an empty array to store the chatIds
     * @param {string} baseUrl - The base URL of the chat API
     * @param {string} apiKey - The API key for the chat API
     */
    constructor({
        baseUrl,
        apiKey
    }) {
        // TODO: Implement Me!
    }

    /**
     * Fetches the chatIds from the chat API and stores them in the chatIds array
     * @usage await chatAPI.fetchChats();
     * @returns {Promise<string[]>} - The chatIds
     */
    async fetchChats() {
        // TODO: Implement Me!
    }

    /**
     * Creates a new chat and stores the chatId in the chatIds array
     * @usage await chatAPI.createChat();
     * @returns {Promise<Chat>} - The new chat
     */
    async createChat() {
        // TODO: Implement Me!
    }

    /**
     * Updates a chat and stores the chatId in the chatIds array
     * @usage await chatAPI.updateChat({
     *     id: "123",
     *     messages: [
     *         { role: "user", content: "Hello, how are you?" },
     *         { role: "assistant", content: "I'm doing great, thank you!" }
     *     ]
     * });
     * @param {Chat} chat - The chat to update
     * @returns {Promise<Chat>} - The updated chat
     */
    async updateChat(chat) {
        // TODO: Implement Me!
    }

    /**
     * Gets a chat by its id
     * @usage await chatAPI.getChat("chat_id");
     * @param {string} id - The id of the chat
     * @returns {Promise<Chat>} - The chat
     */
    async getChat(id) {
        // TODO: Implement Me!
    }

}

/**
 * You will be provided your API key through email. 
 * Please don't share this with anyone, and inform the instructors if you did not get your API key!
 */
const BASE_URL = "https://hw2.cis1962.esinx.net/api";
const API_KEY = "YOUR_API_KEY";

/**
 * Export the shared chatAPI instance
 */
export const chatAPI = new ChatAPI({
    baseUrl: BASE_URL,
    apiKey: API_KEY
});
