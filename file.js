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

// Dot and bracket notations
// const person={
//         name:'hanzala',
//         age:21,
//         hobbies:['playing','studing','coding'],
//         "relation ship":"single"
//     }

// console.log( person.name);

// console.log(person['relation ship']);

//Adding new key from new variable name

// const key='email'
// const person={
//             name:'hanzala',
//             age:21,
//             hobbies:['playing','studing','coding'],
//             "relation ship":"single"
//         }

//         person[key]='shaikhanzalagmail.com';
//         console.log(person);

//Loops in objcts

// const person={
//             name:'hanzala',
//             age:21,
//             hobbies:['playing','studing','coding'],
//             "relation ship":"single"
//         }

//         for(let key in person){
//             console.log(key);

//         }
// for(let key in person){
//     console.log(person[key]);

// }

// Object.keys()

// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));

// const val=Array.isArray(Object.keys(person))
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);

// }

//Computed Properties

// const key1='objkey1'
// const key2='objkey2'

// const value1='myvalue1'
// const value2='myvalue2'

// const obj={

// }
// obj[key1]=value1
// obj[key2]=value2

// console.log(obj);

//Spread Operator in Objects

// const obj1={
//     key1:'value1',
//     key2:'value2'
// }
// const obj2={
//     key3:'value3',
//     key4:'value4',
//     key1:"updatedkey" //same key1 simply it takes updated value
// }

// const newobj={...obj1,...obj2}
// console.log(newobj);

// Object Destructuring

// const band={
//     bandname:'abba jabba',
//     song:'Tere bin',
//     year:2001,
//     famoussong:"jile le"
// }

// const {bandname,song}=band;
// console.log(bandname);

// const {bandname:var1,song:var2 ,...restinfo}=band;

// console.log(song);
// console.log(var1);
// console.log(restinfo);

//Object inside Array

// const users=[
//     {userid:1,fname:"shaik",gender:"male"},
//     {userid:2,fname:"hanzala",gender:"male"},
//     {userid:3,fname:"ali",gender:"male"}
// ]

// // for(let user of users){
// //     console.log(user);

// // }

// //Nested Destructuring
// let [{gender:g}]=users;

// console.log(g);

//***********************Functions Declaration***********

// function greeting(){
//     console.log("Hello how are you");

// }

// greeting();

//***********************function return**************

// function addition(){
//     return 6+7;
// }
// const returnedvalue=addition();
// console.log(returnedvalue);

// //function passing parameters

// function sum(num1,num2){
//     return (num1+num2);
// }
// const value=sum(12,45);
// console.log(value);

// function 1
// input:String
// output:First Character

// function firstCharacter(anystring){

//     char=anystring[0];
//     console.log(char);

// }

// firstCharacter("hanzala")

// funtion 2
// input:Array,target
// output:index of target

// function indexfinding(array , target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==target){
//             return i;

//         }
//     }
//     return -1
// }
// let array=[1,2,3,4,5,6]
// let target=2

// let ans=indexfinding(array,target)
// console.log(ans);

/********* Arrow functions**********/

// const greeting =() =>{
//     console.log("Hello how are you");

// }
// greeting()

// const sumofthree = (num1,num2,num3) =>{
//     return num1+num2+num3
// }

// console.log(sumofthree(5,4,1));
// console.log(typeof sumofthree());

// const isEven =(n)=>{
//     return n%2==0;
// }

// console.log(isEven(5));

// //hoisting

// hello()

// function hello(){
//     console.log("Hello world");

// }

/****************Function Inside Function************************* */

// const app=()=>{

//     const myfunc=()=>{
//         console.log("Hello From First Function");
//     }

//     const add=(num1 ,num2)=>{
//         return sum=num1+num2;
//     }

//     myfunc()
//     console.log(add(3,4));

// }

// app();

/*****Lexical Scope*/

// const myapp=()=>{
//     const myvar="value1"
//     const secondfunc=()=>{
//         const myvar=59 //lexical scope value
//         console.log("the value will be "+myvar);//59

