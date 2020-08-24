// Grab the input form
const newToDoForm = document.querySelector( "form" );
console.log(newToDoForm);

// Grab To Do item field
const toDoField = document.getElementById( "todo-new");

// Grab the Active list
const activeList = document.querySelector( ".activeToDo" );
console.log(activeList);

// Grab the Complete list
const completeList = document.querySelector( ".completeToDo" );
console.log(completeList);

// Add event to input form
newToDoForm.addEventListener('submit', ( event ) => {
  event.preventDefault(); // Prevent the page from reloading!
  console.log(event);

  // Create a new li element
  const newLI = document.createElement( 'LI');

  // Grab the user input from the form
  const toDoItem = toDoField.value;
  console.log(toDoItem);

  // Create checkbox
  const newCheckBox = document.createElement( "INPUT" );
  newCheckBox.type = "checkbox";

  // Insert value into the LI
  newLI.textContent = `${toDoItem}`;
  newLI.prepend(newCheckBox);
  
  // Add the new item in the to the active list
  activeList.appendChild( newLI );

  // Reset the form
  newToDoForm.reset();
});