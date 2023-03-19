function clearAllFormInputs() {
    const form = document.getElementById("form");
    const inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        input.value = "";
    }
    const textarea = document.getElementById("ta");
    textarea.value = "";
}
