const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m

const urlParams = new URLSearchParams(queryString);

const username = urlParams.get('username')
if (urlParams.get("username")!==null) {
    console.log(username);
    document.querySelector(".name").textContent = "Ваше имя: " + username
    // делаем что-то с параметром username
} else {
    document.querySelector(".name").textContent = "Вы не ввели имя"
    // делаем что-то другое, если параметра username нет
}


const useremail = urlParams.get('useremail')
if (urlParams.get("useremail")!==null) {
    console.log(username);
    document.querySelector(".email").textContent = "Ваш email: " + useremail
} else {
    document.querySelector(".email").textContent = "Вы не ввели email"
}
const beer = urlParams.get('beer')
console.log(beer);
document.querySelector(".beer").textContent = "Ваш выбор пивка: " + beer


const box = urlParams.get('box')
const box1 = urlParams.get('box1')
const box2 = urlParams.get('box2')
const box3 = urlParams.get('box3')
const box4 = urlParams.get('box4')

//Проверка на присутствие пременной в странице
if (urlParams.get('box') != null) {
    console.log(box);
    document.querySelector(".box").textContent = "ㅤCorona"
}
else{
    document.querySelector(".box").textContent = ""
}
if (urlParams.get('box1') != null) {
    console.log(box1);
    document.querySelector(".box1").textContent = "ㅤAlivaria"
}
if (urlParams.get('box2') != null) {
    console.log(box2);
    document.querySelector(".box2").textContent = "ㅤWeihenstephaner"
}
if (urlParams.get('box3') != null) {
    console.log(box3);
    document.querySelector(".box3").textContent = "ㅤPaulaner"
}
if (urlParams.get('box4') != null) {
    console.log(box4);
    document.querySelector(".box4").textContent = " Жигулёвское"
}

if((urlParams.get('box') == null)&&(urlParams.get('box1') == null)&&(urlParams.get('box2') == null)&&(urlParams.get('box3') == null)&&(urlParams.get('box4') == null)){
    document.getElementById('brand').style.display = 'none';
}

const img = urlParams.get('img')
if (urlParams.get("img")!=="") {
    console.log(img);
    document.querySelector(".img").textContent = "Вы прекрепили фотографию, спасибо мы постараемся подобрать лучшее для наших клиентов "
    document.getElementById('again').style.display = 'none';// скрыть или показать кнопку
} else {
    document.querySelector(".img").textContent = "Вы не прекрепили фотографию, вы можете это сделать заполнив форму заново. Это поможет нам улучшить сервис"
    document.getElementById('again').style.display = 'block';
}
const textarea = urlParams.get('textarea')
if (urlParams.get("textarea")!=="") {
    console.log(textarea);
    document.querySelector(".textarea").textContent = "Ваше пожелание: " + textarea
} else {
    document.querySelector(".textarea").textContent = "Вы не захотели что-то желать"
}

const color= urlParams.get('color')
console.log(color);
document.querySelector(".color").textContent = "Вы выбрали цвет бутылки: " + color+", отличный выбор !"






// const username = urlParams.get('username')
// console.log(username);

// shirt

// const color = urlParams.get('color')
// console.log(color);
// // blue
//
// const newUser = urlParams.get('newuser')
// console.log(newUser);
// // empty string

//document.body.innerText="Ваше имя: " + username
