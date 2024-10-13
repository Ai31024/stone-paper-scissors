
# Stone-Paper-Scissors Game

This is a simple **Stone-Paper-Scissors** game built using **Express.js**, **EJS**, and **jQuery**. The game is played between two randomly generated players, with their choices displayed graphically, and the winner (or draw) is determined based on traditional game rules.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [Gameplay](#gameplay)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Randomly generated choices for Player 1 and Player 2
- Game logic that follows the rules of **Stone-Paper-Scissors**
- Graphical representation of choices and results
- Display of results: win, lose, or draw

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **EJS**: Embedded JavaScript templating engine for rendering HTML.
- **jQuery**: JavaScript library for DOM manipulation.
- **Morgan**: HTTP request logger middleware for Node.js.
- **HTML5 & CSS3**: Front-end structure and styling.

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (v14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stone-paper-scissors-game.git
   ```

2. Navigate to the project folder:

   ```bash
   cd stone-paper-scissors-game
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## How to Run

1. After installing the dependencies, start the server:

   ```bash
   nodemon server.js
   ```

2. Open your web browser and go to:

   ```bash
   http://localhost:3000
   ```

3. Click the "Play" button to generate random choices for Player 1 and Player 2 and see the result of the game.

## Gameplay

- **Stone** beats **Scissors**.
- **Scissors** beats **Paper**.
- **Paper** beats **Stone**.
- If both players select the same object, the game is a **draw**.

The result of each game is displayed with images and a text conclusion.

## Project Structure

```bash
.
├── public
│   ├── css
│   │   └── styles.css       # Game styling
│   ├── image
│   │   └── props            # Images for the game choices and results
│   └── scripts
│       └── script.js        # jQuery-based game logic
├── views
│   └── index.ejs            # HTML template for the game
├── server.js                # Express.js server setup
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Contributing

Feel free to open an issue or submit a pull request if you want to improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
