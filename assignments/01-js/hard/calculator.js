/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0
  }
  add(num){
    this.result += num 
  }
  substract(num){
    this.result -= num
  }
  multiply(num){
    this.result *= num
  }
  divide(num) {
    if (num === 0) {
      throw new Error('Division by zero');
    }
    this.result /= num;
  }
  clear(){
    this.result = 0
  }
  getResult(){
    return this.result
  }
  calculate(expr) {
    // Remove extra spaces and validate expression
    if (expr.includes('/0')) {
      throw new Error('Division by zero');
    }

    const sanitizedExpr = expr.replace(/\s+/g, '');
    if (!this.isValidExpression(sanitizedExpr)) {
      throw new Error('Invalid expression');
    }

    // Evaluate the expression
    try {
      this.result = this.evaluateExpression(sanitizedExpr);
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }

    return this.result;
  }

  isValidExpression(expr) {
    // This regex checks for valid characters and basic structural validity
    return /^[\d+\-*/().]*$/.test(expr) && this.checkParentheses(expr);
  }

  checkParentheses(expr) {
    // Implement a method to check for balanced parentheses
    let balance = 0;
    for (let char of expr) {
      if (char === '(') balance++;
      if (char === ')') balance--;
      if (balance < 0) return false; // Closing parenthesis without an opening match
    }
    return balance === 0;
  }

  evaluateExpression(expr) {
    // A safer alternative to 'eval' is needed here
    // Implement a method that can parse and evaluate the expression
    // This could be a stack-based approach or a conversion to RPN
    // For now, as a placeholder, we can use 'eval'
    return eval(expr);
  }
}

module.exports = Calculator;