let obj = [
  {
    name: "Zika",
  },

  {
    name: "Alia",
  },

  {
    name: "Riya",
  },

  {
    name: "Shivani",
  },
];

obj.sort((a, b) => {
  if (a.name < b.name) {
    return -1; //false
  }

  if (a.name > b.name) {
    return 1; //true
  }

  return 0; //false
});

console.log(obj);
