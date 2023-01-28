// // module - (17-10)..............................

// // problem-1

// var total = 1000,
//     save = 700,
//     cost = total - save;

// console.log(cost);

// // problem-2

// var math = 75.25,
//     bio = 65,
//     chem = 80,
//     phy = 35.45,
//     ban = 99.50,
//     avg = (math + bio + chem + phy + ban) / 5,
//     avgResult = avg.toFixed(2);

// console.log(avgResult);

// // problem-3

// var text1 = "iam going to be",
//     text2 = "an awesome web developer",
//     concat = text1+" "+text2;

// console.log(concat);

// // problem-4

// var givenNum = 119,
//     divBy = 5,
//     reminder = givenNum % divBy;

// console.log(reminder);

// // module - (18-9)..............................

// // problem-1

// var fruits = ["apple", "banana", "orange"];

// var findFruit = fruits.indexOf("banana");
// console.log(findFruit);// find the index of banana

// fruits[findFruit] = "mango"
// console.log(fruits); // replace banana to mango

// var removefruit = fruits.pop();
// console.log(fruits); // remove orange from the array

// var addedfruit = fruits.push("watermelon");
// console.log(fruits); // add watermelon to the array


// // problem-2

// var mark = 486072;

// if (mark >= 101) {
//     console.log("odaa,101 hono marks ace na");
// }
// else if (mark >= 80 && mark <= 100) {
//     console.log("A+");
// }
// else if (mark >= 70) {
//     console.log("A");
// }
// else if (mark >= 60) {
//     console.log("B");
// }
// else if (mark >= 50) {
//     console.log("C");
// }
// else if (mark >= 40 && mark <= 33) {
//     console.log("D");
// }
// else {
//     console.log("F paiyos j odo,iyen abar chon porena");
// }

// // problem-3 phase-1

// var num1 = 13,
//     num2 = 79,
//     num3 = 45;
    
// if (num1 > num2 && num1 > num3) {
//     console.log("num1 is the largest");
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is the largest");
// }
// else {
//     console.log("num3 is the largest");
// }

// // problem-3 phase-2

// var arm1 = 9,
//     arm2 = 8,
//     arm3 = 9;

// if (arm1 == arm2 || arm1 == arm3 || arm2 == arm3) {
//     console.log("triangle is isosceles");
// }
// else {
//     console.log("triangle isn't isosceles");
// }


// module - (19-5)..............................

// problem-1

for (let i = 1; i <= 39; i++) {
    console.log("ajke amar mon vlo nei ..!!");
}

// or,

for (let i = 0; i < 39; i++) {
    console.log("ajke amar mon vlo nei ..!!");
}

// problem-2

for (let i = 58; i <= 98; i++) {
    console.log(i);
}

// problem-3

for (let i = 412; i <= 456; i+=2) {
    console.log(i);
}

// or,

for (let i = 412; i <= 456; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}

// problem-4

for (let i = 581; i <= 623; i+=2) {
    console.log(i);
}

// or,

for (let i = 581; i <= 623; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

//problem-5

console.log("difference between for loop and while loop :)");
console.log("(:A for loop is a single-line command that will be executed repeatedly. While loops can be single-lined or contain multiple commands for a single condition")

// problem-6

var topics = ["variable", "loop", "condition", "array"];

console.log(topics)

// problem-8

var num = 30;
while (num < 86) {
    if (num > 44) {
        break;
    }
    console.log(num);
    num++;
}

// or,

for (let i = 30; i < 86; i++) {
    if (i > 44) {
        break;
    }
    console.log(i);
}
    
// problem-9

var bookPrice = 159;

if (bookPrice < 200) {
    console.log("Yes! it's price lowest then 200,it's for " + bookPrice+ " taka");
}
else {
    console.log("awwh! it's price much than 200 taka");
}

