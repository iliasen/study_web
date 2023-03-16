function clearAllFormInputs() {
    let form = document.getElementById("form");
    let inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        input.value = "";
    }
}

