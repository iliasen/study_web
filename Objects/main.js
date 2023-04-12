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

    // получаем элемент с id="myTable"
    var container = document.getElementById("myTable");
// проверяем, есть ли уже таблица внутри него
    var table = container.getElementsByTagName("table")[0];
// если нет, то создаем новую таблицу и добавляем ее в контейнер
    if (!table) {
        table = document.createElement("table");
        container.appendChild(table);
    }
// получаем tbody таблицы или создаем новый, если его нет
    var tbody = table.getElementsByTagName("tbody")[0];
    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }
// очищаем содержимое tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
// создаем новые строки и ячейки
    var tr = document.createElement('tr');
    var headers = ["ID", "Info"];
    for (let header of headers) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(header));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);

    for (let i = 0; i < users.length; i++) { // перебираем массив с объектами пользователей
        var tr = document.createElement('tr');
        var user = users[i];
        var id = i + 1;
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(id));
        tr.appendChild(td);

        var td = document.createElement('td');
        //var info = JSON.stringify(user); // преобразуем объект в строку JSON
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
    div.setAttribute("style",'display:none')
    var select = document.getElementById("select")
    var container = document.getElementById("input_container")
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
    container.appendChild(div)
}


function del_call() {
    const trees = ["redwood", "bay", "cedar", "oak", "maple"];
    delete trees[3];
    console.log(3 in trees); // false
    for (let k in trees){
        let l = k
        console.log(k)
    }
    var add = document.getElementById('call');
    add.setAttribute("style",'display:inline')
    var form = add.getElementsByTagName("form")[0];
// если нет, то создаем новую таблицу и добавляем ее в контейнер
    if (!form) {
        var form = document.createElement("form")
        form.setAttribute("id","add_form")
        var name = document.createElement("label")
        var text = document.createTextNode("Введите имя поля: ")
        var input = document.createElement("input")
        input.setAttribute("id","name")
        input.setAttribute('type','number')
        name.appendChild(text)
        form.appendChild(name)
        form.appendChild(input)

        var button = document.createElement('input')
        button.setAttribute("type","button")
        button.setAttribute("onclick","del()")
        button.setAttribute("style","margin:10px")
        button.setAttribute("value","Удалить запись")

        form.appendChild(button)
        add.appendChild(form)
    }

}
function del(k) {
    var div = document.getElementById('call');
    div.setAttribute("style",'display:none')
}