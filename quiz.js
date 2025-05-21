const questions = [
  {
    category: "Biology",
    question: "What is biology?",
    choices: ["study of plant and animal", "study of animal", "study of human"],
    answer: "study of plant and animal"
  },
  {
    category: "Mathematics",
    question: "2 * 2?",
    choices: ["10", "7", "4"],
    answer: "4"
  },
  {
    category: "English",
    question: "What is a Noun?",
    choices: ["a noun is a naming word", "a noun is an action word", "a noun is an adjount"],
    answer: "a noun is a naming word"
  },
  {
    category: "Current Affairs",
    question: "Who is the president of Nigeria?",
    choices: ["Bola Tinubu", "Musa aliu", "Wale shetinna"],
    answer: "Bola Tinubu"
  },
  {
    category: "Football",
    question: "Who has the highest ballor dio\'r in football?",
    choices: ["Ronaldo", "Messi", "Kaka"],
    answer: "Messi"
  }
];


const getRandomQuestion = (questions) => {
  return questions[Math.floor(Math.random() * questions.length)];
}
const randomQuestion = getRandomQuestion(questions);

const getRandomComputerChoice = function (choices){
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerChoice = getRandomComputerChoice(randomQuestion.choices);

function getResults(question, choice){
  if(choice === question.answer){
    return "The computer's choice is correct!";
  }else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

// console.log(randomQuestion);
// console.log(computerChoice );

console.log(getResults(randomQuestion, computerChoice))