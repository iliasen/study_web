// class User{ // пример класса
//     constructor(fio, name, age, num) {
//         this.fio = fio
//         this.name = name
//         this.age = age
//         this.num = num
//     }
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
    ////если бы создавал через класс
    // const name = myFormData.get("name")
    // const fio = myFormData.get("fio")
    // const age = myFormData.get("age")
    // const num = myFormData.get("num")
    // const myObject = new User(fio,name,age,num)
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





function create() {
    var add = document.getElementById('create');
    var form = document.createElement("form")
    form.setAttribute("id","add_form")
    var name = document.createElement("label")
    var text = document.createTextNode("Введите имя поля:")
    var input = document.createElement("input")
    input.setAttribute("id","name")
    name.appendChild(text)
    form.appendChild(name)
    form.appendChild(input)

    var name1 = document.createElement("label")
    text = document.createTextNode("Выберите тип поля:")
    name1.appendChild(text)
    form.appendChild(name1)
    var select = document.createElement("select")
    select.setAttribute("id","select")

    var option1 = document.createElement('option');
    option1.setAttribute("value","1")
    option1.appendChild(document.createTextNode("Текст"));
    select.appendChild(option1)

    var option2 = document.createElement('option');
    option2.setAttribute("value","2")
    option2.appendChild(document.createTextNode("Цвет"));
    select.appendChild(option2)

    var option3 = document.createElement('option');
    option3.setAttribute("value","3")
    option3.appendChild(document.createTextNode("Дата"));
    select.appendChild(option3)
    form.appendChild(select)

    var button = document.createElement('input')
    button.setAttribute("type","button")
    button.setAttribute("onclick","add()")
    button.setAttribute("value","Отправить")
    form.appendChild(button)

    add.appendChild(form)

}

function add(){
    var div = document.getElementById('create');
    div.setAttribute('dislpay','none')
    var select = document.getElementById("select")
    var form = document.getElementById("form")
    var input_name = document.getElementById("name")
    var new_input = document.createElement("input")
    var div = document.createElement('div')
    var b = document.createElement('b')

    b.appendChild(document.createTextNode(input_name.value))
    div.appendChild(b)
    new_input.setAttribute("id","add_input")
    new_input.setAttribute("name",input_name.value)
    select.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    switch(selectedOption.value) {
        case "1":
            document.getElementById("add_input").setAttribute("type", "text");
            break;
        case "2":
            document.getElementById("add_input").setAttribute("type", "сolor");
            break;
        case "3":
            document.getElementById("add_input").setAttribute("type", "date");
            break;
        default:
        }
    });

    div.appendChild(new_input)
    form.appendChild(div)
}
