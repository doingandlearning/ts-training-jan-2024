const olympians = [
  "Michael Phelps",
  "Usain Bolt",
  "Simone Biles",
  "Serena Williams",
  "Katie Ledecky",
];

for (let i = 0; i < olympians.length; i++) {
  console.log(olympians[i]);
}

olympians.forEach((item) => console.log(item));

for (const olympian of olympians) {
  console.log(olympian);
}

for (const char of "Kevin") {
  console.log(char);
}

const medallists = {
  "Michael Phelps": 28,
  "Usain Bolt": 8,
  "Simone Biles": 7,
  "Serena Williams": 4,
  "Katie Ledecky": 6,
};

for (const [olympian, medals] of Object.entries(medallists)) {
  console.log(`${olympian} has won ${medals} medals.`);
}

// Destructuring

const [count, setCount] = ["getter", "setter"];
const [, , , [, [, six, [seven]]]] = [1, 2, 3, [4, [5, 6, [7]]]];

console.log(six, seven);

{
  const {
    team: { abbreviation },
    name,
  } = {
    name: "Phil",
    team: { abbreviation: "CDA" },
    term: "13years",
  };
  console.log(abbreviation);
}
