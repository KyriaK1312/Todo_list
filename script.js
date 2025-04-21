const form = document.querySelector('form');
const input = document.querySelector('input');

function storeList() {
    window.localStorage.todoList = list.innerHTML;
  }

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  }
//     else {
//     list.innerHTML = `<li>Click on a todo to delete it.</li>`;
//   }
}

window.addEventListener("load", getTodos);

// Add element
form.addEventListener("submit", (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${input.value}</li>`;
   input.value = "";
    storeList();
  });
  
  // Remove element
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("checked")) {
      e.target.remove();
    } else {
      e.target.classList.add("checked");
    }
    storeList();
  });
  












