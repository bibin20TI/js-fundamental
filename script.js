document.addEventListener("DOMContentLoaded", function () {
 
    const submitForm = document.getElementById("form");
 
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });
});

function addTodo()
{

    const textTodo = getElementById("title").value;
    const timestamp = getElementById("date").value;

    console.log("todo "+texTodo);
    console.log("timestamp "+timestap);
}