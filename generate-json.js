const writeJsonFile = require('write-json-file');
const env = require('node-env-file');
const fs = require('fs');
const bg = require('./bookGenerator');
const finalPathEnv = fs.existsSync(__dirname + `/.env.${process.env.NODE_ENV}.local`) ? __dirname + `/.env.${process.env.NODE_ENV}.local` : __dirname + `/.env.${process.env.NODE_ENV}`;

env(finalPathEnv);

const chunks = [];
let data = [];
let counter = 0;
let index = 0;

const limit = parseInt(process.env.REACT_APP_BOOKS_LIMIT);
const chunkParts = limit / parseInt(process.env.REACT_APP_CHUNK_PARTS);

for (let i = 0; i < limit; i++) {
  data[counter] = {
    _id: i + 1,
    name: bg.generateTitle(),
    genre: bg.generateGenre(),
    author:{
      gender: bg.generateAuthorGender(Math.random() >= 0.5),
      name: bg.generateName()
    },
    publishDate: bg.generatePublishDate(),
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
