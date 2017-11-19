function drop(){
  /*
  if (confirm("Are you sure you want to drop COMP 2130 A01 ?")){
    prompt("Please re-enter your password.");

  }
  */
  var confirm = document.getElementById("confirm");
  var drop = document.getElementById("drop");
  confirm.style.display = 'block';
  drop.style.display = 'none';
}

function dropNon(){
  alert("This class is not droppable in prototype. \n Try COMP 2130.")
}
