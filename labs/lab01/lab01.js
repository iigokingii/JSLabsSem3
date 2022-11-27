// //№1 
// function pow(x, n) {
//     let result = 1;
//     
//      for(var i = 0; i < n; i++){
//         result *= x;
//     }
//
//     return result;
// }
// x = prompt("x?", '');
// n = prompt("n?", '');

// if (n < 0){
//     alert('степень ${n} не поддерживается , введите целую степень , большую нуля');
// }
// alert ( pow(x,n) );

// //№2

// let name = "vova";
// let cityName = "Minsk";
// let yearOfBirthaday ="2004";
// let color = "red";
// let answer ="да";
// let sign = Infinity;
// let a=532;
// let perimeter=120;
// alert('Введенные данные неверны');

// //№3

// let b=5;
// let name3="Name";
// let i=0;
// let double =0.23;
// let result=1/0;
// let answer2=confirm("Ответ да/нет : ");
// alert(`answer:${answer2}`);
// let no=null;
// console.log(`type b ${typeof b}`);
// //№4

// function square(width,height){
//     let result=width*height;
//     return result;
// }
// let squareOfQuadrilateral=square(45,21);
// //№5
// console.log(`squareOfQuadrilateral: ${squareOfQuadrilateral+" mm"}`);
// let squareofsquare=square(5,5);
// let amount=Math.floor(squareOfQuadrilateral/squareofsquare);
// console.log(`amount:${amount}`);
// //№6
// let j=2;
// let z=++j;
// let m=j++;
// //№8
// alert("введенные данные неверные");
// //№9
// var res=prompt("секретный вопрос",'100');
// var realRes=123;
// if (res==realRes)
// alert("Введенные данные верны");
// else{
//     alert("Введенные данные неверны"); 
// }
// //№10
// var login=prompt("логин",'');
// var password=prompt("пароль",'');
// var realLogin="логин";
// var realPass="пароль";
// if(realLogin==login && realPass==password){
//     alert("успешный вход");
// }
// else{
//     alert("неуспешный вход");
// }
// //№11
// var russian=prompt("сдал русский?","нет");
// var math =prompt("сдал математику?","нет");
// var english =prompt("сдал английский?","нет");
// if (russian=="нет"&&math=="нет"&&english=="нет"){
//     alert("Здравствуй небо в облаках");
// }
// else if(russian=="нет"||math=="нет"||english=="нет"){
//     alert("пересдача")
// }
// else {
//     alert("переходишь на следующий курс")
// }
// //№12
// var variable1=prompt("a=",'');
// var variable2=prompt("b=",'');
// var sum =parseInt(variable1) + parseInt(variable2);
// console.log(`sum:${sum}`);
//№13
// console.log(true+true);
// console.log(5+"мм");
// console.log(8/Infinity);
// console.log(9*"\n9");
// console.log(null-1);
// console.log("5"-2);
// console.log("5px"-3);
// console.log(true-3);
console.log(0||1);
// //№14
// let array=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<10;i++){
//     if(array[i]%2==0){
//         array[i]*=2;
//     }
//     else{
//         array[i]+="мм";
//     }
// }
// console.log(array);
// //15
// var number=prompt("введи число большее 100",'');
// while(number<100){
//     number=prompt("введи число большее 100",'');
// }
// //16
// var numb =prompt("введите номер недели",'');
// switch(numb){
//     case '1':{
//         alert("пн");
//         break;
//     }
//     case '2':{
//         alert("вт");
//         break;
//     }
//     case '3':{
//         alert("ср");
//         break;
//     }
//     case '4':{
//         alert("чт");
//         break;
//     }
//     case '5':{
//         alert("пт");
//         break;
//     }
//     case '6':{
//         alert("сб");
//         break;
//     }
//     case '7':{
//         alert("вс");
//         break;
//     }
// }