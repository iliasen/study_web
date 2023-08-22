let value
let mass = []

function getFunc(e) {
    e.preventDefault();
    value = document.getElementById('value').value;
    console.log(value);

    for(let i = 1; i <= value; i++)
    if(i % 3 === 0){
        mass.push("Fizz")
        }else if(i % 5 === 0){
        mass.push("Buzz")
            }else mass.push(i)

    const add = document.getElementById('new')
    add.innerHTML = "Результаты формы: \n" + mass.slice()
}

