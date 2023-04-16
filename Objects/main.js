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
        if (key === 'Возраст') { // если ключ равен 'Возраст'
            value = Number(value); // преобразуем значение в число
        }
        myObject[key] = value; // добавляем ключи и значения в новый объект
    });
    ////если бы создавал через класс
    // const name = myFormData.get("name")
    // const fio = myFormData.get("fio")
    // const age = myFormData.get("age")
    // const num = myFormData.get("num")
    // const myObject = new User(fio,name,age,num)
    users.push(myObject)
    console.log(users);
    create_table()
}
function create_table() {
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
        clear_button.id = "clear";
        clear_button.textContent = "Очистить"
        clear_button.onclick=clear
        container.appendChild(clear_button);
    }

    let find_button = container.getElementsByTagName('button')[1];
    if(!find_button){
        let find_button = document.createElement('button');
        find_button.id = "find";
        find_button.textContent = "Sort"
        find_button.onclick=find
        container.appendChild(find_button);
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
            if (value === ""){
                value = "-";
            }
            td.appendChild(document.createTextNode(`${key}` + ": " + `${value}`+", ")); // добавляем текст в ячейку
        }
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
}

let popup = document.querySelector('#create')

function create() {
    document.querySelector('#create_button').addEventListener('click', () => {
        popup.style.cssText = `
  display: block;
  opacity: 0;`
        setTimeout(() => {
            popup.style.opacity = '1'
        }, 1)
    })


    window.addEventListener('click', e => {
        if(e.explicitOriginalTarget === popup) {
            popup.style.opacity = 0
            setTimeout(() => {
                popup.style.display = 'none'
            }, 301)
        }
    })

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
    if(input_name.value !== ""){
    b.appendChild(document.createTextNode(input_name.value))
    div.appendChild(b)
    new_input.setAttribute("id","add_input")
    new_input.setAttribute("name",input_name.value)

    switch(select.value) {
        case "1":
            new_input.type="text"
            new_input.size=15
            break;
        case "2":
            new_input.type="number"
            new_input.setAttribute("style","width: 9.6em")
            break;
        case "3":
            new_input.type="date"
            break;
        default:
        }

    div.appendChild(new_input)
    container.appendChild(div)
    }
    else {
        alert("Вы не указали имя поля !")
    }
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

   create_table()
}

function clear() {
    // получаем элемент с id="myTable"
    let container = document.getElementById('myTable');
    // удаляем все дочерние элементы таблицы
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    // обнуляем массив users
    users = [];
    let container_find = document.getElementById('result')
    while (container_find.firstChild) {
        container_find.removeChild(container_find.firstChild)
    }
}
function find() {
    let max = 0;
    let min = Infinity; // бесконечность
    for (let user of users) {
        let age = user['Возраст']; // получаем возраст текущего объекта
        if (age > max) {
            max = age;
        }
        if (age < min) {
            min = age;
        }
    }
    let min_max = [max, min];
    console.log(max);
    console.log(min);

    let container = document.getElementById('result')
    container.setAttribute("style",'display:inline')
    let table = container.getElementsByTagName("table")[0];
    if (!table) {
        table = document.createElement("table");
        container.appendChild(table);
    }
    let tbody = table.getElementsByTagName("tbody")[0];
    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }
    let exit_button = container.getElementsByTagName('button')[0];
    if(!exit_button){
        let exit_button = document.createElement('button');
        exit_button.textContent = "X"
        exit_button.setAttribute('style','border-radius: 20px')
        exit_button.onclick=exit
        container.appendChild(exit_button);
    }

// очищаем содержимое tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    let tr = document.createElement('tr');
    let headers = ["max", "min"];
    for (let header of headers) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(header));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);

    let tr1 = document.createElement('tr');

    for (let i of min_max) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(i));
        tr1.appendChild(td);
    }
    tbody.appendChild(tr1);
}
function exit(){
    let container = document.getElementById('result')
    container.setAttribute("style",'display:none')}