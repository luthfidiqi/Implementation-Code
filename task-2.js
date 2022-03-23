// Task - 2
// Reverse Word

function reverseWord(word) {
  let result = "";
  let reverse = word.split(" "); // split membagi string ke array string
  // Memastikan input merupakan string
  if (typeof word != "string") {
    return console.log("Input bukan string");
  }
  // Iterasi untuk membalik kata
  for (i = reverse.length - 1; i >= 0; i--) {
    result += reverse[i] + " ";
  }
  return result;
}

console.log(reverseWord("Hello World"));
