var tasks = document.getElementById("tasks");
var id = 0;
var btnid=1000;

document.getElementById("inp").addEventListener("keypress",function(event){
  if(event.keyCode===13){
    var div = document.createElement("div");
    // div.setAttribute("class","item")
  
    var task = document.getElementById("inp").value;
    if (task === "") {
      alert("You did not enter any task ");
    } else {
      
  
      id = id + 1;
      btnid=btnid-1 
      div.innerHTML = `<p class="item" id=${id}>${task}</p><div id="btn"><button class="itembtn" id=${btnid} onclick="Done(${id},${btnid})">done</button> <button onclick="remove(${id})">remove</button></div>`;
      div.style.marginTop="10px"
      tasks.append(div);
      div.setAttribute
      document.getElementById("inp").value = null;
    }
  }
})

//function for adding task
function addTask() {
  var div = document.createElement("div");
  // div.setAttribute("class","item")

  var task = document.getElementById("inp").value;
  if (task === "") {
    alert("You did not enter any task ");
  } else {
    

    id = id + 1;
    btnid=btnid-1 
    div.innerHTML = `<p class="item" id=${id}>${task}</p><div id="btn"><button class="itembtn" id=${btnid} onclick="Done(${id},${btnid})">done</button> <button onclick="remove(${id})">remove</button></div>`;
    div.style.marginTop="10px"
    tasks.append(div);
    div.setAttribute
    document.getElementById("inp").value = null;
  }
}

//function for mark any task complete
function Done(i,j) {
  var clicked_p = document.getElementById(i);
  if (document.getElementById(j).innerHTML === "done") {
    document.getElementById(j).innerHTML = "undone";
    clicked_p.style.textDecoration = "line-through";
    clicked_p.style.color = "green";
  } else {
    document.getElementById(j).innerHTML = "done";
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
  document.getElementById("alldone").innerHTML = "done all task"
}

function alldone() {
  let el=document.getElementsByClassName('item');
  let el1=document.getElementsByClassName('itembtn');
  if (document.getElementById("alldone").innerHTML === "done all task") {
    document.getElementById("alldone").innerHTML = "undone all task";
    for(var i=0;i<el.length;i++){
      el[i].style.textDecoration = "line-through";
    el[i].style.color = "green";
    el1[i].innerHTML="undone"
    }
  } else {
    document.getElementById("alldone").innerHTML = "done all task";
    for(var j=0;j<el.length;j++){
    el[j].style.textDecoration = "none";
    el[j].style.color = "black";
    el1[j].innerHTML="done"
  }
  }
}
