$('#buttonRu').click(function(){translateRu();});

var rus = []
var eng = []
function translateRu(){

    var sourceText = $('textarea#field_1').val();
    var sourceLang = 'ru';
    var targetLang = 'en';
    console.log(sourceText);

    rus.push(sourceText)

    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    //console.log(url);

    $.getJSON(url, function(data) {
        $('textarea#field_2').val(data[0][0][0]);
    });
}

$('#buttonEn').click(function(){translateEn();});

function translateEn(){

    var sourceText = $('textarea#field_2').val();
    var sourceLang = 'en';
    var targetLang = 'ru';
    console.log(sourceText);
    eng.push(sourceText)
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    //console.log(url);

    $.getJSON(url, function(data) {
        $('textarea#field_1').val(data[0][0][0]);
    });
}


document.addEventListener('DOMContentLoaded', function () { // При загрузке документа
    let sel = document.querySelector('.select-filter'); // Получаем селект
    let buttons = document.querySelectorAll('.button-value'); // Получаем кнопки с классом
    buttons.forEach(function (c) { // Для каждой кнопки
        c.onclick = function () { // Слушаем нажатие
            sel.value = c.innerText; // Если нажата, то выбирает тот option, который в тексте кнопки.
        }
    })
})

var select = document.getElementById("Select_1");
select.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    switch(selectedOption.value) {
        case "1":
            document.getElementById("field_1").setAttribute("style", "background-color: blue;color: darkorange;font-family: Segoe Print;");
            break;
        case "2":
            document.getElementById("field_1").setAttribute("style", "background-color: green;color: white;font-family: Times New Roman;");
            break;
        case "3":
            document.getElementById("field_1").setAttribute("style", "background-color: yellow;color: black;font-family: Arial;");

            break;
        default:
    }
});

var select = document.getElementById("Select_2");
select.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    switch(selectedOption.value) {
        case "1":
            document.getElementById("field_2").setAttribute("style", "background-color: blue;color: darkorange;font-family: Segoe Print;");
            break;
        case "2":
            document.getElementById("field_2").setAttribute("style", "background-color: green;color: white;font-family: Times New Roman;");
            break;
        case "3":
            document.getElementById("field_2").setAttribute("style", "background-color: yellow;color: black;font-family: Arial;");

            break;
        default:
    }
});


    // function createTable() {
    //
    //     document.getElementById("myTable").focus();
    //     var table = document.createElement('table');
    //     var tbody = document.createElement('tbody');
    //     while (tbody.firstChild) {
    //         tbody.removeChild(tbody.firstChild);
    //     }
    //     for (var i = 0; i < 1; i++) {
    //         var tr = document.createElement('tr');
    //
    //         for (var j = 0; j < 1; j++) {
    //             var td = document.createElement('td');
    //             td.appendChild(document.createTextNode('Русский'));
    //             tr.appendChild(td);
    //         }
    //         for (var j = 0; j < 1; j++) {
    //             var td = document.createElement('td');
    //             td.appendChild(document.createTextNode('English'));
    //             tr.appendChild(td);
    //         }
    //         tbody.appendChild(tr);
    //     }
    //
    //     var list = rus.join("<br>");
    //     var last = eng.join("<br>");
    //     for (var i = 0; i < 1; i++) {
    //         var tr = document.createElement('tr');
    //
    //         for (var j = 0; j < 1; j++) {
    //             var td = document.createElement('td');
    //             td.innerHTML = list;
    //             tr.appendChild(td);
    //         }
    //         tbody.appendChild(tr);
    //         for (var j = 0; j < 1; j++) {
    //             var td = document.createElement('td');
    //             td.innerHTML = last;
    //             tr.appendChild(td);
    //         }
    //         tbody.appendChild(tr);
    //     }
    //     table.appendChild(tbody);
    //     document.getElementById('myTable').appendChild(table);
    // }

var button = document.getElementById("create");
button.addEventListener("click", createTable)


function createTable() {
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
    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 1; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('Русский'));
            tr.appendChild(td);
        }
        for (var j = 0; j < 1; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode('English'));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    var list = rus.join("<br>");
    var last = eng.join("<br>");
    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 1; j++) {
            var td = document.createElement('td');
            td.innerHTML = list;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        for (var j = 0; j < 1; j++) {
            var td = document.createElement('td');
            td.innerHTML = last;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}