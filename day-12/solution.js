// solution 1
// const addTwoPromises = async (promise1, promise2) => {
//   const [val1, val2] = await Promise.all([promise1, promise2]);
//   return val1 + val2;
// };

// solution 2
const addTwoPromises = async (...args) => {
  const values = await Promise.all(args);
  return values.reduce((acc, curr) => acc + curr, 0);
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

// Note
// Promise = janji
// Sebuah object yang mempresentasikan hasil dari sebuah event yang asinkron yang terjadi di masa depan.
// Promise memiliki 3 state, yaitu:
// 1. Pending: state awal ketika promise dibuat.  (belum terpenuhi atau ditolak)
// 2. Fulfilled: artinya bahwa operasi yang dijanjikan telah selesai dengan sukses. (terpenuhi)
// 3. Rejected: artinya bahwa operasi yang dijanjikan gagal. (ditolak)

// untuk menjalankan ada 3 fungsi callback yang bisa digunakan
// 1. .then() : digunakan untuk menangani kasus ketika promise terpenuhi  (fulfilled)
// 2. .catch() : digunakan untuk menangani kasus ketika promise ditolak (rejected)
// 3. .finally

// aksi (then / catch)
