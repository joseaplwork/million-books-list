const writeJsonFile = require('write-json-file');
const randomTitle = require('./randomTitle');
const { names, lastNames, genres } = require('./data');

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	const fullname = capFirst(names[getRandomInt(0, names.length)]) + ' ' + capFirst(lastNames[getRandomInt(0, lastNames.length)]);
	return fullname;
}

function generateGenre(){
	const genre = capFirst(genres[getRandomInt(0, genres.length)]);
	return genre;
}

function generateAuthorGender(bool) {
  return {
    id: bool ? 'authorGenderFemale' : 'authorGenderMale',
    value: bool ? 'female' : 'male',
  }
}

const data = [];
for (let i = 0; i < 1e+3; i++) {
  data[i] = {
    _id: i,
    name: randomTitle(),
    genre: generateGenre(),
    author:{
      gender: generateAuthorGender(Math.random() >= 0.5),
      name: generateName()
    },
    publishDate: 'Thu Jan 12 2017 22:54:56 GMT+0000 (UTC)',
  }
}

writeJsonFile('public/books.json', data, { indent: null }).then(() => {
  console.log('Books json generated');
});
