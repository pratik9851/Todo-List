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
    div.style.marginTop="10px"
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
  let el=document.getElementsByClassName('item');
  if (document.getElementById("alldone").innerHTML === "done all task") {
    document.getElementById("alldone").innerHTML = "undone all task";
    for(var i=0;i<el.length;i++){
      el[i].style.textDecoration = "line-through";
    el[i].style.color = "green";
    }
  } else {
    document.getElementById("alldone").innerHTML = "done all task";
    for(var j=0;j<el.length;j++){
    el[j].style.textDecoration = "none";
    el[j].style.color = "black";
  }
  }
}
