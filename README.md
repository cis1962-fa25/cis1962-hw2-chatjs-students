# HW2: ChatJS

In this homework, we will use JavaScript (+HTML, CSS) to build a chatbot using the Gemini API!

This is an **semi-open ended** homework. You are recommended to follow the instructions, but you are free to implement the chatbot in a different way. Make sure that you read the rubric items to make sure you don't miss any of them.

This homework is assigned over 3 weeks, and as such is longer and more complex to compensate. This will likely be your first moderately large project in JavaScript that involves a proper webpage and some backend programming for data storage. Please pace yourself- there are 3 parts to this homework that you can use as checkpoints to gauge how much you should be done after each week it is assigned.

## Introduction & Installation

### Files

Upon accepting the assignment on GitHub Classroom and retrieving the starter files, make sure you have the following files:

- `script.js`
- `chat.js`
- `chat-api.js`
- `index.html`
- `style.css`
- package.json, the prettier/eslint configs, a `RUBRIC.md`, and an `AIAssignment.md` file.

### Installation

We will use a package called [`serve`](https://www.npmjs.com/package/serve) to serve your website.

Begin by running the installation command from your starter code directory:

```
$ npm install
```

This will install serve and any other dependencies for this project, like eslint and prettier.

In order to serve the website for this homework, run the following command from the starter code directory:

```
$ npx serve . -p 3000
```

This will serve your website on a localhost at port 3000. You should see the following output:

```
Serving! Access URLs:
- Local: http://localhost:3000
- Network: http://(Your IP Address):3000
```

Once you see this output, you can open your browser and navigate to `http://localhost:3000` and you should see the contents of the `index.html` file.

### Gemini API Key

In this homework, you will use the Gemini API to generate responses.

> 🤑 Gemini offers a free API, no credit card required!

#### Google Cloud Console

First, you will need to create a new project in the [Google Cloud Console](https://console.cloud.google.com/).

#### Create a new API key

Once you've created a project, head over to the [Google AI Studio](https://aistudio.google.com/u/0/apikey) and create a new API key.

It should ask for your project name, and then you can create a new API key. Select the project you created in the previous step.

Once you have created the API key, you can copy it and paste it into the `chat.js` file in the first lines of the script:

```javascript
// Insert your Gemini API key here
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/...";
```

### Chat API

In order to use the Chat API for chat persistence in part 2, you will need another API key that we will provide for you. You should receive an email from the instructors soon after the homework is released with your API key. Make sure to **never** share this API key, just as you wouldn't share your Gemini API key! Once you have the API key, paste it into the `chat-api.js` file towards the bottom:

```javascript
// Insert your Chat API key here
const BASE_URL = "https://hw2.cis1962.esinx.net/api";
const API_KEY = "YOUR_API_KEY";
```

> ⚠️ **IMPORTANT**
> For the simplicity of this homework, we _hard-coded_ the Gemini API key and ChatAPI keys.
> In a real-world application, you should never do this. Web applications are publicly accessible, so is your API key in your code.
> You should store your API key in a secure way, such as in an environment variable behind a backend server.

> Please note: If you used AI for any part of this assignment, save all the chat logs and context! Your instructors will want to see this usage during the AI synthesis activity at the end the homework. If you did not or will no use AI, you can disregard this instruction.


## Part 1.1. Chat

> Files you will work on: `chat.js`

We will start by implementing the chat functionality.

Open the `chat.js` file and implement the following methods within the Chat class:
- `constructor({ id, messages })`
- `getMessages()`
- `sendMessage(message)`

The end goal is to be able to send messages to the chat and see the responses. We'll implement the `save()` method in the next part to allow the chat to be functional.

> Jsdoc
>
> Like in homework 1, we have provided Jsdoc-style comments above each method that shows the functionality of each method, the arguments the method takes, and the outputs that get returned. Some of these arguments and outputs use slightly different syntax for types that you may not be used to, like using generics within angle brackets <> in Promises, but most of the jsdoc comments should explain the functions of the methods well enough to allow you to implement them without issue.

> Classes and the keyword `this`
>
> By the start of this homework, we will not have covered classes or object-oriented programming yet, which will be covered in the week after this homework is released. During this homework, you will be using the Chat and ChatAPI classes. These classes are objects which contain properties, called fields, which can be accessed from within the same class using the keyword `this`. If you need to refer to the current class from within a method in the class at any time, use `this`.

> What is a message?
>
> When working with chatbots, messages need to store both the role, or who's speaking, and the message itself. In JavaScript, we can represent this through an object that stores both the role and content of the message, like so:
>
> const message = { role: "assistant", content: "Hello world!" }
>
> There are two roles in a chat: the assistant, and the user. In general, you will be using this structure to store and display your chats, such as the messages array stored in each instance of the Chat class.

### Part 1.2. HTML & CSS

> Files you will work on: `index.html`, `style.css`

Open the `index.html` file and implement the HTML for the chat. This is a free-form step that can take many forms, but your chat interface should at least have:

- Implement a "container" for the chat messages
- Implement a form with an input field and a submit button

Feel free to style the chat messages, input, and form within `style.css`. We don't have specific styles for this, so you can do whatever you want. You can use modern chat clients like ChatGPT or apps like WhatsApp as a model. Just be sure that it is easily readable and accessible- you will lose points if your app is unusable, hard to read, or confusing to use! Feel free to be creative! 😃

### Part 1.3. Script

> Files you will work on: `script.js`

To make your chat work, you will need to make changes to the `script.js` file, which initializes and manages various parts about the chatbot.
You will need to:

- Implement some way to store the current chat.
- Set the current chat to the chat with the id "default" and a welcome message from the AI (feel free to write whatever you want as your welcome message!). This should use the Chat class, pay attention to the parameters of the Chat class when constructing it.
- Implement a function to render the chat messages: `renderMessages(messages)`
- Implement some way to show / hide the typing indicator while the LLM API is pending (is typing)
- Add event listeners to the form and the submit button

After you have implemented the `script.js` file, you should be able to:
- Send messages to the chat and see the responses
- See the typing indicator while the LLM API is pending (is typing)
- See the chat messages in the chat messages container
- See the chat input and form in the chat form container

We've provided some functions in the starter code of `script.js` for you to use, but you will have to write some of your own functions to handle some of the requirements above (TODOs not always provided!). The implementation of these functions will depend on how you structure your HTML and what you name various id's and CSS classes for DOM manipulation, so use your own discretion on how you design your web page and this script to work with it. Some of the provided functions will be used in other sections of this homework, so do not implement those yet!

## Part 2.1. Chat API

> Files you will work on: `chat-api.js`

Now, we will implement the chat API to save the chat history.

The Chat API has the following endpoints:

- `GET /messages` - Get all chats
  - Response: `{ id: "default", messages: { role: string, content: string }[] }`
- `PUT /messages` - Update a chat
  - Request: `{ id: "default", messages: { role: string, content: string }[] }`
  - Response: `{ id: "default", messages: { role: string, content: string }[] }`

Note that the `id` is the chat id(always set to "default" for now, we'll change this in the future).

Remember that you must include the API key that we provided you in ALL request headers!

## Part 2.2. Saving Chat History and Implementing Persistence

> Files you will work on: `chat.js`, `script.js`

Now we will use the chat API to save chats and allow them to persist.

- Implement the `save()` method in the `Chat` class using this API. Your implementation should:
  - Send a `PUT` request to `/messages` with the chat id and messages
- Implement the `initializeApp()` function in the `script.js` file using this API. In this step, your implementation should only:
  - Fetch the chat from the API
  - Update the chat object with the fetched chat
- Implement some way to save the chat history to the API when the user sends a message and receives a response.

By the end of this part, you should be able to:
- Save the chat history to the API
- Load the chat history from the API
- Update the chat history in the API
- Get the chat history from the API

Or in other words, you have achieved "persistence" for your chat! Your chat history should be saved to the API and loaded from the API when the user refreshes the page.


## Part 3. Multiple Chats

Now, we will implement multiple chats in the chat API.

### Part 3.1. Updating Chat API for Multiple Chats

> Files you will work on: `chat-api.js`

Implement the following endpoints in the chat API:

- `GET /chat` - Get all chatIds
  - Response: `string[]`
- `POST /chat` - Create a new chat with a randomized id
  - Request: (nothing)
  - Response: `{ id: string, messages: { role: string, content: string }[]  }`
- `PUT /chat/:id` - Update a chat 
  - Request: `{ id: string, messages: { role: string, content: string }[] }`
  - Response: `{ id: string, messages: { role: string, content: string }[] }`

With these endpoints, our chat API is complete, and ready to handle multiple chats.

### Part 3.2. The Chat class

> Files you will work on: `chat.js`

You would have noticed that the `Chat` class has the `save()` method which is now obsolete! Refactor the `Chat` class to use the new implementation of the `ChatAPI` class, that instead updates the chat with a given id in the API.

### Part 3.3. HTML & CSS

> Files you will work on: `index.html`, `style.css`

Open the `index.html` file and implement the HTML for the chat list. You should:

- Implement a "container" for the chat list (likely a sidebar)
- Create a "Create New Chat" button
- Implement a "container" for the chat item

Feel free to style the chat list and chat item! Again, we don't have specific styles for this.

### Part 3.4. Script

Open the `script.js` file and implement the following methods:
- `renderChatList()`
- `switchToChat(chatId)`
- `createNewChat()`
- `initializeApp()`
- Any event listeners you need to implement for your new HTML elements

After you have implemented the `script.js` file, you should be able to:
- See the chat list in the chat list container
- Click on the "Create New Chat" button to create a new chat
- Click on a chat item to switch to that chat
- See the chat messages in the chat messages container
- See the chat input and form in the chat form container
- Interact through the chat

Do not worry too much about the sorted order of the chat list. You only need to show us the ID of the chat in the chat list, and just make sure that the chat list stores the correct chatIds and messages.

## AI Synthesis Activity
As part of an initiative to promote honest and ethical use of AI and LLMs in programming classes, you will perform an AI synthesis activity as part of this homework. This assignment will be written within your AIAssignment.md file, and will differ based on a self-report of whether you have used AI for any part of this assignment or not. Please be truthful about your usage, because either way, you will still need to perform this AI synthesis activity! This AI synthesis activity will represent 5% of the individual homework's grade.

Activity A: If you used AI

    Cite the usage by including screenshots or a link to the conversation with your AI of choice. Make sure to include any context, instructions, and all the converstations you had with the AI.
    Write about why you used AI. Was there a gap in knowledge you wanted to fill? Were the answers through traditional search engines not adquete? Did you want to let AI help you format something in a quick manner?
    Evaluate the AI's response. If you asked multiple questions, you can pick one of the responses the AI generated. Does the AI answer your question properly? Does it hallucinate any details? Could there be room to improve this response through manual editing? Did you accept this response fully or adapt parts of it into your work?
    If you used unfamiliar syntax or concepts generated by AI within your assignment, be sure to research them and explain what those concepts are to demonstrate your understanding.

Activity B: If you did NOT AI

    Explain some improvement you want to make within your code. Perhaps you have a code block that could be more concise, or a part of your code could be improved with a library or be performed with a more efficient algorithm.
    Ask AI how to improve your code, by picking a part of your program you are interested in improving and asking something along the lines of "how can I improve this code?" This does not have to be verbatim; you could ask more specific questions for improvement, like "what JavaScript libraries could improve the efficiency of my code?"
    Evaluate the response the AI generates. You may need to do some research to do this evaluation, to see if the syntax generates correctly or if any libraries the AI suggests are appropriate for the current task. Report on whether the AI's solution fits within your project, or if it would need modifications to work properly.
    You do NOT need to use the AI suggestion within your final submission, if your code already works properly. If the scope of your inquiry in this activity leads you to replace parts of your code, switch to Assignment A instead.

Templates for these responses are included in the provided AIAssignment.md starter files for this assignment. You can also refer to the dedicated AI Policy page for more information and examples of good responses. This activity will be graded mostly for effortful completion. We are looking to foster an environment of honest AI usage, so please take this activity as a learning opportunity!

## Submission

To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your `AIAssignment.md` file containing your AI syntesis activity. Before you submit, make sure you lint your code for style errors using the command `npm run lint`. More details on style can be found in the style guide. We will take -1 points for every style error remaining in the submission for the submitted files.

Make sure that your application is fully functional and works as expected! For this assignment, we will be looking for functionality, not aesthetics. However, if your CSS styling / HTML structure prevents us from interacting with the application, we will consider the features to be incomplete. If you are unsure if your assignment meets all the functionality criteria we are looking for, refer to `RUBRIC.md` for a checklist of what we will be grading for in your submission.