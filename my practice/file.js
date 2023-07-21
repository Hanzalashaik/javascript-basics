// console.log("Hello World")
// console.log("Hanzala")
// console.log("Javed Ali")
// console.log("Shaikh")

// var keyword

// var sname='hanzala'
// var sname='shaikh'
// console.log(sname)

// let keyword

// let firstname='javascript'
//  firstname='ecmascript'
// console.log(firstname)

// const keyword

// const pi=3.14
// console.log(pi*3*3)

// String Length
// let firstName='  hanzala  ';
// console.log(firstName.length)
// console.log(firstName)

// trim()
// let newName=firstName.trim();
// console.log(newName.length)
// console.log(newName)

// toUpperCase()

// let firstName='shaik'
// console.log(firstName.toUpperCase())

// toLowerCase

// let firstName='I AM HANZALA SHAIKH'
// console.log(firstName.toLowerCase())

// slice()

// let firstName='hanzala'
// console.log(firstName.slice(0,4))

// datatypes(primitive datatypes)

// String
// Number
// Boolean
// undefined
// null
// Symbol
// BigInt

// spread operator (...)

// const values=[2, 4, 3, 1];
// console.log(...values);
// const newvalues=[...values]
// console.log(newvalues)
// const allvalues=[...values,...newvalues];
// console.log(allvalues);

// typeof operator

// let firstName='hanzala'
// let N=1;
// let b=true
// console.log(typeof firstName)
// console.log(typeof N)
// console.log(typeof b)

// convert number to string

// let firstNumber=22;
// firstNumber=firstNumber+''; //"22"
// console.log(typeof firstNumber)

// second method
// let firstNumber=22;
// firstNumber=String(firstNumber);
// console.log(typeof firstNumber)

// convert string into number

// let firstString=+'34' //just add + infront of string
// console.log(typeof firstString)

// second method

// let firstString=Number('34')
// console.log(typeof firstString)

//template String

// let age=22
// let firstName='hanzala'
// let aboutme=`my name is ${firstName} and my age is ${age}`
// console.log(aboutme)

//comparision operator

// let num1=7;
// let num2=5;
// let num3=5;
// let num4='7';

// console.log(num1==num2)
// console.log(num2==num3)
// console.log(num1>=num2)
// console.log(num1==num4)
// console.log(num1===num4)

//falsy values

// undefined
// 0
// ""
// null
// false

//truly values

// 1)true
// 2)1
// 3)-1
// 4)'abc'

//If and Else statements

// let firstname=''
// if(firstname){
//     console.log('hanzala')
// }
// else{
//     console.log('ali')
// }

//Ternary Operator / conditional operator

// let age=18
// let drink=age>=19?"wine":"milk"

// console.log(drink)

//and , or operator

// let firstName="hanzala"
// let age=18

// if(firstName[0]=== 'h' && age>=18)
// {
//     console.log("this is and operator")
// }
// else{
//     console.log("null")
// }

//or operator
// if(firstName[0]=== 'h' || age<18){
//     console.log("This is an or operator");

// }
// else{
//     console.log('Inside else');
// }

//Nested If and Else

// let winningNumber=19
// let GuessNumber=+prompt("Guess the number:")

// if(GuessNumber === winningNumber){
//     console.log("Your guess is right");
// }
// else{
//     if(GuessNumber < winningNumber){
//         console.log("too low");
//     }
//     else{
//         console.log("too high");
//     }
// }

//Switch case

// let day=3

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break
//     case 1:
//         console.log("Monday");
//         break
//     case 2:
//         console.log("Tuesday");
//         break
//     case 3:
//         console.log("Wednesday");
//         break
//     case 4:
//         console.log("Thursday");
//         break
//     case 5:
//         console.log("Friday");
//         break
//     case 6:
//         console.log("Saturday");
//         break

//     default:
//         console.log("Invalid day");
//         break
// }

//Introduction to array

// let fruits=['mango','apple','banana'];
// let numbers=[1,2,3,4,5];
// let mixed=[1,2,3,'String',null,undefined];

// console.log(fruits)
// console.log(numbers);
// console.log(mixed)

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// // methods in array

// //push :adds the elements at last
// fruits.push("grapes")
// console.log(fruits);

// //pop:remove the element from last and it can also varries the removed element.
// let removednumber=numbers.pop();
// console.log(numbers);
// console.log(removednumber);

// //unshift : add the element at first
// fruits.unshift("lichi")
// console.log(fruits)

// //shift :remove the element from starting
// let removedfriut=fruits.shift()
// console.log(fruits);
// console.log(removedfriut);

// primitive type 

// let num1=4;
// let num2=num1;
// num1++
// console.log(num1);
// console.log(num2)

// //reference type

// let arr1=[1,2,3,4,5]
// let arr2=arr1;
// arr1.push(66)

// console.log(arr1 );
// console.log(arr2);


// clone an array using slice method

// let array1=['item1','item2']
// let array2=array1.slice(0)
// array1.push('item3')

// console.log(array1);
// console.log(array2);

//loops in array

// const fruits=['mango','apple','banana','guava'];
// const fruits2=[];
// console.log(fruits.length);

// for loop

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase());
// }

// while loop

// let i=0
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase())
//     i++
// }
// console.log(fruits2);

// for of loop

// for(let fruit of fruits){
//     console.log(fruit);
// }

// for in loop 
// it gives the index of all elements in an Array

// for(let fruit in fruits){
//     console.log(fruit);
// }

//Array Destructing

// const array=['value1','value2','value3']

// let [v1,v2]=array

// console.log(v1);
// console.log(v2);

// let [v1, ,v2]=array
// console.log(v1);
// console.log(v2);

// const array=['value1','value2','value3','value4']

// let [v1,v2,...mynewarray]=array //===>storing rest of the elements using ...variablename called mynewarray

// console.log(v1);
// console.log(v2);
// console.log(mynewarray);

// ****************** Introduction to Objects**************

// How to create an Object

// const person={
//     name:'hanzala',
//     age:21,
//     hobbies:['playing','studing','coding']
// }
// console.log(person)
// person.gender="male"

// console.log(person)
// console.log(person.hobbies)

