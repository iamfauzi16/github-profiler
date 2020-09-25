// example1
// function namaFungsi(Params) {
//   console.log("Fungsi ini dipanggil " + Params);
// }

// namaFungsi("halo");

// example2
// let namaFungsi = () => {
//   console.log("ini adalah fungsi tanpa nama");
// };

// namaFungsi();

/* StatusCode adalah tentang http code */

let https = require("https");

const options = {
  hostname: "api.github.com",
  port: 443,
  path: "/users/iamfauzi16",
  method: "GET",
  // GET > mengambil data
  // POST > Mengirim data
  headers: {
    "user-agent": "nodejs",
  },
};

let request = https.request(options, (result) => {
  console.log("Got Responses : " + result.statusCode);
});

request.end();

request.on("error", (element) => {
  console.error(element);
});
