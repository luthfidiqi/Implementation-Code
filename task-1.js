// Task - 1
// Deteksi Palindrom

function palindrom(word) {
  // Memastikan Input merupakan string
  if (typeof word == "string") {
    word = word.toLowerCase(); // Membuat lower case
    let result = "";
    // Melakukan pengecekan palindrom
    for (let x = word.length - 1; x >= 0; x--) {
      result += word.charAt(x); // charAt untuk mengembalikan string pada index tertentu
    }
    return word == result ? "Palindrom" : "Bukan palindrom";
  } else {
    return "Input bukan string";
  }
}

console.log(palindrom("malam"));
console.log(palindrom("pagi"));
