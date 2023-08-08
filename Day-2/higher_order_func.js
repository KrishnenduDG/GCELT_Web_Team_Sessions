// One way of defining the function(Most Conventional)
function add(num1, num2) {
  return num1 + num2;
}

/*
Types of Functions-
1) Takes Parameter => Doesn't Return anything
2) Takes Parameter => Returns something
3) Doesn't take Parameter => Doesn't Return anything
4) Doesn't Take Parameter => Returns Something (Vague but used in some real life scenarios)
*/

/*
Arrow Functions are also known as Anonymous Functions
(set_of_parameters) => {block_of_code}
*/
const add_func = (num1, num2) => {
  return num1 + num2;
};

// Example of a Function taking Function as one arg
function greet(name, custom_greeting_function) {
  custom_greeting_function(name);
}

// IIFE
(() => {
  // 1st Function
  let result = add(1, 2);
  console.log(result); // 3

  // 2nd Function
  let result2 = add_func(1, 2);
  console.log(result2); // 3

  // Higher Order Functions
  const custom_func_1 = (name) => {
    console.log(`Greeting-1 to ${name}`);
  };

  function custom_func_2(name) {
    console.log(`Greeting-2 to ${name}`);
  }

  greet("John Doe", custom_func_1);
  greet("Bill Gates", custom_func_2);
  greet("Linus Torvalds", custom_func_1);

  /* 
        Problem - 1: Given an Array, return another array with every elements of the previous array doubled 
        let arr = [1,2,3,4,5] => [2,4,6,8,10]
    */
  let arr = [1, 2, 3, 4, 5, 6, 7];
  let new_array = [];

  for (let i = 0; i < arr.length; i++) new_array[i] = arr[i] * 2;
  console.log(new_array);

  // map (Don't confuse with Map)  ---> Works on anything over which you can iterate(Iterable)
  // Custom Function Param List => (element_under_consideration, index_of_that_element)
  // It doesn't change the original_array. Rather it returns another array with every element of the original_array being processed.

  let new_array2 = arr.map(function (el, idx) {
    console.log(`Presently operating at index = ${idx}`);
    console.log(arr);
    return el * 2;
  });
  console.log(`The Final array is ${new_array2}`);
  console.log(`The original array is ${arr}`);

  // Filter Method => Also operates over an Iterable
  // Custom Function Param List => (element_under_consideration, index_of_that_element)
  // Filters elements
  // Problem - 2 => Given an array, return all the even elements in it
  console.clear();

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let even_numbers = [];
  /* Naive Approach */
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 == 0) even_numbers.push(numbers[i]);
  console.log(even_numbers);


  let even_numbers_2 = numbers.filter((el, idx) => {
    return (el % 2 == 0)
  });
  console.log(even_numbers_2);


})();

/* 
-------------------------- Topics to Research --------------------------
1) IIFE
2) Functional Programming vs Procedural Programming
3) Array.Prototype.reduce
4) Different Versions of JS

https://developer.mozilla.org/en-US/docs/Web/JavaScript => Ultimate Resource


------> To Do
1) Design a Login Form and Apply proper form validation



------> NodeJS Installation
1) Go to https://nodejs.org/en and download the LTS Version 
2) Click the Downloaded File (.msi) and it will guide you with the whole installation process
3) Run the command "node -v" in Command Prompt and if it doesn't throw an error, You have succesfully installed the NodeJS.

*/


