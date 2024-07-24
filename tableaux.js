
let arr=[12,15,19,27,15,18]
//Ecrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.
console.log(Math.min(...arr));
console.log(Math.max(...arr));
//Créez une fonction qui calcule la somme de tous les éléments d'un tableau
let sum = arr.reduce((x, y) => x+y);
console.log(sum);
// Implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée
let short = arr.filter(function(arr){
    return arr>15
})
console.log(short);