// convert an array to an object
const peopleArr  = [
    {
        username:    'glestrade',
        displayname: 'Inspector Lestrade',
        email:       'glestrade@met.police.uk',
        authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
        lastSeen:    '2019-05-13T11:07:22+00:00',
    },
    {
        username:    'mholmes',
        displayname: 'Mycroft Holmes',
        email:       'mholmes@gov.uk',
        authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
        lastSeen:    '2019-05-10T11:21:36+00:00',
    },
    {
        username:    'iadler',
        displayname: 'Irene Adler',
        email:       null,
        authHash:    '319d55944f13760af0a07bf24bd1de28',
        lastSeen:    '2019-05-17T11:12:12+00:00',
    },
];

function arrToObjReducer(peopleObj, personObj) {
  let {username, ...reducedPersonObj} = personObj;
  return {...peopleObj, [username]: reducedPersonObj};
}

let peopleObj = peopleArr.reduce(arrToObjReducer, {});
console.log(peopleObj);

// unfold a small array to a large array
const fileLines = [
    'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
    'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
    'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
    'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
    'Inspector Stanley Hopkins,Inspector Athelney Jones'
];

function splitLineReducer(largeArr, line) {
  return largeArr.concat(...line.split(','));
}

let namesArr = fileLines.reduce(splitLineReducer, []);
console.log(namesArr);

// flatMap
function flatMap(f, arr) {
  const reducer = (acc, item) => acc.concat(...f(item));
  return arr.reduce(reducer, []);
}

const investigators = flatMap((line) => line.split(/,/g), fileLines);

// make two calculations in one traverse
const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
function minMaxReducer(acc, reading) {
  return {min: Math.min(reading, acc.min), max: Math.max(reading, acc.max)};
}
let initMinMax = {min: Number.MAX_VALUE, max: Number.MIN_VALUE};
let {min, max} = readings.reduce(minMaxReducer, initMinMax);
console.log(min, max);

// combine mapping and filtering into one pass
function notEmptyEmail(person) {
  return person.email !== null && person.email !== undefined;
}

function greater(a, b) {
  return (a > b) ? a : b;
}

function notEmptyMostRecent(acc, person) {
  return notEmptyEmail(person) ? greater(person.lastSeen, acc) : acc;
}

const mostRecent = peopleArr.reduce(notEmptyMostRecent, '');
console.log(mostRecent);
