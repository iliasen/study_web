// const elem = Object.create({},{
//     name: {
//         value: "VlaDICK", enumerable: true, writable:true, configurable: true//writable - позволяет преписать поля объекта а сonfigurable удалить
//     },
//     Dr:{value: 2003,enumerable: true,writable:true// enumerable - позволяет показывать ключи (ние цикл for который показыват какие клюди у нас имеются)
//     },
//     age:{
//         get() {
//             return new Date().getFullYear() - this.Dr
//         },
//         set(value){
//             document.body.style.background = 'red'
//             console.log("Your set age: ",value)
//         }
//     }
// })

// elem.name = "Dick"
// for(let i in elem){
//     console.log('Key',i,":", elem[i])
// }


let users = []; // создаем пустой массив для хранения объектов с данными формы

const form = document.getElementById("form");
form.addEventListener("submit", callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target); // создаем объект FormData из элемента формы
    const myObject = {};
    myFormData.forEach((value, key) => { // итерируем по ключам и значениям FormData
        myObject[key] = value; // добавляем ключи и значения в новый объект
    });
    users.push(myObject);
    console.log(users);
}
for (let i in users) {
    let user = users[i]; // получаем объект по индексу i
    for (let key in user) { // перебираем свойства объекта user
        let value = user[key]; // получаем значение по ключу key
        console.log(key, value); // выводим ключ и значение в консоль
    }
}