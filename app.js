const question = new Map();
question.set("question", "What is an HTML?");
question.set(1, "Hello Text Markup language.");
question.set(2, "Hyper Text Markup language.");
question.set(3, "High Text Markup language.");
question.set("correct", 2);
question.set(true, "Correct answer you passed the quiz");
question.set(false, "Wrong answer, please try again.");

console.log(question.get("question"));

for (let [key, value] of question.entries()) {
  console.log(`Key: ${key} | Value: ${value}`);
}

let value = parseInt(prompt("Enter teh correct answer"));
let checkAnswer = question.get(value === question.get("correct"));
console.log(checkAnswer)
