function addition(num1,num2) {
    let sum = num1 + num2
    return sum;
   return (isNaN(num1) || isNaN(num2)) ? "Inputs must be numbers" : num1 + num2;
   /**Ternary Operator: This single line of code uses the ternary        
    *  operator to perform the check and return the result.
       If isNaN(num1) or isNaN(num2) is true (meaning one of the inputs is not a number), it returns the string "Inputs must be numbers".
        Otherwise, it returns the sum of num1 and num2. */
}

module.exports = addition;