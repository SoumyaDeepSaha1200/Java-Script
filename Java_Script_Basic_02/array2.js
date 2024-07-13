const marvel_heros = ["thor", "Iron Man", "Spiderman"]
const dc=["Superman","Flash","Batman"]

//marvel_heros.push(dc)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

let a=marvel_heros.concat(dc)
console.log(a)

const all_new_heros=[...marvel_heros,...dc] //this is known as spread operator
console.log(all_new_heros)


const another_arr=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real=another_arr.flat(Infinity)
console.log(real);