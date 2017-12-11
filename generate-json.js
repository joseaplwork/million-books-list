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

function genetatePublishDate(){
  const start = new Date(1970, 0, 1);
  const end = new Date();
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}

const chunks = [];
let data = [];
let counter = 0;
let index = 0;

const params = JSON.parse(process.env.npm_config_argv);
const limit = parseInt(params.remain.pop()) || 1e+6;
const chunkParts = limit / 10;

for (let i = 0; i < limit; i++) {
  data[counter] = {
    _id: i + 1,
    name: randomTitle(),
    genre: generateGenre(),
    author:{
      gender: generateAuthorGender(Math.random() >= 0.5),
      name: generateName()
    },
    publishDate: genetatePublishDate(),
  };
  counter += 1;

  if (counter === chunkParts) {
    chunks[index] = data;
    data = [];
    counter = 0;
    index += 1;
  }
}

const chunksPromises = Promise.all(chunks.map((data, index) => writeJsonFile(`./public/books/chunk-${index + 1}.json`, data, { indent: null })));

chunksPromises.then(() => console.log(`Book chunks generated`));
