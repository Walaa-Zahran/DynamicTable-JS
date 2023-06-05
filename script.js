function addColumn() {
  let content = document.getElementById("body");
  let rowsLength = content.children.length;
  for (let x = 0; x < rowsLength; x++) {
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.className = "form-control";
    let button = document.createElement("button");
    button.classList = "btn btn-danger float-left";
    button.innerHTML = "X";
    if (x == 0) {
      td.appendChild(button);
    }
    td.appendChild(input);
    button.addEventListener("click", function (e) {
      rowsLength = content.children.length;
      let index = e.target.parentElement.cellIndex;
      for (let x = 0; x < rowsLength; x++){
        content.children[x].children[index].remove();
      }
    });
    if (x < 2) {
      content.children[x].appendChild(td);
    } else {
      content.children[x].insertBefore(
        td,
        content.children[x].lastElementChild
      );
    }
  }
}
function addRow() {
  let content = document.getElementById("body");
  let columnsLength = content.firstElementChild.children.length;
  let tr = document.createElement("tr");
  for (let x = 0; x < columnsLength; x++) {
    let td = document.createElement("td");
    let input = document.createElement("input");
    input.className = "form-control";
    td.appendChild(input);
    tr.appendChild(td);
  }
  let button = document.createElement("button");
  button.classList = "btn btn-danger detRow";
  button.innerHTML = "X";
  tr.appendChild(button);
  content.appendChild(tr);
  button.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
}
