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

let sentence = 'i am a student. i am a teacher. you are a faithful';
sentence = sentence.split(' ');
console.log(sentence);