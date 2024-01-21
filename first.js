// const student={
//     name : "atul",
//     age : 19,
//     marks : 55,
//     isPass : true
// }
// student.age=student["age"]+1;
// student.name="rohan";
// console.log(student.age); 
// console.log(student.name );
// const profile={
//     name : 'sradhakhapda',
//     isFollow : false,
//     followers : 123,
//     following : 123
// }
// console.log(profile); 
// console.log(typeof profile.isFollow); 


// let n =10;
// let n =10;
// if (n%2==0){
//     console.log("even number ");
// }
// else{
//     console.log("odd number ");
// }
        
// let mode="blue";
// mode=="dark"?console.log("black"):console.log("white");

// let x = prompt("Enter any number ");
// if (x%5===0){
//     console.log(x,"multiple of 5 ");
// }else{
//     console.log(x,"not multiple of 5 ");
// }
// for (let i=0;i<5;i++){
//     console.log("hello ")
// }
// x=prompt("enter any number :");
// console.log(x);
// let sum=0;
// let n=prompt("enter any number:");
// for (let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// let str="atul";
// for (let i of str){
//     console.log(i);
// }

// let student={
//     name:"atul",
//     age:19,
//     cgpa:9
// };
// for (let i in student){
//     console.log(i ,student[i]);
// }
// console.log("all even number ")
// for (let i=0;i<=100;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

// game 

// let game=25;
// let x=prompt("enter any number ");
// while (x!=game){
//     x=prompt("enter any number ");
// }
// console.log("you enter right number ");
// console.log(x);
// let str="atul ";
// str[0]="b";
// console.log(str);

// let name = prompt("Enter your full name :");
// // x =name.length;
// // console.log(x);
// let res="@"+name +name.length;
// console.log(res);

// let marks=[85,44,97,37,76,60];
// let sum=0;
// for (let i=0;i<marks.length;i++){
//     sum =sum +marks[i];
// }
// let avg = sum/marks.length;
// console.log('average value is ',avg);
// for (let i in marks){
//     console.log(marks[i]);
// }

// for (let i of arr){
//         i=i-i*(10/100);
//         console.log(i);
//     }
// let arr=[250,645,300,900,50];
// let arr1=[1,2,4,5];
// // arr.push(55);
// // arr.pop(0);
// let b=arr.concat(arr1);
// console.log(b);


// function print(a){
//     let sum=a+a;
//     return sum;
// }
// let s=print(5);
// console.log(s);


// arrow function 

// const sum=(a,b) => {
//     console.log(a+b);
// }


let arr=[23,34,6,23,67,324,6];
let res=arr.reduce((prev,curr)=>{
    return (prev>curr)? prev:curr 
})
console.log(res);