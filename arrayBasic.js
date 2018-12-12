const shoesList = ['Nike', 'Puma', 'Adidas', 'Jordans', 'Timberland'];

console.log(shoesList);

shoesList.unshift('nouvelleMarque');

console.log(shoesList);
console.log(shoesList.length);

shoesList.shift();

console.log(shoesList);
console.log(shoesList.length);

shoesList.push('nouvelleMarque');

console.log(shoesList);
console.log(shoesList.length);

shoesList.pop();

console.log(shoesList);
console.log(shoesList.length);

const shoesList2 = shoesList.slice(0, 3);

console.log(shoesList2);
console.log(shoesList2.length);

const newShoesList = ['marque1', 'marque2', 'marque3', 'marque4', 'marque5'];

const allShoes = shoesList2.concat(newShoesList);

console.log(allShoes);
console.log(allShoes.length);

console.log(
  'Marques contenant 4 lettres : ' +
    allShoes.filter(function(mark) {
      return mark.length === 4;
    })
);

console.log(
  'Marques contenant 4 lettres : ' +
    allShoes.find(function(mark) {
      return mark.length === 4;
    })
);

console.log(
  "Filter va sélectionner tous les éléments retournant true (sous forme d'un tableau), tandis que find ne retournera que le premier retournant true (sous forme d'un élément string, number...)."
);
