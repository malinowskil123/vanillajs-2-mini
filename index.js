console.log("connected");

function addTodo(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = document.getElementById("item").value;
  const button = document.createElement("button");
  button.innerText = "x";
  item.append(button);
  item.addEventListener("click", completeTodo);
  button.addEventListener("click", removeTodo);
  button.className = "lukes-button";
  // VVV selects the first ul tag in your page
  const list = document.querySelector("ul");
  list.appendChild(item);
}

function removeTodo(event) {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}

function completeTodo(event) {
  const value = event.target.getAttribute("aria-checked");
  console.log(value);
  // returns "true" as string not ture boolean val`,
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
}

document.querySelector("form").addEventListener("submit", addTodo);
