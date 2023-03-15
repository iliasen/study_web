function clearAllFormInputs() {
    let form = document.getElementById("form");
    let inputs = form.getElementsByTagName("input");
    for (let input of inputs) {
        input.value = "";
    }
}

let form = document.getElementById("Form");

// Add an event listener for when the user submits the form
form.addEventListener("submit", function(event) {
    // Prevent the default browser behavior of reloading the page
    event.preventDefault();

    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // Open a connection to a server-side script that will handle the form data
    xhr.open("POST", "/submit.php");

    // Set up what to do when we receive a response from the server
    xhr.onload = function() {
        if (xhr.status === 200) {
            // The request was successful, so we can display or use the response data
            console.log(xhr.responseText);
        }
        else {
            // The request failed, so we can display an error message
            console.error(xhr.statusText);
        }
    };

    // Send the form data as FormData object
    xhr.send(new FormData(form));
});