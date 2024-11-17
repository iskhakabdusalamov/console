"use strict";

let numberOfFilms;

const start = () => {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
};
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const rememberMyFilms = () => {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = +prompt("На сколько оцените его?", "");

    if (a !== "" && b !== "" && a !== null && b !== null && a.length <= 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
      console.log("Error");
    }
  }
};
rememberMyFilms();

const writeYourGenres = () => {
  for (let j = 1; j <= 3; j++) {
    const genres = prompt(`Ваш любимый жанр под номером ${j}?`, "");
    personalMovieDB.genres[j - 1] = genres;
  }
};
writeYourGenres();

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
};
detectPersonalLevel();

const showMyDB = (toggle) => {
  if (!toggle) {
    console.log(personalMovieDB);
  }
};
showMyDB(personalMovieDB.private);
