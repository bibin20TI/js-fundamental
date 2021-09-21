const UNCOMPLETED_LIST_TODO_ID = "todos";
const COMPLETED_LIST_TODO_ID = "completed-todos"; 


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
    console.log("timestamp "+timestamp);
}

function makeTodo(data,waktu)
{
   const textTitle = document.createElement("h2");
   textTitle.innerText = data;

   const textTimesTamp = document.createElement("p");
   textTimesTamp.innerText = waktu;
   
   const textContainer = document.createElement("div");
   textContainer.classList.add("inner");

   textContainer.append(textTitle,textTimesTamp);

   const container = document.createElement("div");
   container.classList.add("item","shadown");

   container.append(textContainer);
   container.append(createCheckButton());

   return container;


}


function createButton(buttonTypeClass,eventListener)
{

    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);

    button.addEventListener("click", function(event){
        
     eventListener(event);
    });

    return button;
}

function addTaskTocomplete(taksElement)
{

  taksElement.remove();
}

function createCheckButton()
{

    return createButton("check-button", function(){

        addTaskTocomplete(event.target.parentElement);
    });
}

