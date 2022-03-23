// Task - 4
// Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisahkan dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabungkan kembali dengan tanpa pemisah dengan output berupa bilangan integer

function divideAndSort(number) {
  // toString untuk merubah tipe data ke string, split untuk memisahkan dan menghilangkan 0
  number = number.toString().split(0);
  // map melakukan iterasi objek pada array, split menghilangkan spasi, sort mengurutkan nilai
  number = number.map((x) => x.split("").sort());
  // flat untuk menghilangkan slot kosong dalam array, join untuk menghubungkan seluruh array menjadi string
  number = number.flat().join("");
  return number;
}

console.log(divideAndSort(5956560159466056));
