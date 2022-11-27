//№1
let maxMessage= 40;
let userMessage=prompt("Введите комментарий",'');
function verification(maxMessage,userMessage){
    if (maxMessage==userMessage){
        return false;
    }
    return true;
};
let test=verification(maxMessage,userMessage.length);
let words = userMessage.split(' ');
if (test){
    for(let a=0;a<words.length;a++){
        if(words[a].includes('кот'))
        {
            words[a]='*';
        }
        else if(words[a].includes('собак')){
            words[a]=words[a][0].toUpperCase()+words[a].slice(1);    
        }
        else if (words[a]=='пес'){
            words[a]='Многоуважаемый пес';
        }
    }
}
else{
    alert("длина комментария больше максимальной длины комментария")
}
alert(words.join(' '));
//№2
let userAnswer=prompt("Введите день недели(например 1-пн)",'');
let days ={
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб",
    7: "вс",
};
for(let day in days){
    if(day==userAnswer)
        alert(days[day]);
}
let counter=0;
for(let day in days){
    if(!(day%2==0)){
        counter++;
        console.log(`${days[day]},${day}`)
    } 
}
console.log(`количество нечетных дней:${counter}`);
//№3


let button ={
    width:"66px",
    height:"77px",
    background:"gray"
};
let text={
    color:"red",
    size:"11px",
    Font:"'Times New Roman', Times, serif"
};
let links={
    color:"greenyellow"
};
let back={
    shadow:"10px"
};
backgroundcolor={
    background:"yellow"
};

Object.assign(button,text);
Object.assign(links,text);
Object.assign(back,backgroundcolor);

document.getElementById("page").style.background=back.background;

document.getElementById("btt").style.width=button.width;
document.getElementById("btt").style.height=button.height;
document.getElementById("btt").style.background=button.background;
document.getElementById("btt").style.color=button.color;

document.getElementById("inform").style.color=links.color;
document.getElementById("inform").style.size=links.size;
document.getElementById("inform").style.font=links.Font;



//№4
let set = new Set(["яблоко","мандарин","апельсин","груша"]);
let finish=false;
while(!finish){
    let answer=prompt("добавить, удалить, проверить наличие,количество,вывод всех фруктов в наличии,завершить?","");
    switch(answer){
        case "добавить":{
            let value=prompt("какой фрукт необходимо добавить?",''); 
            set.add(value);
            break;
        }
        case "удалить":{
            let value=prompt("какой фрукт необходимо удалить?");
            if (set.delete(value)){
                alert("фрукт удален");
                break;
            }
            alert(`множество не содержит ${value}`);
            break;
        }
        case "проверить":{
            let value=prompt("какой фрукт необходимо искать?");
            if (set.has(value)){
                alert(`множество содержит ${value}`);
                break;
            }
            alert(`множество не содержит ${value}`);
            break;
        }
        case "количество":{
            alert(`Множество содержит ${set.size} фруктов`);
        }
        case "вывод":{
            for (let fruit of set)
            console.log(fruit);
            console.log('---------------------------');
            break;
        }
        case "завершить":{
            finish=true;
            break;
        }
    }
}

//№5
let banana={
    name:"банан",
    amount:10,
    price:100,
}

let garlic={
    name:"чеснок",
    amount:6,
    price:53,
}

let map = new Map([
    [1,banana],
    [2,garlic],
    [3,banana],
]);
    
id = 4;
let end=false;
while(!end){
    let answerOfUser=prompt("добавить,удалить,изменить количество товара,вывод всего товара,количество позиций и сумма,завершить","");
    answerOfUser=answerOfUser.toLowerCase();    
    switch(answerOfUser){
        case "вывод":{
            console.log(`в вашей корзине находятся следующие товары: `)
            map.forEach((value, key, map) => {
                console.log(`id: `+key);
                for (let inf in value){
                console.log(inf+': '+value[inf]);
                }
            });
            
            break;
        }
        case "добавить":{
            let value=prompt("какой товар необходимо добавить,его количество и цена?");
            let words=value.split(' ');
            information={
                name:words[0],
                amount:words[1],
                price:words[2],
            };
            map.set(id,information);
            id++;
            break;
        }
        case "удалить":{
            let value=prompt("какой id необходимо удалить");
            map.delete(+value);
            for(let key of map.keys()){
                if (key>(+value))
                {
                    let temp =map.get(key);
                    map.delete(key);
                    key--;
                    map.set(key,temp);
                }
            }
            break;
        }
        case "изменить":{
            let key=prompt("Укажите id товара, количество которого необходимо изменить","")
            let tmp=map.get(+key);
            let count=prompt("Новое количество:");
            tmp.amount=(+count);
            map.set(+key,tmp);
            break;
        }
        case "количество":{
            let tmp=map.size;
            let sum=0;
            map.forEach((value, key, map) => {
                for (let inf in value){
                    if (inf=="price"){
                        sum+=+value[inf];
                    }
                }
            });
            console.log(`количество:${tmp},общая сумма покупок:${sum}`);
            break;
        }
        case "завершить":{
            end=true;
            break;
        }
    }
}

