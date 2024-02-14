//Dhairya Kachalia
//dhairyak@iastate.edu
//Feb 14,2024


//Exercise 01
console.log("----Exercise 01----");

function maxOfTwo(n1, n2) {
    return (n1 > n2 ? n1 : n2);
}
let n1 = 11;
let n2 = 10;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1, n2));
//Exercise 02

console.log("----Exercise 02----");
function maxOfArray(array) {
    k = array[0];
    for (i of array) {
        k = maxOfTwo(k, i);
    }
    return k;
}
let array = [10, 11, 1024, 125, 9, 201];
console.log(maxOfArray(array));

//Exercise 03

console.log("----Exercise 03----");

const movie = {
    title: "Some Movie",
    releaseDate: 2018,
    rating: 4.5,
    director: "Steven Spielberg"
};

function showProperties(myMovie) {
    //list of keys
    for (let key in myMovie) {
        console.log("This is a key: ", key);
    }
    //list of values
    for (let key in myMovie) {
        console.log("This is a value: ", myMovie[key]);
    }
}

showProperties(movie);

//Exercise 04

console.log("----Exercise 04----");

const circle = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());

//Exercise 05

console.log("----Exercise 05----");


const circle2 = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    get radiusValue() {
        return this.radius;
    },
    set radiusValue(radius) {
        this.radius = radius;
    }

};
console.log(`Area with radius ${circle.radius} :`, circle2.area().toFixed(2));
circle2.radiusValue = 3;
console.log(`Area with radius ${circle2.radiusValue}: `, circle2.area().toFixed(2));

//Exercise 06

console.log("----Exercise 06----");

const circle3 = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    getRadiusValue: function () { return this.radius; },
    setRadiusValue: function (radius) { this.radius = radius; }
};

console.log(`Area with radius ${circle3.getRadiusValue()} :`, circle3.area().toFixed(2));
circle3.setRadiusValue(3);
console.log(`Area with radius ${circle3.getRadiusValue()}: `, circle3.area().toFixed(2));

//Exercise 07

console.log("----Exercise 07----");

const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
};

function calculateAverageGrade(grades) {
    sum = 0;
    for (key in grades) {
        sum += grades[key];
    }
    return (sum / Object.keys(grades).length).toFixed(2);
}

console.log(calculateAverageGrade(grades));

//Exercise 08

console.log("----Exercise 08----");

const students = [
    {
        Fer: {
            math: 85,
            science: 90,
            history: 75,
            literature: 88
        }
    },
    {
        Alex: {
            math: 99,
            science: 97,
            history: 94,
            literature: 90
        }
    },
    {
        Mary: {
            math: 79,
            science: 72,
            history: 81,
            literature: 79
        }
    }
]

function calculateAverageGrades(students) {
    const studentAverages = {};

  for (const student of students) {
    for (const studentName in student) {
      const grades = student[studentName];
      totalScore = 0;
      for(subjects in grades){
        totalScore+= grades[subjects];
      }
    //   const totalScore = Object.values(grades).reduce((sum, score) => sum + score, 0);
      const averageScore = totalScore / Object.keys(grades).length;
      studentAverages[studentName] = averageScore;
    }
  }

  return studentAverages;
}
console.log(calculateAverageGrades(students));