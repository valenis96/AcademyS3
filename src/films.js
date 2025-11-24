// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map(movie => movie.director)
  console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesFromDirector = movies.filter(movie => movie.director === director)
  console.log("EXERCICE 2 ->",director + ':', moviesFromDirector);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesFromDirector =  movies.filter(movie => movie.director === director)
  const average = Number((moviesFromDirector.reduce((acc, movie) => acc + movie.score, 0) / moviesFromDirector.length).toFixed(2))
  console.log("EXERCICE 3 ->", director + ':', average);
  return average;
}
  
// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesTitles = movies.map(movie => movie.title).sort().slice(0, 20)
  console.log("EXERCICE 4 ->", moviesTitles);
  return moviesTitles
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesYears = movies.sort((a, b) => {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;

  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;

  return 0;
}).slice(0, 20);
  console.log("EXERCICE 5 ->", moviesYears);
  return moviesYears
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const moviesByCategory =  movies.filter(movie => movie.genre.some((g) => g === genre))
  const average = Number((moviesByCategory.reduce((acc, movie) => acc + movie.score, 0) / moviesByCategory.length).toFixed(2))
  console.log("EXERCICE 6 ->", genre + ':', average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
 const newDurationMovies = movies.map(movie => {
  const [hours, minutes] = movie.duration.split(' ');
  const hoursNum = hours?.replace(/\D/g, "") || 0;
  const minutesNum = minutes?.replace(/\D/g, "") || 0;
  const newDuration = +hoursNum * 60 + +minutesNum
  
  
  const newDurationMovie = {
    ...movie, 
    duration: newDuration
  }
  return newDurationMovie
 })
  console.log("EXERCICE 7 ->", newDurationMovies);
  return newDurationMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const bestMovieByYear =  
  movies.filter(movie => movie.year == year).sort((a, b) => {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  }).slice(0, 1)
  console.log("EXERCICE 8 ->", bestMovieByYear);
  return bestMovieByYear;
}


// export const films = {
//     getAllDirectors,
//     getMoviesFromDirector,
//     moviesAverageOfDirector,
//     orderAlphabetically,
//     orderByYear,
//     moviesAverageByCategory,
//     hoursToMinutes,
//     bestFilmOfYear,
// };

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

// window.films = films;
