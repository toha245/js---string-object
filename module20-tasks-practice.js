// task 1 : Count how many times a string has the letter a

// let str = 'abdul awal toha';
// let count = 0;
// for(let n of str){
//     if(n === 'a'){
//         count++;
//     }
// }
// console.log(count);



// task 2 : Count how many times a string has the letter a or A
// const myName = 'Hafez Md Abdul Awal Toha';
// let count = 0;
// for(let n of myName){
//     if(n === 'a'|| n === 'A'){
//         count ++;
//     }
// }
// console.log(count);


// system 2
// const myName = 'Hafez Md Abdul Awal Toha';
// let count = 0;
// for(let n of myName){
//     if(n.toLowerCase() === 'a'){
//         count ++;
//     }
// }
// console.log(count);

// task 3 : Check whether a string contains all the vowels a, e, i, o, u
// const sentence = 'I am a student, you are a intelligent student';
// if(sentence.includes('a') && sentence.includes('e') && sentence.includes('i') && sentence.includes('o') && sentence.includes('u')){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// task 4 :  If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let sentence = 'are you mad? no. are you a box? yes, i am a box. xxx. XXX. yyy. YYY';
// sentence = sentence.replaceAll('X', 'Y');
// sentence =  sentence.replaceAll('x', 'y');
// console.log(sentence);


// task 5 : Capitalize Every first Letter of each word in a String


// let sentence = 'i am a student. i am a teacher. you are a faithful';

// // 1. স্ট্রিংকে শব্দে ভাগ করা
// let words = sentence.split(' ');

// // 2. প্রতিটি শব্দের প্রথম অক্ষর Capitalize করা
// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     words[i] = word.charAt(0).toUpperCase() + word.slice(1);
// }

// // 3. সব শব্দকে আবার একত্রিত করা
// let capitalizedSentence = words.join(' ');

// // 4. ফলাফল দেখানো
// console.log(capitalizedSentence);


/**
 * js-object-tasks
*/

// task 1 : Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// const result = colors["golden rod"];
// console.log(result);


// task 2 : For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car["passenger capacity"] = 5;

// console.log(car);


// task 3 : Display the physics marks as output.
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// const result = student.physics.marks;
// console.log(result);


// task 4 : Count the number of properties.


// Object
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let keyList = Object.keys(student);
// let result = keyList;
// console.log(result.length);


// task 5 : Loop through an object and print the key-value pairs with their types
// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean


let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(let result in myObject){
    console.log(`key: ${result} | type: ${typeof myObject[result]}`);
    console.log(myObject[result]);
}





