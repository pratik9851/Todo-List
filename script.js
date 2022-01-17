var tasks = document.getElementById("tasks");
var id = 0;

//function for adding task
function addTask() {
  var div = document.createElement("div");
  // div.setAttribute("class","item")

  var task = document.getElementById("inp").value;
  if (task === "") {
    alert("You did not enter any tasl ");
  } else {
    document.getElementById("inp").value = null;

    id = id + 1;

    div.innerHTML = `<p class="item" id=${id}>${task}</p><div id="btn"><button id="isdone" onclick="Done(${id})">done</button> <button onclick="remove(${id})">remove</button></div>`;

    tasks.append(div);
  }
}

//function for mark any task complete
function Done(i) {
  var clicked_p = document.getElementById(i);
  if (document.getElementById("isdone").innerHTML === "done") {
    document.getElementById("isdone").innerHTML = "undone";
    clicked_p.style.textDecoration = "line-through";
    clicked_p.style.color = "green";
  } else {
    document.getElementById("isdone").innerHTML = "done";
    clicked_p.style.textDecoration = "none";
    clicked_p.style.color = "black";
  }
}

//function for deleting any task
function remove(i) {
  var clicked_p = document.getElementById(i);
  var div = clicked_p.parentElement;
  div.remove();
}

function deleteall() {
  document.getElementById("tasks").innerHTML = null;
}

function alldone() {
  document.querySelectorAll(".item");
  if (document.getElementById("alldone").innerHTML === "done all task") {
    document.getElementById("alldone").innerHTML = "undone all task";
    document.querySelectorAll(".item").style.textDecoration = "line-through";
    document.querySelectorAll(".item").style.color = "green";
  } else {
    document.getElementById("alldone").innerHTML = "done all task";
    document.querySelectorAll(".item").style.textDecoration = "none";
    document.querySelectorAll(".item").style.color = "black";
  }
}
