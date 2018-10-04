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
    case 6, 7:
        console.log('Voldoende');
        break;
    case 7.1, 8.9:
        console.log('Goed');
        break;
    case 9, 10:
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

//Code voor de Loops opdracht
let a = 0;
while (a < 8) {
    a += 4;
    console.log(a);
}

let x = 0;
let y = 1;
while (y < 89) {
    let tmp = x + y;
    x = y;
    y = tmp;
    console.log('De Fibonacci reeks gaat als volgs: ' + tmp);
}

let numbersInArrayToBeAddedUp = [2, 4, 8, 9, 12, 13];
for (let n = 0; n < numbersInArrayToBeAddedUp.length; n++) {
    n += n;
    numbersInArrayToBeAddedUp.push(n);
    console.log(n)
}

//Code voor de Functions opdracht
function fibonacciSeries() {
    let x = 0;
    let y = 1;
    while (y < 89) {
        let tmp = x + y;
        x = y;
        y = tmp;
        console.log('De Fibonacci reeks gaat als volgs: ' + tmp);
    }
}
fibonacciSeries()

// Code voor de Arrays opdracht
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
function lapRecords(ourMin, ourMax) {
    let randomRange = Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
    for (var i = 0; i < 1; i++) {
        console.log(lapRounds[randomRange]);
    }

}
lapRecords(0, 7);
lapRecords(0, 7);
lapRecords(0, 7);

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];
for (var i = 0; i < allMyRecords.length; i++) {
    for (var j = 0; j < allMyRecords[i].length; j++) {
        console.log(allMyRecords[i][j]);
    }
}

const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {

        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    console.log(newArray);
}
filteredLapRoundsWithForLoop()

function filteringLapRounds(value) {
    return value <= 4;
}
var filteredLapRounds = lapRounds.filter(filteringLapRounds);
console.log(filteredLapRounds);
// De reden dat .filter fijner en beter werkt, is dat het kleinere en serkere code is door het weg kunnen laten van de for loop en het if-statement.

// Code voor Intro in objecten opdracht


let teachers = [
    {
        name: "Loek",
        profession: "teacher",
        brand: "Linux",
        hoursPerWeek: 10,
        salary: 1000,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek
        }
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino",
        hoursPerWeek: 20,
        salary: 2000,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek
        }
    },
    {
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple",
        hoursPerWeek: 30,
        salary: 3000,
        salaryPerHour: function() {
        return this.salary / this.hoursPerWeek
        }
    }
]

for (let j = 0; j < teachers.length; j++) {
    console.log(`I have a ${teachers[j].profession} named ${teachers[j].name} and he likes to work on a ${teachers[j].brand} computer. 
    Doing that, ${teachers[j].name} earns a total of €${teachers[j].salary} while working ${teachers[j].hoursPerWeek} hours, which amounts to
    €${teachers[j].salaryPerHour()} per hour.`);
}
