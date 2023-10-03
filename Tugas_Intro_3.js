//nomor 1
const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] 
            let cek = dataDay.find((item)=>{
            return item === day
            })
            if(cek){
            resolve(cek)
            }else{
            reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

// Menggunakan then dan catch
cekHariKerja('senin')
  .then((result) => {
    console.log(`Hari kerja: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });

// Menggunakan try dan catch
async function dayCheck() {
  try {
    const result = await cekHariKerja('rabu');
    console.log(`Hari kerja: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

dayCheck();

//nomor 2
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mel", "Juni", "Juli", "Agustus", "September", "Oktober", "November",
        "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }  
    }, 4000);
}

// Callback function untuk menampilkan semua bulan menggunakan method map
const displayMonths = (error, months) => {
    if (error) {
      console.error(error.message);
    } else {
      const monthAbbreviations = months.map((month, index) => {
        return `${index + 1}. ${month}`;
      });
      console.log(monthAbbreviations.join("\n"));
    }
  };
  
  // Panggil getMonth dengan callback displayMonths
  getMonth(displayMonths);

//nomor 3
//contoh 1
const cekHariSekolah = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'] 
            let cek = dataDay.find((item)=>{
            return item === day
            })
            if(cek){
            resolve(cek)
            }else{
            reject(new Error('Hari ini bukan hari sekolah'))
            }
        },3000)
    })
}

// Menggunakan then dan catch
cekHariSekolah('kamis')
  .then((result) => {
    console.log(`Hari sekolah: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });

// Menggunakan try dan catch
async function daySchoolCheck() {
  try {
    const result = await cekHariSekolah('jumat');
    console.log(`Hari sekolah: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

daySchoolCheck();

//contoh 2
const cekAgentValo = (agent) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataAgent = ['omen', 'cypher', 'raze', 'sage', 'chamber', 'jett'] 
            let cek = dataAgent.find((item)=>{
            return item === agent
            })
            if(cek){
            resolve(cek)
            }else{
            reject(new Error('Itu bukan Agent valorant'))
            }
        },3000)
    })
}

// Menggunakan then dan catch
cekAgentValo('omen')
  .then((result) => {
    console.log(`Agent Valorant: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });

// Menggunakan try dan catch
async function agentCheck() {
  try {
    const result = await cekAgentValo('raze');
    console.log(`Agent Valorant: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

agentCheck();

//nomor 4
// Menggunakan fetch untuk mengambil data dari REST API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Terjadi kesalahan saat mengambil data.');
    }
    return response.json();
  })
  .then(data => {
    // Mengambil semua nama (name) dari data
    const names = data.map(user => user.name);
    
    // Menampilkan semua nama di konsol
    console.log(names);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });
