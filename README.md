# Feedback App

This is a simple feedback app developed as part of a React course. It allows users to rate, update, and delete comments, providing all the CRUD (Create, Read, Update, Delete) operations. The app utilizes a JSON server on Typicode as a mock server for data storage and retrieval. It also incorporates motion design from Framer Motion library for smooth animations.

## Features

- Rate feedback: Users can provide ratings for feedback.
- Update feedback: Existing feedback items can be updated with new information.
- Delete feedback: Feedback items can be deleted from the app.
- Motion design: The app utilizes Framer Motion library to add visually appealing animations.

## Prerequisites

Before running the app, make sure to configure the `.env` file with the following variable:

```
REACT_APP_URL=<generated_url>
```

The `REACT_APP_URL` should be generated using [Typicode's JSON Server](https://my-json-server.typicode.com/) to mimic a server environment for storing feedback data.

## Build Instructions

To run the app locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/tverderesi/feedback-app.git
```

2. Navigate to the project directory:

```
cd feedback-app
```

3. Install dependencies:

```
npm install
```

4. Start the JSON server:

```
npm run server
```

5. In a separate terminal, start the development server:

```
npm start
```

This will launch the app in your browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test scripts.
- `npm run eject`: Ejects the app from create-react-app configuration.
- `npm run server`: Starts the JSON server to mock API responses.
- `npm run dev`: Concurrently starts the JSON server and the development server.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore, modify, and use this feedback app for your own purposes. Contributions are also welcome.
