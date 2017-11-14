function searchEngine() {
  var containerDiv = document.getElementById("allSections");
  var innerDivs = containerDiv.getElementsByTagName("div");
  var input = document.getElementById("searchBar");
  var filter = input.value.toUpperCase();

  if(filter){
  containerDiv.style.display = "block";
  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    //var level = innerDivs[i].getAttribute('level');
  //  var subject = innerDivs[i].getAttribute('subject');

  //  alert(innerDivs[i].hasAttribute('level'));
  //  alert(innerDivs[i].hasAttribute('subject'));

    var tags = innerDivs[i].getElementsByTagName("li")
    var code = tags[0];
    var name = tags[1];
    var prof = tags[2];
    if (code && name && prof) {
      if (code.innerHTML.toUpperCase().indexOf(filter) > -1
      || name.innerHTML.toUpperCase().indexOf(filter) > -1
      || prof.innerHTML.toUpperCase().indexOf(filter) > -1) {

        //if(level == '2' && subject == 'cs')
          innerDivs[i].style.display = "block";
      } else {
        innerDivs[i].style.display = "none";
      }
    }
  }
  }
  else
    containerDiv.style.display = "none";

  //document.getElementById("courses").style.height = "100%";
}

function clearFilters(){
  var subject = document.getElementById('subject');
  var level = document.getElementById('level');
  subject.value = "def";
  level.value = "def";
  rmCoursesBox();
  //update entry
}

function applyFilters(){
  var containerDiv = document.getElementById("allSections");
  var innerDivs = containerDiv.getElementsByTagName("div");
  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    // if filters apply
    innerDivs[i].style.display = "block";
  }
}

function putCoursesBox(){
  var form = document.getElementById("courseBox");
  form.disabled = false;

  op = document.createElement("option")
  op.innerHTML = "COMP1010 : Introduction to Computer Science"

  op2 = document.createElement("option")
  op2.innerHTML  = "COMP2140 : Data Structures & Algorithms"

  op3 = document.createElement("option")
  op3.innerHTML  = "COMP3020 : Human Computer Interaction I"

  op4 = document.createElement("option")
  op4.innerHTML  = "COMP3490 : Computer Graphics I"

  $("#courseBox").append(op,op2,op3,op4);

  $("#courseAll").selected = true;

}

function rmCoursesBox(){
  $("#courseBox").empty();
  all = document.createElement("option")
  all.innerHTML  = "(All)";
  $("#courseBox").append(all);

  $("#courseBox").disabled = true;
}

function doCourses(){
   var x = document.getElementById("subCS").selected;
  if(x){
    putCoursesBox();
  } else {
    rmCoursesBox();
  }
}
