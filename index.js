// Function to find the remainder of two numbers
function remainder(a, b) {
    return a % b;
  }
  
  // Function to check if an array is empty
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  // Function to convert pounds to kilograms
  function poundsToKilograms(pounds) {
    return pounds * 0.453592;
  }
  
  // Function to calculate the area of a circle
  function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Function to sort an array of numbers in ascending order
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Function to convert a string to lowercase
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  // Function to remove all whitespace from a string
  function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
  }
  
  // Example usage:
  console.log(remainder(10, 3)); // Output: 1
  console.log(isArrayEmpty([])); // Output: true
  console.log(poundsToKilograms(10)); // Output: 4.53592
  console.log(circleArea(5)); // Output: 78.53981633974483
  console.log(sortArray([3, 1, 4, 1, 5, 9])); // Output: [1, 1, 3, 4, 5, 9]
  console.log(toLowerCase("HELLO WORLD")); // Output: "hello world"
  console.log(removeWhitespace("  Hello   World  ")); // Output: "HelloWorld"
  