//     }
//     console.log(myvar);
//     secondfunc()

// }

// myapp()

/************Block Scope and function Scope************** */

//let and const varible cannot be accesed outside the block

// {
//     // block syntax
// }

// {
//     let kali="hanzala";
//     console.log(kali);

// }
// console.log(kali); error will come

/*********Default Parameter******** */

// const defaultfunc=(a,b)=>{

//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);

// }
// defaultfunc(3,2)

//rest parameters
// const defaultfunc=(a,b,...c)=>{

//     console.log(`a is ${a}`);//3
//     console.log(`b is ${b}`);//2
//     console.log(`c is ${c}`); //4,5,6,7,86

// }
// defaultfunc(3,2,4,5,6,7,86)

//param Destructuring

// method 1
// const person={
//     name:"hanzala",
//     gender:"male"
// }

// function myFunc(obj){
//     console.log(obj.name,obj.gender);

// }

// myFunc(person)

// method 2

// const person={
//     name:"hanzala",
//     gender:"male"
// }
// function myFunc({name,gender}){
//     console.log(name);
//     console.log(gender);

// }
// myFunc(person)

/*************Call Back function************ */

// function myfunc1(){
//     console.log("hello i am function 1");

// }
// function myfunc2(callback){
//     console.log("i am fucntion 2");

//     callback();

// }

// myfunc2(myfunc1)

/****************Function returning function********************** */

// function myfunc(){
//     function returning(){
//         console.log("i am returning");
//     }

//     return returning
// }

// const ans=myfunc()
// ans();

/*************Array Methods*************/
//forEach
//map
//filter
//reduce

//forEach

// const numbers=[3,5,6,7];

// function myFunc(number,index){
//     console.log(`index is ${index} and number is ${number*2}`);

// }

// numbers.forEach(myFunc)

