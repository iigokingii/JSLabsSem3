// //№1
// let r=prompt("Введите радиус круга:",'');
// let radius = parseInt(r);
// console.log(`radius:${radius}`);
// //func declaration
// function square(r){
//     let result=Math.PI*Math.pow(r,2);
//     return result;
// }
// let Square = square(radius);
// console.log(`square:${Square}`);
// //func expression
// var Diameter = function (r){
//     let result=r*2
//     return result;
// }
// console.log(`diameter:${Diameter(r)}`);
// //arrow func
// let circumference=(r)=>2*Math.PI*r;
// console.log(`circumference:${circumference(r)}`);

// //№2
// function funcWithThreeOptions(option1="HI",option2,option3){
//     console.log(`option1:${option1}`);
//     return option1+option2+option3;
// }
// let option3=prompt("введите имя ","Имя");
// let option2=", ";
// let stroke =funcWithThreeOptions(undefined,option2,option3);
// console.log(`funcWithThreeOptions:${stroke}`);

// //№3
// function Counter(){
//     let counter=0;
//     let student=prompt("Введите имя студента",'');
//     counter++;
//     while(student!=""){
//         let student=prompt("Введите имя студента",'');
//         if (student==""){
//             break;
//         }
//         counter++;
//     }
//     console.log(`количество присутствующих студентов:${counter}`);
// }
// Counter();
// //№4
// let alphabet=26;
// let probabilityOfLetters=Math.pow(alphabet,5);
// let numbers=10;
// let probabilityOfNumbers=Math.pow(numbers,3);
// let time =3;
// let probability=probabilityOfLetters*probabilityOfNumbers;

// let timeInSec=probability*time;
// console.log(`timeInSec:${timeInSec}`);

// let timeInMin = Math.floor(timeInSec/60);
// timeInSec-=timeInMin*60;
// console.log(`timeInSec:${timeInSec}`);

// let timeInhours = Math.floor(timeInMin/60);
// timeInMin-=timeInhours*60;
// console.log(`timeInMin:${timeInMin}`);

// let timeInDays=Math.floor(timeInhours/24);
// timeInhours-=timeInDays*24;
// console.log(`timeInhours:${timeInhours}`);

// let timeInMounthes=Math.floor(timeInDays/30);
// timeInDays-=timeInMounthes*30;
// console.log(`timeInDays:${timeInDays}`);

// let timeInYears=Math.floor(timeInMounthes/12);
// timeInMounthes-=timeInYears*12;
// console.log(`timeInMounthes:${timeInMounthes}`);

// console.log(`timeInYears:${timeInYears}`);
// console.log(`${timeInYears} лет ${timeInMounthes} месяцев ${timeInDays} дней ${timeInhours} часов ${timeInMin} минут ${timeInSec} секунд`)
// //№5
// let data =prompt("введите данные для перевода","");
// verification(data);
// function verification(data){
//     let tmp=0;
//     let iter=0;
//     let a=0;
//     let numbers=['0','1','2','3','4','5','6','7','8','9'];
//     let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
//     let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
//     let dot = '.';
//     let integer;
//     let float;
//     let string;
//     while(tmp!=data.length-a){
//         while(iter!=10){
//             if(numbers[iter]==data[tmp]){
//                 integer=true;
//                 iter=0;
//                 tmp++;
//             }
//             else if (data[iter]==dot){
//                 integer=false;
//                 float=true;
//                 tmp++;
//                 a++;
//                 break;    
//             }
//            iter++;
//         }
//         iter=0;
//         while(iter!=33){
//             if(data[tmp]==arr_ru[iter]||data[tmp]==arr_RU[iter]){
//                 float =false;
//                 integer=false;
//                 string=true;
//                 break;
//             }
//             iter++;
//         }
//         break;
//     }
//     if(integer){
//         parseInt(data);
//         let hex=Number(data).toString(16);
//         console.log(`строка в HEX :${hex.toUpperCase()}`);
//     }
//     if(float){
//         console.log(`Округление в меньшую сторону:${Math.floor(data)}, Округление к ближайшему числу:${Math.round(data)}
//         , Округление в большую сторону:${Math.ceil(data)}`);
//     }
//     if (string){
//         console.log(`Текст в верхнем регистре:${data.toUpperCase()}, Текст в нижнем регистре:${data.toLowerCase()}`)
//     }
// }
//№6
let correct_answer= "облако";
let incorrect_position= [];
let amount=0;
let question = prompt(`Как пишется слово обл*ко`, `введите ваш ответ`);
question=question.toLowerCase();
for(var i=0; i<correct_answer.length; i++){
    if(correct_answer[i]!=question[i]){
    incorrect_position[amount]=i+1;
    amount+=1;
    }
}
if(incorrect_position.length==0){
alert(`Вы правильно ввели слово`)
} 
else {
alert(`Вы допустили ошибку в слове в позициях: ${incorrect_position}`)
}
// //№7
// let k1=prompt("Введите длину катета 1:",'');
// k1=parseInt(k1);
// let k2=prompt("Введите длину катета 2: ","");
// k2=parseInt(k2);
// let hypotenuse=Math.sqrt(Math.pow(k1,2)+Math.pow(k2,2));
// console.log(``);
// let square1=(k1,k2)=>0.5*k1*k2;
// let perimeter=function(k1,k2,hypotenuse){
//     return  k1+k2+hypotenuse;
// }
// let cos=k1/hypotenuse;
// let sin=k2/hypotenuse;
// let tg = k2/k1;
// let ctg =k1/k2;
// let height=(square1,hypotenuse)=>2*square1/hypotenuse;
// console.log(`k1:${k1}, k2:${k2}, H:${hypotenuse}, Square:${square1(k1,k2)}, perimeter:${perimeter(k1,k2,hypotenuse)}, 
// cos:${cos}, sin:${sin}, tg:${tg}, ctg:${ctg}, height:${height(square1(k1,k2),hypotenuse)}`);