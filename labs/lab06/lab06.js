//1
let square= {
    color:"yellow",
    border:"2px , solid, black",
} 

let square1 ={
    name:"Маленький квадрат",
    width:"10px",
    height:"10px"
}
square1._proto_=square;
let square2 ={
    name:"Большой квадрат",
    width:"30px",
    height:"30px",
}
square2._proto_=square;

let circle1={
    name:"Зеленый круг",
    border:"2px , solid, black",
    color:"green",
    radius:"20px",
}
let circle2={
    name:"Белый круг",
    border:"2px , solid, black",
    color:"white",
    radius:"20px",
}
let triangle1={
    color:"white",
    edge:"20px",
    name:"треугольник с 1 линией",
    countOfLines:1,
}
let triangle2={
    color:"white",
    edge:"20px",
    name:"треугольник с 3 линиями",
    countOfLines:3,
}
let figures =[square1,square2,circle1,circle2,triangle1,triangle2];

for (let temp of figures){
    if(temp.name=="Зеленый круг"){
        console.log("Свойства отличающие зеленый круг:")
        for(let t in temp){
            if(t!="name")
            console.log(`${t}:${temp[t]}`);
        }
        console.log('-'.repeat(29));
    }
    else if(temp.name=="треугольник с 3 линиями"){
        console.log("свойства, которые описывают фигуру «треугольник с тремя линиями»:")
        for(let t in temp){
            console.log(`${t}:${temp[t]}`);
        }
        console.log('-'.repeat(29));
    }
    else if(temp.name=="Маленький квадрат"){
        console.log("есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры?");
        if(temp.hasOwnProperty("color")){
            console.log("Да");
        }
        else{
            console.log("нет");
        }
        console.log('-'.repeat(29));
    }
}
//2

let products = new Array();

class Product{
  id
  price
  name
  img
  background
  constructor(id,price,name,img,background){
    this.id=id;
    this.price=price;
    this.name=name;
    this.img=img;
    this.background=background;
  }
  Add(){
    let div = document.createElement("div");
    div.className="blockForProduct";
    div.style.marginTop="80px"
    div.style.width = "150px";
    div.style.height="260px";
    div.style.textAlign="center";
    div.style.background=this.background;

    Products.append(div); // в конец
    Products.style.width="100%";
    Products.style.display="flex";
    Products.style.flexWrap="wrap";

    let img = document.createElement("img");
    img.src = this.img;
    img.style.width = "90%";
    img.style.height = "100px";
    img.style.paddingTop="20px";
    div.prepend(img); //в начало

    let p= document.createElement("p");
    p.innerHTML = this.name;
    p.style.fontSize = "20px";
    p.display="inline";
    p.style.fontStyle="italic";
    div.append(p);

    let p2 = p.cloneNode(true); 
    p2.innerHTML = this.price + " BYN";
    p2.style.fontSize = '12px'; 
    div.append(p2); 

    let button = new Button(150,90,"buy","blue"); 
    div.append(button.addButton()); 

  }
  delete(id){
    let arr = document.getElementsByClassName('blockForProduct'); // получаем массив с блоками с товарами
    
    for(let x = 0; x < arr.length; x++){
        if((x+1) == id){
            arr[x].remove();
        }
    }

    let size = Object.getOwnPropertyNames(this); // получаем массив с названиями свойств объекта
    for(let i = 0; i < size.length; i++){
        delete this[size[i]];
    }
}
}
class Button{
    width
    height
    text
    background
    constructor(width,height,text,background){
        this.width=width;
        this.height=height;
        this.text=text;
        this.background=background;
    }
    addButton(){
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '2px solid black';
        button.style.marginLeft="10px";
        button.style.borderRadius = '5px';
        return button;
    }
    deleteButton(){
        let button = document.getElementsByTagName('button');
        button.remove();
    }
    setWidth(w){
        this.width=w;
    }
    setHeight(h){
        this.height=h;
    }
    setBackground(backCol){
        this.background=backCol;
    }
    setText(t){
        this.text=t;
    }
}
let ButtonForCart = new Button(150,75,"Cart","blue");
document.body.prepend(ButtonForCart.addButton());
let newbutton = new Button(200,150,"New cart ","red");
document.body.prepend(newbutton.addButton());
let neBut = new Button(300,150,"CART FOR TASK","red");
document.body.prepend(neBut.addButton());
let first = new Product(1, 10000,'Lenovo', "images.jpg", 'white');
first.Add();

let second = new Product(2, 15000,'Samsumg', 'images.jpg', 'white');
second.Add();

let third = new Product(3, 20000,'Lenovo', "images.jpg", 'white');
third.Add();

let fourth = new Product(4, 25000,"Acer", "images.jpg", 'white');
fourth.Add();

let fiveth = new Product(5, 30000,'MacBook Pro 15', "images.jpg", 'white');
fiveth.Add();

let sixth = new Product(6, 35000,'Xiaomi', "images.jpg", 'white');
sixth.Add();

//first.delete(5);
OddBackgr();
function OddBackgr(){
    let massive = document.getElementsByClassName("blockForProduct");
    for(let i = 0 ; i < massive.length; i++){
        if((i+1) % 2 ==1 || (i+1) == 1 || (i+1) == 0){
            massive[i].style.background = 'gray';
        }
    }
}




