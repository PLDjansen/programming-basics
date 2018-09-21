// Code voor de Types & variabelen opdracht
const numberToBeDivided = 9;
const resultOfDivision = numberToBeDivided % 2;
if (resultOfDivision < 1) {
    console.log('This number is even');
} else {
    console.log('This number is uneven');
}

const myOpinion = 'Programming is not so cool';
const myRealOpinion = myOpinion.replace(/not/, '')
console.log(myRealOpinion);

const myResidence = 'Ik woon in Naboo';
if (myResidence !== 1400) {
    console.log('Dit slaat nergens op');
}
// Dit is geen slimme vraag, omdat je een string vergelijkt met een number.

// Code voor de Conditionals opdracht
const behaaldeCijfer = 7;
if (behaaldeCijfer < 6) {
    console.log('Onvoldoende');
} else if (6 < behaaldeCijfer < 7) {
    console.log('Voldoende');
} else if (7 < behaaldeCijfer < 9) {
    console.log('Goed');
} else if (behaaldeCijfer > 9) {
    console.log('Uitmuntend');
}

switch (behaaldeCijfer) {
    default:
    console.log('Onvoldoende');
        break;
    case 6,7:
    console.log('Voldoende');
        break;
    case 7.1,8.9:
    console.log('Goed');
        break;
    case 9,10:
    console.log('Uitmuntend');
}

let purchasedBook = true;
let job = 'teacher';
let inTrain = false;
if (job = 'teacher' || (purchasedBook = true || (inTrain = false))) {
    console.log('Finally I can enjoy my book');
} else if (job = 'teacher' || (purchasedBook = true || (inTrain = true))) {
    console.log('I want to read my book, but i am still on my home');
} else if (job = 'teacher' || (purchasedBook = false || (inTrain = true))) {
    console.log('I had no time to buy a book')
} else if (job !== 'teacher' || (purchasedBook = true || (inTrain = true))) {
    console.log('I am not a teacher')
} else if (job = 'teacher' || (purchasedBook = false || (inTrain = false))) {
    console.log('I ended up carpooling at school')
} else if (job !== 'teacher' || (purchasedBook = false || (inTrain = true))) {
    console.log('When i get off the train from my work at an office in a few minutes, I will have nothing to do at home')
} else if (job !== 'teacher' || (purchasedBook = true || (inTrain = false))) {
    console.log('I like to read books at home, because I am unemployed')
} else if (job !== 'teacher' || (purchasedBook = false || (inTrain = false))) {
    console.log('I am at home and have nothing to do')
}