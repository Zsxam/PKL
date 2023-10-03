//nomor 1
const biodata = {
    name: "Azka",
    age: 17,
    hobbies: ["Voli", "Valorant", "Youtube"],
    isMaried: false,
    schoolList: [
        {name: "TK Haruman", yearIn: 2010, yearOut: 2012, major: null},
        {name: "SD Plus Baiturrahman", yearIn: 2012, yearOut: 2018, major: null},
        {name: "SMP Negeri 8 Bandung", yearIn: 2018, yearOut: 2021, major: null},
        {name: "SMK Negeri 13 Bandung", yearIn: 2021, yearOut: 2024, major: "Software Engineering"},
    ],
    skills: [
        {skillName: "HTML", level: "Beginner"},
        {skillName: "CSS", level: "Beginner"},
        {skillName: "Laravel", level: "Beginner"},
    ],
    interestInCoding: true,
    }

// console.log(biodata)


//nomor 2

const mtk = 100;
const bahasaIndonesia = 83;
const bahasaInggris = 89;
const ipa = 90;


if(mtk != null && bahasaIndonesia != null && bahasaInggris != null && ipa != null){
    let rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;
    if(rataRata >= 90 && rataRata <= 100){
        console.log("Rata-rata: "+rataRata);
        console.log("Grade: A");
    }
    else if(rataRata >= 80 && rataRata <= 89){
        console.log("Rata-rata: "+rataRata);
        console.log("Grade: B");
    }
    else if(rataRata >= 70 && rataRata <= 79){
        console.log("Rata-rata: "+rataRata);
        console.log("Grade: C");
    }
    else if(rataRata >= 60 && rataRata <= 69){
        console.log("Rata-rata: "+rataRata);
        console.log("Grade: D");
    }
    else if(rataRata >= 0 && rataRata <= 59){
        console.log("Rata-rata: "+rataRata);
        console.log("Grade: E");
    }
    else{
        console.log("tidak ada nilai")
    }
}
else{
    console.log("Nilai ada yang belum terisi")
}
    
//nomor 3
const printSegitiga = 5
if (typeof printSegitiga === "number" && printSegitiga > 0) {
for (let i = printSegitiga; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
    row += j + ' ';
    }

    console.log(row);
}
}else{
    console.log('Data harus number');
}

//nomor 4
let data = {
    id: 1,
    name:"Leanne Graham",
    username:"Bret",
    email:"Sincere@april.biz",
    address:
    {
    street:"Kulas Light",
    suite:"Apt. 556",
    city:"Gwenborough",
    zipcode:"92998-3874",
    },
    phone:"1-770-736-8031 x56442",
    website:"hildegard.org",
    }
const newData = {
    ...data,
    name:"Azka Fadhlan",
    email:"gb11102005@gmail.com",
    hobby:"Playing Valorant",
}
console.log(newData)
let { address: {street, city} } = data;
console.log(street)
console.log(city)