var tasks = document.getElementById("tasks");
  var id = 0;

  //function for adding task
  function addTask() {
    var div = document.createElement("div");

    var task = document.getElementById("inp").value;
    if(task===""){
        alert("You did not enter any tasl ")
    }else{
    document.getElementById("inp").value = null;

    id = id + 1;

    div.innerHTML = `<p id=${id}>${task}</p><button onclick="Done(${id})">done</button> <button onclick="remove(${id})">remove</button>`;
   // document.getElementById(`${id}`).style.display="flex"
    tasks.append(div);
    }
  }

  //function for mark any task complete
  function Done(i) {
    var clicked_p = document.getElementById(i);
    clicked_p.setAttribute("class", "done");
  }

  //function for deleting any task
  function remove(i) {
    var clicked_p = document.getElementById(i);
    var div = clicked_p.parentElement;
    div.remove();
  }