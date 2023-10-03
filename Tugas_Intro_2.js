//untuk nomor 1 ada di ./Tugas_Intro_2(Nomor 1).txt
//nomor 2
const name = [
    "Abigail","Alexandra","Alison",
    "Amanda","Angela","Bella",
    "Carol","Caroline","Carolyn",
    "Deirdre","Diana","Elizabeth",
    "Ella","Faith","Olivia","Penelope"
  ];
  
  function searchName(query, limit, callback) {
    const filteredNames = name.filter(name => name.toLowerCase().includes(query.toLowerCase()));
  
    if (limit > 0) {
      filteredNames.splice(limit);
    }
  
    callback(filteredNames);
  }
  
  function callback(result) {
    console.log(result.join(', '));
  }
  
  searchName("an", 2, callback);
  
//nomor 3
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if (nilaiAwal >= nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }

    if (dataArray.length <= 5) {
        return "Jumlah data dalam Array harus lebih dari 5.";
    }

    const hasilPencarian = dataArray.filter(data => data >= nilaiAwal && data <= nilaiAkhir);

    if(hasilPencarian.length === 0){
        return "Nilai tidak ditemukan"
    }

    hasilPencarian.sort((a, b) => a - b);

    return hasilPencarian;
}
console.log(seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(5, 17 , [2, 25, 4]))
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))
