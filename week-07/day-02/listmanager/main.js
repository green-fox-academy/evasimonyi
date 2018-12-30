// 1, Build up the necessary structure with JavaScript(try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//   - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//       - If "X" is clicked the selected item should be removed and the first item should be selected
//         - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

const body = document.querySelector('body');
let selectedItemIndex = 0;

//creating shopping list
const buyItems = ['bread', 'milk', 'orange', 'tomato'];
const shoppingList = document.createElement('ul');
shoppingList.setAttribute('id', 'shoppinglist');
body.appendChild(shoppingList);

buyItems.forEach(e => {
  const li = document.createElement('li');
  li.innerHTML = e;
  shoppingList.appendChild(li);
});

//creating buttons
const buttonsDiv = document.createElement('div');

const upButton = document.createElement('button');
upButton.setAttribute('id', 'up');
upButton.innerHTML = 'Up'
const downButton = document.createElement('button');
downButton.setAttribute('id', 'down');
downButton.innerHTML = 'Down';
const deleteButton = document.createElement('button');
deleteButton.setAttribute('id', 'delete');
deleteButton.innerHTML = 'X';
const moveButton = document.createElement('button');
moveButton.setAttribute('id', 'move');
moveButton.innerHTML = '>';

buttonsDiv.appendChild(upButton);
buttonsDiv.appendChild(downButton);
buttonsDiv.appendChild(deleteButton);
buttonsDiv.appendChild(moveButton);

body.appendChild(buttonsDiv);

//creating the right side box with selected items
const selectedItems = document.createElement('div');
body.appendChild(selectedItems);

//adding functions to buttons
//not my solution 

// --------------------------------------------------------------------

const coloringItem = (shouldColor, removeColor) => {
  shouldColor.setAttribute('style', 'background-color: grey');
  removeColor.setAttribute('style', 'background-color: white');
}

upButton.onclick = () => {
  if (selectedItemIndex !== 0 && document.querySelector('#shoppinglist').querySelectorAll('li').length !== 0) {
    selectedItemIndex--;
    let shouldColor = document.querySelector('#shoppinglist').childNodes[selectedItemIndex];
    let removeColor = document.querySelector('#shoppinglist').childNodes[selectedItemIndex + 1];
    coloringItem(shouldColor, removeColor);
  }
}

downButton.onclick = () => {
  if (selectedItemIndex !== document.querySelector('#shoppinglist').querySelectorAll('li').length - 1 && document.querySelector('#shoppinglist').querySelectorAll('li').length !== 0) {
    selectedItemIndex++;
    let shouldColor = document.querySelector('#shoppinglist').childNodes[selectedItemIndex];
    let removeColor = document.querySelector('#shoppinglist').childNodes[selectedItemIndex - 1];
    coloringItem(shouldColor, removeColor);
  }
}

moveButton.onclick = () => {
  if (document.querySelector('#shoppinglist').querySelectorAll('li').length >= 1) {
    let newListElement = document.createElement('li');
    newListElement.innerHTML = shoppinglist.childNodes[selectedItemIndex].textContent;
    selectedItems.appendChild(newListElement);
    shoppinglist.removeChild(shoppinglist.childNodes[selectedItemIndex]);
  } 
  if (document.querySelector('#shoppinglist').querySelectorAll('li').length !== 0) {
    shoppinglist.childNodes[0].setAttribute('style', 'background-color: grey');
    selectedItemIndex = 0;
  }
}

deleteButton.onclick = () => {
  if (document.querySelector('#shoppinglist').querySelectorAll('li').length >= 1) {
    shoppinglist.removeChild(shoppinglist.childNodes[selectedItemIndex]);
  }
  if (document.querySelector('#shoppinglist').querySelectorAll('li').length !== 0) {
    shoppinglist.childNodes[0].setAttribute('style', 'background-color: grey');
    selectedItemIndex = 0;
  }
}