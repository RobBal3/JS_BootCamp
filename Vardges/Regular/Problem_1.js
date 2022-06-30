// 1) Write a function named makeQuestion, that takes three arguments: two operands and an operator, and returns a string with the question "What is [oprd1] [opr] [oprd2]?".

function makeQuestion(oprd1, oprd2, opr) {
  return `What is ${oprd1} ${opr} ${oprd2} ?`;
}

console.log(makeQuestion(5, 3, "multiply"));
