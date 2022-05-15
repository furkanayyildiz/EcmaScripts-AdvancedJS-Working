const profiles = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 10 },
  { id: 3, name: "Silgi", fiyat: 2 },
  { id: 4, name: "Kalemtras", fiyat: 7 },
];
//forEach with arrays
let newUsernames = [];
profiles.forEach(({ username }) => {
  username = username + "!";
  newUsernames.push(username);
});
console.log(newUsernames);

// Map
//It applies the entered callback function to the given array elements and creates a new array with the results obtained.
let newProfiles = profiles.map(({ username }) => {
  return username + "?";
});
console.log(newProfiles);

//Map 2 in react component with prop

function urunGoster(urunListesi) {
  return urunListesi.map((urun) => (
    <li key={urun.id}>
      {urun.name} fiyati {urun.fiyat} TL
    </li>
  ));
}

// filter
let newTeam = profiles.filter(({ team }) => team === "red");
console.log(newTeam);

//reduce
const total = profiles.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(total);

// reduce 2
const toplamUrunFiyati = urunler.reduce(
  (toplam, urun) => (toplam = toplam + urun.fiyat),
  0
);

console.log(toplamUrunFiyati);

const toplamString = urunler.reduce(
  (toplam, urun) => (toplam = `${toplam} ${urun.name}`),
  "Urun Isimleri:"
);

console.log(toplamString);
