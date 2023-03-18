const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m

const urlParams = new URLSearchParams(queryString);

const username = urlParams.get('username')
console.log(username);
// shirt

// const color = urlParams.get('color')
// console.log(color);
// // blue
//
// const newUser = urlParams.get('newuser')
// console.log(newUser);
// // empty string

//document.body.innerText="Ваше имя: " + username

document.querySelector(".name").textContent = "Ваше имя: " + username