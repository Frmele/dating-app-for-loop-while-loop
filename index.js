'use strict';

const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender? (female, male, other)",
  "Which genders are you interested in dating?",
  "What is your main hobby?",
  "What is your favourite movie?"
];

const answers = [];

let i = 0;
while (answers.length < questions.length) {
  const question = questions[i];
  const answer = prompt(question);

  if (answer.length < 2) {
    console.log("That answer is too short");
    continue;
  }
  // We save the answer
  answers.push(answer);
  i++;
}

for (let i=0; i < questions.length; i++) {
  const humanIndex = i + 1;
  const question = questions[i];
  const answer = answers[i];
  console.log(`Question ${humanIndex}: ${question}`);
  console.log(`Answer: ${answer}\n`); // The \n adds the empty line
}