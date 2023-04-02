$('#buttonRu').click(function(){translateRu();});

function translateRu(){

    var sourceText = $('textarea#field_1').val();
    var sourceLang = 'ru';
    var targetLang = 'en';
    console.log(sourceText);

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
        // Делайте что-то для всех остальных значений
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
        // Делайте что-то для всех остальных значений
    }
});