//we can also create anonymous function in place of myfunc
//anonymous functions means function without name

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number is ${number*2}`);

// });

//forEach in objects

// const user=[
//     {firstname:"hanzala" ,age:23},
//     {firstname:"kali" ,age:32},
//     {firstname:"javed" ,age:343},
//     {firstname:"ali" ,age:31}
// ]

// user.forEach(function(user){
//     console.log(user.firstname ,user.age);

// })

/***************Map Method******************* */

// const numbers=[2,3,4,5,6];

// function square(numbers){
//     return numbers*numbers;
// }
// const result=numbers.map(square)
// console.log(result);

//with anonymous fuction
// const result=numbers.map(function(numbers){
//     return numbers*numbers;
// })
// console.log(result);

/******************Filter method ********************** */

// const numbers=[3,4,1,6,4,7,8,23,24,56];

// const isEven=function(number){
//     return number%2==0;
// }

// const evenNumber=numbers.filter(isEven);

// console.log(evenNumber);

/*******************Sorted Method********************* */
//It also sort the original array so it mutable
//sort method takes all number items as a string and sort them according to ascii value
// const arr=[1,1200,2,6,3];

// const newarray=arr.sort();
// console.log(arr);

// console.log(newarray); //1,2,3,6,1200(expected anwers)
//but the answer is 1,1200,2,3,6

//toSorted method

// const arr = [1, 12, 2, 6, 3];

// const newarray = arr.toSorted();
// console.log(arr);

// console.log(newarray);//1,12,2,6,3

/*************************Reduce Method ************************** */
//Reduce Method have two parameters accumulator and currentvalue 

// const numbers=[1,2,3,4,5,10];

// //aim:to sum all the numbers in an array

// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue
// });

// console.log(sum);

//Tracking 

// accumulator     currentValue    return
//     1                2            3
//     3                3            6
//     6                4            10
//     10               5            15
//     15               10           25

//real life example 

// const userCart=[
//     {productId:1,productName:"laptop",price:132000},
//     {productId:2,productName:"mobile",price:32000},
//     {productId:3,productName:"tv",price:2000},
    
// ]
// const totalPrice=userCart.reduce((currentTotal,currentPrice)=>{
//     return currentTotal+ currentPrice.price;
// },0)

// console.log(totalPrice);


// real sorting using sort method

// const array=[2,45,21,34,78,1];

// // so here we are doing a-b means 45-21 ,if the answer came positive then we replace the a with b means 21 came first then 45
// // for example i take 45 and 21
// const sort=array.sort((a,b)=>a-b);
// console.log(sort);


/****************Find Method*************************** */

// const myArray=["hanzal","ali","asad","nuh"]

// function isLength(string){
//     return string.length ===3;
// }

// const ans=myArray.find(isLength)
// console.log(ans);


//real life Example

// const users=[
//     {userId:1,userName:"hanzala"},
//     {userId:2,userName:"shaikh"},
//     {userId:3,userName:"javed"},
//     {userId:4,userName:"ali"}
// ]

// const myUsers=users.find((user)=>user.userId===2);
// console.log(myUsers);//{userId:2,userName:"shaikh"}


/********************Every Method **********************************/

// const numbers=[2,4,6,8,10]

// const ans=numbers.every((number)=>number%2==0);

// console.log(ans);

// //Real Life Example

// const userCart=[
//     {productId:1,productName:"laptop",price:132000},
//     {productId:2,productName:"mobile",price:32000},
//     {productId:3,productName:"tv",price:2000},
// ]

// const less2lakh=userCart.every((cart)=>cart.price <200000)
// console.log(less2lakh);

/************************Some Method***************************** */

// const numbers=[1,3,5,8,9]

// const ans=numbers.some((number)=>number%2==0)

// console.log(ans);

// //Real Life Example

// const userCart=[
//     {productId:1,productName:"laptop",price:132000},
//     {productId:2,productName:"mobile",price:32000},
//     {productId:3,productName:"tv",price:2000},
//     {productId:4,productName:"macbook",price:200000},
// ]

// const useritems=userCart.some((cartIteam)=>cartIteam.price >100000)
// console.log(useritems);

/************************Fill Method************************** */

// const myarray=new Array(10).fill(0)
// console.log(myarray);

// const arr=[1,2,3,4,5,6,7]

// arr.fill(0,2,5)
// console.log(arr);

/*********************Splice Method*************************** */

// const myarr=['item1',"item2","item3"]

// //delete

// myarr.splice(1,1)
// console.log(myarr);

// //insert
// myarr.splice(1,0,"insertediteam1")
// console.log(myarr);

// //delete and insert
// myarr.splice(1,2,"insertiteam2")

/******************Iterables****************** */

// jinpe for of loop laga sakein

// example:array,strings

// const str="hanzala"

// for(let iter of str){
//     console.log(iter);
    
// }

/******************Array Like objects********************* */
// jinke pass length ki property hoti hai
//Aur jinko aap index se acess karsakhte hai
// example:String

// const str="shaikh"
// console.log(str.length);//6
// console.log(str[3]);//i

/****************************Sets**************************/

/*
1.sets are used to store Data
2.no index based access.
3.sets have its own methods
4.order of storing the is not guranteed
5.unique elements only 
6.it is also a iterable
*/

// const numbers=new Set([1,2,3,4,5])
// console.log(numbers);

// //add method 
// numbers.add(5)
// numbers.add(6)
// numbers.add(['item1','item2'])
// numbers.add(['item1','item2'])
// console.log(numbers);

//has() method 
// if(numbers.has(6)){
//     console.log("number is present");
    
// }
// else{
//     console.log("number is not present");  
// }


// //values method 
// //it is used to iterate the set

// console.log(numbers.values());

// //clear method is used to delete all elements from set
// console.log(numbers.clear());

/*********************Maps Objects****************** */

// const person=new Map();

// person.set('firstName','hanzala')
// person.set('age',21)
// person.set('gender','male')
// person.set([1,2,3],'onetwothree')
// person.set({1:'one'},'one')
// // console.log(person);
// keys() is iterator
// console.log(person.keys());

//iterate
// for(let key of person.keys()){
//     console.log(key);
    
// }

//destructing maps
// for(let [key,value] of person){
//     console.log(key,value);
    
// }

//checking type
// for(let key of person){
//     console.log(Array.isArray(key));
    
// }

//Real world example

// const person1={
//     id:1,
//     firtName:"hanzala"
// }
// const person2={
//     id:2,
//     firtName:"sana"
// }

// const extraInfo=new Map();
// extraInfo.set(person1,{age:21,gender:"male"})
// extraInfo.set(person2,{age:20,gender:"female"})

// console.log(person1.id);
// console.log(person1.firtName);
// console.log(extraInfo.get(person2).gender);

/**********optional chaining*********** */

// const user={
//     firstName:"hanzala",
//     // address:{houseNumber:1234}
// }

// console.log(user?.address?.houseNumber);//undefined

/*****************This Keyword************** */
// function info(){
//     console.log(`The Person Name is ${this.firstName} and age is ${this.age}` );

// }

// const person2={
//     firstName:"sana",
//     age:20,
//     about:info
// }

// const person3={
//     firstName:"asad",
//     age:22,
//     about:info
// }

// person1.about()
// person2.about()
// person3.about()

/******************call ,apply , bind*********************** */

// const person={
//     firstName:'hanzala',
//     age:21,
//     about:function(hobby,favmusian){
//         console.log(this.firstName ,this.age ,hobby,favmusian);

//     }
// }
// const person2={
//     firstName:"sana",
//     age:20
// }

// person.about.call(person2,"guitar","arijit");

// //apply
// person.about.apply(person2,["guitar","arijit"])

// //bind
// const func= person.about.bind(person,"paino","arijit");

// func()

/**********************create multiple users********************** */

// function createUser(firstName,lastName,age,email,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address;

//     user.about=function(){
//         return `${this.firstName} is ${this.age} year old.`;
//     }
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }

// const user1=createUser("hanzala","shaik",18,"shaikhhanzala@gmail.com","myaddress");
// console.log(user1);

// console.log(user1.about());

// console.log(user1.is18());

/******Efficient****** */

// const userMethods={
//    about:function(){
//         return `${this.firstName} is ${this.age} year old.`;
//     },
//    is18:function(){
//         return this.age>=18;
//     }
    
// }

// function createUser(firstName,lastName,age,email,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address;
//     user.about=userMethods.about;
//     user.is18=userMethods.is18;

//     return user;
// }

// const user1=createUser("hanzala","shaik",18,"shaikhhanzala@gmail.com","myaddress");
// console.log(user1);

// console.log(user1.about());

// console.log(user1.is18());

/******************proto*******************/

// const obj1={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2=Object.create(obj1); //refrence creating of obj1 it is called proto

// obj2.key3="value3";

// console.log(obj2.key1);
// console.log(obj2);

/******************More Efficient********************** */
// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} year old`
//     },
//     is18:function(){
//         return this.age >=18;
//     }
// }
// function createUser(firstName,lastName,age,email,address){
    
//     const user=Object.create(userMethods);//it set the proto property
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.age=age;
//     user.email=email;
//     user.address=address

//     return user;
// }
// const user1=createUser("hanzala","shaik",18,"shaikhhanzala@gmail.com","myaddress");
// console.log(user1);

// console.log(user1.about());

// console.log(user1.is18());

/***********************prototype*********************** */

// function hello(){
//   return "hello world"
    
// }


// hello.prototype.key1="value1";
// hello.prototype.key2="vlaue2";
// hello.prototype.sing=function(){
//     return "oo o jana jaana";

// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing());


/***********************more more Efficient ***************************** */
function createUser(firstName,lastName,age,email,address){
    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.email=email;
    user.address=address;
    return user;
}

createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old.`
}

createUser.prototype.is18=function(){
    return this.age>=18;
}

const user1=createUser("almizan","shaik",20,"mizan@gmail.com","address");
console.log(user1);

console.log(user1.about());
console.log(user1.is18());

