function clearAllFormInputs() {
    const form = document.getElementById("form");
    const inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        input.value = "";
    }
}


// const form = document.getElementById("form");
//     form.addEventListener("submit",function (event){
//         event.preventDefault()
//         const formValues = new FormData(event.currentTarget)
//         localStorage.setItem("formValues", JSON.stringify(event.currentTarget))
//         console.log(event.currentTarget)
//     })