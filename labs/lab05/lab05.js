//1
class Product{
    id
    size
    color
    price
    sale
    constructor(id,size,color,price,sale=0){
        this.id=id;
        this.size=size;
        this.color=color;
        this.price=price;
        this.sale=sale;
    }
}
/* 
    2.Реализуйте итератор для объекта products для доступа к каждому товару.
*/
class ProductIterator extends Object{
    constructor(object){
        super();
        Object.assign(this,object);
    }
    [Symbol.iterator](){
        const values = Object.values(this);
        let index=-1;
        return {
            next(){
                return{
                    value: values[++index],
                    done: index>=values.length
                }
            }
        }
    }
}


const Shoes = new ProductIterator({
    sandals:[
        new Product(1,30,"red",42),
        new Product(2,32,"white",39),
        new Product(3,53,"green",50),
        new Product(4,21,"yellow",22),
    ],
    sneakers:[
        new Product(1,23,"red",12),
        new Product(2,43,"white",32),
        new Product(3,35,"gray",62),
    ],
    boots:[
        new Product(1,32,"green",22),
        new Product(2,22,"purple",12),
        new Product(3,52,"red",32),
    ],
})


const products=new ProductIterator({
    shoes:Shoes
})
/*
    4.Каждый товар (пара обуви) из предыдущей задачи представляет собой однотипные объекты. 
    Учитывая это, создайте объект товара с помощью new, при этом свойства «id», «цвет» и «размер» 
    должны быть доступны только для чтения, свойство «id» не может быть удалено. 
*/
for(let tmp of products){
    console.log(tmp);
    for(let temp of tmp){
        console.log(temp);
        for(let t of temp){
            console.log(t);
            Object.defineProperty(t,"size",{
                enumerable:true,    //перечисление
                writable:false,     //изменение
                configurable:true   //удаление
            });
            Object.defineProperty(t,"color",{
                enumerable:true,
                writable:false,
                configurable:true
            });
            Object.defineProperty(t,"id",{
                enumerable:true,
                writable:false,
                configurable:false
            });
        }   
    }
}


console.log(`${'-'.repeat(29)}проверка на то работают ли флаги${'-'.repeat(29)}`);
console.log(`${'-'.repeat(29)}изменение размера${'-'.repeat(29)}`);
console.log(products.shoes.sandals[0]);
products.shoes.sandals[0].size=1;
console.log(products.shoes.sandals[0]);
console.log(`${'-'.repeat(29)}изменение цвета${'-'.repeat(29)}`);
console.log(products.shoes.sandals[0]);
products.shoes.sandals[0].color="black";
console.log(products.shoes.sandals[0]);
console.log(`${'-'.repeat(29)}изменение id${'-'.repeat(29)}`);
console.log(products.shoes.sandals[0]);
products.shoes.sandals[0].id=142;
console.log(products.shoes.sandals[0]);

/*
    3.Реализуйте фильтр обуви по цене в заданном диапазоне, по заданному размеру, по заданному цвету. 
    Выведите номера товаров, соответствующих заданному условию (фильтру).
*/
function filtrationByPrice(priceFrom,priceTo){
    for(let tmp of products){
        console.log(tmp);
        for(let temp of tmp){
            console.log(temp);
            for(let t of temp){
                if(t.price>=priceFrom&&t.price<=priceTo){
                    console.log(t.id);       
                }
            }
        }
    }
}
function FiltrationBySize(sizeFrom,SizeTo){
    for(let tmp of products){
        console.log(tmp);
        for(let temp of tmp){
            console.log(temp);
            for(let t of temp){
                if(t.size>=sizeFrom&&t.size<=SizeTo){
                    console.log(t.id);       
                }
            }
        }
    }
}
function FiltrationByColor(Color){
    for(let tmp of products){
        console.log(tmp);
        for(let temp of tmp){
            console.log(temp);
            for(let t of temp){
                if(t.color==Color){
                    console.log(t.id);       
                }
            }
        }
    }
}

console.log(`${'-'.repeat(29)}фильтрация по цене${'-'.repeat(29)}`);
filtrationByPrice(12,32);
console.log(`${'-'.repeat(29)}фильтрация по цвету${'-'.repeat(29)}`);
FiltrationByColor("red");
console.log(`${'-'.repeat(29)}фильтрация по размеру${'-'.repeat(29)}`);
FiltrationBySize(40,62);

/*
    5.Добавьте в описание товара новые свойства: «скидка» и «конечная стоимость» (стоимость с учетом скидки).
    Добавьте геттер и сеттер для свойства «конечная стоимость», учитывая то, что свойства «скидка» и «конечная стоимость» взаимозависимые.
*/
let shoes1 = new Product(1,2,"black",32);
Object.defineProperty(shoes1, "finalCost", {
    get: function() {
        return this.price - (this.price * this.sale / 100);
    },
    
    set: function(value) {
        this.sale=value;
    }
});
shoes1.finalCost=20;
console.log(`${'-'.repeat(29)}Цена со скидкой${'-'.repeat(29)}`);
console.log(shoes1.finalCost);


