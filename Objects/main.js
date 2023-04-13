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
    //console.log(users);

    // получаем элемент с id="myTable"
    let container = document.getElementById("myTable");
// проверяем, есть ли уже таблица внутри него
    let table = container.getElementsByTagName("table")[0];
// если нет, то создаем новую таблицу и добавляем ее в контейнер
    if (!table) {
        table = document.createElement("table");
        container.appendChild(table);
    }
// получаем tbody таблицы или создаем новый, если его нет
    let tbody = table.getElementsByTagName("tbody")[0];
    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }
    let clear_button = container.getElementsByTagName('button')[0];
    if(!clear_button){
         let clear_button = document.createElement('button');
        clear_button.id = "Сlear";
        clear_button.textContent = "Очистить"
        clear_button.onclick=clear
         container.appendChild(clear_button);
        }
    let check_button = container.getElementsByTagName('button')[1];
    if(!check_button){
        let check_button = document.createElement('button');
        check_button.id = "Check";
        check_button.textContent = "Sort"
        container.appendChild(check_button);
    }
// очищаем содержимое tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
// создаем новые строки и ячейки
    let tr = document.createElement('tr');
    let headers = ["ID", "Info"];
    for (let header of headers) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(header));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);

    for (let i = 0; i < users.length; i++) { // перебираем массив с объектами пользователей
        let tr = document.createElement('tr');
        let user = users[i];
        let id = i + 1;
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(id));
        tr.appendChild(td);

        td = document.createElement('td');
        //let info = JSON.stringify(user); // преобразуем объект в строку JSON
        for (let key in user) { // перебираем свойства объекта user
            let value = user[key]; // получаем значение по ключу key
            if (key === "Возраст") {
                value = value + " лет";
            }
            if (value == ""){
                value = "-";
            }
            td.appendChild(document.createTextNode(`${key}` + ": " + `${value}`+", ")); // добавляем текст в ячейку
        }
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
}
for (let i in users) {
    let user = users[i]; // получаем объект по индексу i
    for (let key in user) { // перебираем свойства объекта user
        let value = user[key]; // получаем значение по ключу key
        //console.log(key, value); // выводим ключ и значение в консоль
    }

}

function create() {
    let add = document.getElementById('create');
    add.setAttribute("style",'display:inline')
    let form = add.getElementsByTagName("form")[0];
    if(!form){
        let form = document.createElement("form")
        form.setAttribute("id","add_form")
        let name = document.createElement("label")
        let text = document.createTextNode("Введите имя поля:")
        let input = document.createElement("input")
        input.setAttribute("id","name")
        name.appendChild(text)
        form.appendChild(name)
        form.appendChild(input)

        let name1 = document.createElement("label")
        text = document.createTextNode("Выберите тип поля:")
        name1.appendChild(text)
        form.appendChild(name1)
        let select = document.createElement("select")
        select.setAttribute("id","select")

        let option1 = document.createElement('option');
        option1.setAttribute("value","1")
        option1.appendChild(document.createTextNode("Текст"));
        select.appendChild(option1)

        let option2 = document.createElement('option');
        option2.setAttribute("value","2")
        option2.appendChild(document.createTextNode("Номер"));
        select.appendChild(option2)

        let option3 = document.createElement('option');
        option3.setAttribute("value","3")
        option3.appendChild(document.createTextNode("Дата"));
        select.appendChild(option3)
        form.appendChild(select)

        let button = document.createElement('input')
        button.setAttribute("type","button")
        button.setAttribute("onclick","add()")
        button.setAttribute("value","Отправить")
        form.appendChild(button)
        add.appendChild(form)
    }

}

function add(){
    let div = document.getElementById('create');
    div.setAttribute("style",'display:none')
    let select = document.getElementById("select")
    let container = document.getElementById("input_container")
    let input_name = document.getElementById("name")
    let new_input = document.createElement("input")
    div = document.createElement('div')
    let b = document.createElement('b')

    b.appendChild(document.createTextNode(input_name.value))
    div.appendChild(b)
    new_input.setAttribute("id","add_input")
    new_input.setAttribute("name",input_name.value)
    //console.log("Привкет", select.value)

    switch(select.value) {
        case "1":
            new_input.setAttribute("type", "text");
            break;
        case "2":
            new_input.setAttribute("type", "number");
            break;
        case "3":
            new_input.setAttribute("type", "date");
            break;
        default:
        }

    div.appendChild(new_input)
    container.appendChild(div)
}


function del_call() {
    let add = document.getElementById('call');
    add.setAttribute("style",'display:inline')
    let form = add.getElementsByTagName("form")[0];
    if (!form) {
        let form = document.createElement("form")
        form.setAttribute("id","add_form")
        let name = document.createElement("label")
        let text = document.createTextNode("Введите номер поля для удаления: ")
        let input = document.createElement("input")
        input.setAttribute("id","del_input")
        input.setAttribute('type','number')
        name.appendChild(text)
        form.appendChild(name)
        form.appendChild(input)

        let button = document.createElement('input')
        button.setAttribute("type","button")
        button.setAttribute("onclick","del()")
        button.setAttribute("style","margin:10px")
        button.setAttribute("value","Удалить запись")

        form.appendChild(button)
        add.appendChild(form)
    }

}
function del() {
    let div = document.getElementById('call');
    div.setAttribute("style",'display:none')
    // let form = div.getElementsByTagName('form')
    let input = document.getElementById('del_input')
    users.splice(input.value-1,1)

    // получаем элемент с id="myTable"
    let container = document.getElementById("myTable");
// проверяем, есть ли уже таблица внутри него
    let table = container.getElementsByTagName("table")[0];
// если нет, то создаем новую таблицу и добавляем ее в контейнер
    if (!table) {
        table = document.createElement("table");
        container.appendChild(table);
    }
// получаем tbody таблицы или создаем новый, если его нет
    let tbody = table.getElementsByTagName("tbody")[0];
    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }
// очищаем содержимое tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
// создаем новые строки и ячейки
    let tr = document.createElement('tr');
    let headers = ["ID", "Info"];
    for (let header of headers) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(header));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);

    for (let i = 0; i < users.length; i++) { // перебираем массив с объектами пользователей
        let tr = document.createElement('tr');
        let user = users[i];
        let id = i + 1;
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(id));
        tr.appendChild(td);

        td = document.createElement('td');
        //let info = JSON.stringify(user); // преобразуем объект в строку JSON
        for (let key in user) { // перебираем свойства объекта user
            let value = user[key]; // получаем значение по ключу key
            if (key === "Возраст") {
                value = value + " лет";
            }
            if (value == ""){
                value = "-";
            }
            td.appendChild(document.createTextNode(`${key}` + ": " + `${value}`+", ")); // добавляем текст в ячейку
        }
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
}

function clear(){
    // получаем элемент с id="myTable"
    console.log('DIvvvv')
    let container = document.getElementById('myTable');
    // удаляем все дочерние элементы таблицы
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    //container.innerHTML = " ";
    // обнуляем массив users
    users = [];
}
// document.getElementById("Clear").onclick = clear;