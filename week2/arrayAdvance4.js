//ARRAY METHODS
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//     1. filter() only "Sci-Fi" movies
let scifi=movies.filter(element=>element.genre=="Sci-Fi")
console.log(scifi)

//     2. map() to return:
//             "Inception (8.8)"
let labels=movies.map(element=>{
return element.title,element.rating
})
console.log(labels)

//     3. reduce() to find average movie rating
let average=movies.reduce((accumulator,next)=>accumulator+next.rating,0)/movies.length
console.log(average)

//     4. find() movie "Joker"
let movie=movies.find(element=>element.title=="Joker")
console.log(movie)

//     5. findIndex() of "Avengers"
let index=movies.findIndex(element=>element.title=="Avengers")
console.log(index)

// ASSIGNMENT:4 Movie Streaming Platform
// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

