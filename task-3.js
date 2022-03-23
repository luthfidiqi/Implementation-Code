// Task - 3
// Membeli makanan menggunakan aplikasi FazzFood, menetukan harga, voucher, jarak, pajak

function FazzFood(harga, voucher, jarak, pajak) {
  // Diskon / Potongan
  // ‘FAZZFOOD50’ minimal pembelian 50rb akan mendapatkan diskon 50%, max potongan 50 rb
  if (voucher == "FAZZFOOD50" && harga >= 50000) {
    diskon = harga * 0.5; // Diskon 50%
    if (diskon >= 50000) {
      diskon = 50000; // Max potongan 50 rb
    }
    //‘DITRAKTIR60’ minimal pembelian 25rb akan mendapatkan diskon 60%, max potongan 30rb
  } else if (voucher == "DITRAKTIR60" && harga >= 25000) {
    diskon = harga * 0.6; // Diskon 60%
    if (diskon >= 30000) {
      diskon = 30000; // Max potongan 30 rb
    }
  } else {
    diskon = 0; // diskon 0 jika tidak memiliki voucher
  }

  // Biaya Antar
  // Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap 1km selanjutnya dikenakan penambahan 3rb
  let biayaAntar = 5000;
  while (jarak > 2) {
    // jika lebih dari 2km setiap 1km selanjutnya dikenakan penambahan 3rb
    biayaAntar += 3000;
    jarak -= 1;
  }

  // Pajak
  // Pajak 5% dari harga makanan apabila (true), jika (false) maka tidak dikenakan pajak
  if (pajak) {
    biayaPajak = harga * 0.05; // true = pajak 5% harga
  } else {
    biayafPajak = 0; // false = pajak 0
  }

  // SubTotal
  // Melakukan perhitungan untuk menentukan harga total
  subTotal = harga - diskon + biayaAntar + biayaPajak;

  // Output
  console.log(`Harga : ${harga}`);
  console.log(`Potongan : ${diskon}`);
  console.log(`Biaya Antar : ${biayaAntar}`);
  console.log(`Pajak : ${biayaPajak}`);
  console.log(`SubTotal : ${subTotal}`);
}

// Input
FazzFood(75000, "FAZZFOOD50", 5, true);
