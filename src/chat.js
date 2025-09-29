const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

/**
 * Generates a response from the Gemini API
 * @param {{role: string, content: string}[]} messages - The messages to generate a response for
 * @returns {Promise<string>} - The response from the Gemini API
 */
const generateGeminiResponse = async (messages) => {
    const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": GEMINI_API_KEY
        },
        body: undefined //TODO: Replace Me!
        // HINT: the Gemini API expects a specific format for the request body:
        // { role: string, parts: [{ text: string }] }[]
        // What's a good way to convert the messages to this format?
    });
    const data = undefined //TODO: Replace Me!
    const content = data.candidates[0].content.parts[0].text;
    return content;
}

/**
 * The Chat class
 * @param {string} id - The id of the chat
 * @param {{role: string, content: string}[]} messages - The messages in the chat
 */
export class Chat {
    /**
     * The constructor for the Chat class
     * @requirements
     * - Should store the id and messages
     * @param {string} id - The id of the chat
     * @param {{role: string, content: string}[]} messages - The messages in the chat
     */
    constructor({ id, messages }) {
        // TODO: Implement Me!
    }

    /**
     * Gets the messages in the chat
     * @usage const messages = chat.getMessages();
     * @returns {{role: string, content: string}[]} - The messages in the chat
     */
    getMessages() {
        // TODO: Implement Me!
    }

    /**
     * Sends a message to the chat
     * @usage const messages = await chat.sendMessage("Hello, how are you?");
     * @param {string} message - The message to send
     * @returns {Promise<string[]>} - The messages in the chat, including the new messages
     */
    async sendMessage(message) {
        // TODO: Implement Me!
    }

    /**
     * Saves the chat
     * @usage await chat.save();
     * @returns {Promise<void>} - The promise to save the chat
     */
    async save() {
        // TODO: Implement Me!
    }
}