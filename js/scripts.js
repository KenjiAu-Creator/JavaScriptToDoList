// Grab the input form
const newToDoForm = document.querySelector( "form" );

// Grab To Do item field
const toDoField = document.getElementById( "todo-new");

// Grab the Active list
const activeList = document.querySelector( ".activeToDo" );

// Grab the Complete list
const completeList = document.querySelector( ".completeToDo" );

// Add event to move the new To Do Item into Active List.
newToDoForm.addEventListener('submit', ( event ) => {
  event.preventDefault(); // Prevent the page from reloading!

  // Create a new li element
  const newLI = document.createElement( 'LI');

  // Grab the user input from the form
  const toDoItem = toDoField.value;

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

  // Try to grab the checkbox on a list element now
  console.log(newCheckBox);
  // https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
  // Found code to check if a box is checked or not

  newCheckBox.addEventListener( 'change', () => {
    if(newCheckBox.checked)
    {
      // checkbox is checked
      // Move item to completed list
      newLI.classList.add( 'completed-item' );
      completeList.appendChild( newLI );
    }
    else
    {
      // checkbox is not checked
      // Add the new item in the to the active list
      newLI.classList.remove( 'completed-item' );
      activeList.appendChild( newLI );
    }
  });
});

