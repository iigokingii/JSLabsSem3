//1

function FuncWithoutParms(...args){
    if(args.length<=3){
        let tmp = "";
        for(let temp of args){
            tmp+=temp;
        }
        console.log(`${tmp}`);
        console.log(`${'-'.repeat(90)}`);
    }
    if(3<args.length && args.length<=5){
        args.forEach(element => {
            console.log(`type of ${element} : ${typeof(element)}`);
        });
        console.log(`${'-'.repeat(90)}`);
    }
    if(args.length>5 && args.length<=7){
        console.log(`number of arguments: ${args.length}`);
        console.log(`${'-'.repeat(90)}`);
    }
    if(args.length>7){
        console.log(`Number of args is too large ...`);
        console.log(`${'-'.repeat(90)}`);
    }
}
FuncWithoutParms("2",4,true);
FuncWithoutParms("2",'s',true,4);
FuncWithoutParms("2",'s',true,4,0,"2");
FuncWithoutParms("2",'s',true,4,false,"dsad","r234",443,666,777);

//2

// window.a;
// alert(a);

// alert(a);
// window.a=2;

// alert(a);
// window.a=2;
// let a;

// alert (a);
// window.a=2;
// var a;

// alert(a);n
// let a=2;

// let a=2;
// window.a=3;
// alert(a);

// var a=2;
// window.a=3;
// alert(a);

//3

let s =5 ;
function sum(){
    alert(s);
}
sum();

//4

function makeCounter(){
    let currentCounter=1;
    return function(){
        return currentCounter++;
    };
}
let counter = makeCounter();
alert(counter());
alert(counter());
alert(counter());
let counter2 = makeCounter();
alert(counter2());

//5

console.log(`Names of functions:\n`);
console.log(FuncWithoutParms.name);
console.log(makeCounter.name);
console.log(sum.name);
'-'.repeat(90);

//6
function volume(l){
    return(w)=>{
        return(h)=>{
            return l*w*h;
        }
    }
}

function Volume(l){
    return (w,h)=>{
        return l*w*h;
    }
}

console.log(`Объем параллелепипеда высотой 12, шириной 10,длиной 1 : ${volume(1)(10)(12)}`);
let width =volume(9);
let square = width(5);
let volume1 = square(22)
console.log(`Объем параллелепипеда высотой 5, шириной 9,длиной 22 : ${volume1}\n${'-'.repeat(90)}`);
let length = Volume(2);
let volume2 =length(1,4);
let volume3 = length(5,10); 

console.log(`Объем параллелепипедов с одинаковой длиной равной 2 : \na) шириной 1, высотой 4 : ${volume2}\n
б)Шириной 5, высотой 10 : ${volume3}\n${'-'.repeat(90)}`);

//7
let userAnswer= prompt("1)left;2)right;3)up;4)down;5)end","")
let tmp = +userAnswer;

function *generateSequenceL(temp){
    yield temp-1;
    yield temp-2;
    yield temp-3;
    yield temp-4;
    yield temp-5;
    yield temp-6;
    yield temp-7;
    yield temp-8;
    yield temp-9;
    yield temp-10;
}
function *generateSequenceR(temp){
    yield temp+1;
    yield temp+2;
    yield temp+3;
    yield temp+4;
    yield temp+5;
    yield temp+6;
    yield temp+7;
    yield temp+8;
    yield temp+9;
    yield temp+10;
}
let x=0,y=0;
let flag =false;
while(tmp!=5){
    switch(tmp){
        case 1:{
            let generator = generateSequenceL(x);
            let temp = generator.next();
            console.log(`Шаги влево: `);
            while(!temp.done){
                x=temp.value
                console.log(`X : ${x} , Y : ${y}`);
                temp=generator.next();
            }
            console.log(`${'-'.repeat(90)}`);
            break;
        }
        case 2:{
            let generator = generateSequenceR(x);
            let temp = generator.next();
            console.log(`Шаги вправо :`);
            while(!temp.done){
                x=temp.value
                console.log(`X : ${x} , Y : ${y}`);
                temp=generator.next();
            }
            console.log(`${'-'.repeat(90)}`);
            break;
        }
        case 3:{
            let generator = generateSequenceR(y);
            let temp = generator.next();
            console.log(`Шаги вверх : `);
            while(!temp.done){
                y=temp.value
                console.log(`X : ${x} , Y : ${y}`);
                temp=generator.next();
            }
            console.log(`${'-'.repeat(90)}`);
            break;
        }
        case 4:{
            let generator = generateSequenceL(y);
            let temp = generator.next();
            console.log(`Шаги вниз : `);
            while(!temp.done){
                y=temp.value
                console.log(`X : ${x} , Y : ${y}`);
                temp=generator.next();
            }
            console.log(`${'-'.repeat(90)}`);
            break;
        }
        case 5:{
            break;
        }
        default:{
            alert("Введите корректное значение: ")
            break;
        }
    }
    userAnswer= prompt("1)left;2)right;3)up;4)down;5)end","");
    tmp = +userAnswer;
}

