import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


const arr = [4, 8, 5, 300, 30, 20, 6, 9, 90, 2, 1, 100, 7, 5]

console.log(arr.sort())
console.log(arr.sort((a, b) => a - b)) // menor a mayor
console.log(arr.reverse()) // da  la vuelta, lo pone de mayor a menor



let cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

console.log(cars.sort((a, b) => a.year - b.year))



// arrays anidados

const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]




console.log(nested)

console.table(nested)

//accediendo a los valores directamente
console.log(nested[1][1])
console.log(nested[0][2])
console.log(nested[1][0])
console.log(nested[2][1])

for (let i of nested) {
  console.log(i);
  for (let j of i) {
    console.log(j)
  }
}

for (let i in nested) {
  for (let j in nested[i]) {
    console.log('nested[i][j]', nested[i][j])
    //if (nested[i][j]==9) alert (`encontrado el valor 5 en la posicion nested[${i}][${j}] `)
  }
}

nested.forEach(arr => arr.forEach(el => console.log('nested forEach ', el)))


console.log(nested)
console.log(nested[0])
console.log(nested[0][0])

const arrA = [1, 2, 3]

for (let val of arrA) { // for of accede a valores
  console.log(val)
}

for (let val in arrA) { //for in accede a posiciones
  console.log(arrA[val])
}

arrA.forEach(el => console.log(el))

for (let i in nested) {
  for (let j in nested[i]) {
    console.log(nested[i][j]);

  }
}


// const anidadisimo = [
//   [1, 2, 3, [9, 8, 7]],
//   [4, 5, 6, [6, 5, 4]],
//   [7, 8, 9, [3, 2, 1]]
// ]
// flat para pasar de esto [1, 2, 3, [9, 8, 7]] a esto [1, 2, 3, 9, 8, 7]
// const single = anidadisimo.map(arr => arr.map(el => {
//   if (Array.isArray(el)) {
//     return el.map(val => val)
//   } else {
//     return el
//   }
// }))

// console.log('single', single);


const testing = () => {
  if (true) {
    console.log(true)
  } else {

    console.log(false)
  }
  
}

// console.log(testing())
// //tienes que poner cada uno de los nombres con los apellidos
const nombres = [{name: 'pepe', gender: 'male'}, {name: 'lola', gender: 'female'}, {name: 'matia', gender: 'male'}, {name:'barbara', gender: 'female'}]
const apellidos = ['paredes', 'armando', 'gonzalez', 'dominguez', 'perez']
const titulo = [{gender: 'male', title: 'Don' }, {gender: 'female', title: 'Doña' }]


const arrR = [ nombres, apellidos, titulo ]
console.log(arrR);

nombres.forEach(el => { 
  apellidos.forEach(val => {
    titulo.forEach(item => {
      console.log(`${item.gender == el.gender && `${item.title} ${el.name} ${val}`}`)
    })
  })
})

  console.log(`${titulo[0]} ${apellidos[2]} ${nombres[0]}  `)




  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'paredes', 'partio'];
  const dominio = ['com', 'es', 'io', 'net'];

  /************************************* 
  *                                    *
  *               EXTRA                *
  *                                    *
  **************************************/
  
// extra 1 ---> si termina el noun como el dominio, hacer esto: 
// thegreatparedes.es --> thegreatpared.es 
// thegreatpartio.io --> thegreatpart.io 
// extra 2 --- > se muestren en el html todos los dominios
// extra 3 ---> se agrupen segun la terminacion 