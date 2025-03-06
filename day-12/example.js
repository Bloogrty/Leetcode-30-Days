// contoh 1
// let ditetapi = true;

// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji..");
//   }
// });

// console.log(janji1);
// // output: Promise { 'Janji telah ditepati!' }

// // // aksi (then / catch)
// janji1
//   .then(response => console.log("OK! : " + response)) //berhasil
//   .catch(response => console.log("NOT OK! : " + response)); //gagal

// // contoh 2 pake waktu
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Janji telah ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Janji tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu")) //dipake untuk animasi loading, ada animasi, setelah data selesai loading, animasi dihilangkan
//   .then((response) => console.log("OK! : " + response))
//   .catch((response) => console.log("NOT OK! : " + response));
// console.log("selesai");

// contoh 3
// promise all

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avenger",
        sutradara: "Joss Whedon",
        tahun: 2012,
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// jalanin 1 1
film.then((response) => console.log(response));
cuaca.then((response) => console.log(response));

// jalanin semua
Promise.all([film, cuaca])
  // array kegabung
  // .then(response => console.log(response));

  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
