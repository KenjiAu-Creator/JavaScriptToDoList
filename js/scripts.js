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

  // Grab the date information
  // https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  // Found Date class to obtain current time.
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const hr = String(today.getHours()).padStart(2, '0');
  const min = String(today.getMinutes()).padStart(2, '0');
  const sec = String(today.getSeconds()).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = dd + '-' + mm + '-' + yyyy;

  // Create the delete button
  const deleteBttn = document.createElement( 'BUTTON' );
  deleteBttn.innerHTML = "Delete";

  // Create the bold start element
  const startSpan = document.createElement( 'SPAN' );
  startSpan.textContent = `Start: `;
  startSpan.classList.add("bold");

  // Create the time string element
  const timeSpan = document.createElement( 'SPAN' );
  timeSpan.textContent = `${today} ${hr}:${min}:${sec} `;

  // Insert value into the LI
  newLI.textContent = `${toDoItem} `;
  // Appending checkbox to new item
  newLI.prepend(newCheckBox);
  // Appending the start span to new item
  newLI.append(startSpan);
  // Appending the time span to new item
  newLI.append(timeSpan);
  // Appending the delete button to new item
  newLI.append(deleteBttn);
  
  // Add the new item into the active list
  activeList.appendChild( newLI );

  // Reset the form
  newToDoForm.reset();


  // Writing the code for moving items between the active and complete.
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

  // Code for deleting the to do item.
  deleteBttn.addEventListener( 'click', () => {
    // Look through active lists element first
    for (let i  = 0; i < activeList.childElementCount; i++ )
    {
      if (activeList.children[i].textContent === newLI.textContent)
      {
        // Remove this child from the list
        activeList.removeChild(activeList.children[i]);
      }
    }

    // Look through completed lists elements
    for (let i = 0; i < completeList.childElementCount; i++ )
    {
      if (completeList.children[i].textContent === newLI.textContent)
      {
        // Remove this child from the list
        completeList.removeChild(completeList.children[i]);
      }
    }
  });
});

