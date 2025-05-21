# Quiz Game with Randomized Questions

This project is a simple quiz game implemented in JavaScript. It includes a set of categorized questions, a function to select a random question, and functionality to determine if a random computer-generated choice is correct.

## Table of Contents

* [Features](#features)
* [How It Works](#how-it-works)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Example Output](#example-output)
* [Contributing](#contributing)
  
## Features

* **Question Bank**: Stores a collection of questions with categories, choices, and answers.
* **Random Question Selection**: Selects a random question from the question bank.
* **Random Choice Generation**: Simulates a computer making a random choice from the available options.
* **Answer Evaluation**: Determines if the computer's choice matches the correct answer and provides feedback.

## How It Works

1. **Question Data**: Questions are defined as objects in an array. Each question includes the following:

   * `category`: The category of the question.
   * `question`: The actual question text.
   * `choices`: An array of possible answers.
   * `answer`: The correct answer.

2. **Random Selection**:

   * `getRandomQuestion(questions)`: Selects a random question from the list.
   * `getRandomComputerChoice(choices)`: Picks a random choice from the available options for the selected question.

3. **Result Evaluation**:

   * `getResults(question, choice)`: Compares the computer's choice to the correct answer and returns a message indicating whether the choice was correct or incorrect.

## Usage

1. Copy the code into a JavaScript environment (e.g., Node.js or a browser console).
2. Run the program to see the results of the computer's randomly selected choice.

### Example Code Snippet

```javascript
const questions = [
  {
    category: "Biology",
    question: "What is biology?",
    choices: ["study of plant and animal", "study of animal", "study of human"],
    answer: "study of plant and animal"
  },
  // More questions here...
];

const getRandomQuestion = (questions) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

const getRandomComputerChoice = function (choices) {
  return choices[Math.floor(Math.random() * choices.length)];
};

function getResults(question, choice) {
  if (choice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(getResults(randomQuestion, computerChoice));
```

## Technologies Used

* JavaScript (ES6+)

## Example Output

```plaintext
Random Question: Who has the highest Ballon d'Or in football?
Computer's Choice: Ronaldo
The computer's choice is wrong. The correct answer is: Messi
```

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements or new features.
