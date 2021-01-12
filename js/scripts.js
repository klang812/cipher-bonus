const userInput = prompt("Please enter a sentance");


function firstLast(input) {
  const first = input.charAt(0);
  const last = input.charAt(input.length-1);
  return (first+last).toUpperCase();
};

alert(firstLast(userInput));