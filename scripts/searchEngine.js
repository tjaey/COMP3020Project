//********************** Search Bar Function

function searchEngine() {
  var containerDiv = document.getElementById("allSections");
  var innerDivs = containerDiv.getElementsByTagName("div");
  var input = document.getElementById("searchBar");
  var filter = input.value.toUpperCase();

  filter = filter.replace(/\s+/g, '');

  getRidofSplash();


  var noResults = document.getElementById("noResults");
  var notFound = true;
  noResults.style.display = "none";

  if(filter){
  //containerDiv.style.display = "block";
  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    //var level = innerDivs[i].getAttribute('level');
  //  var subject = innerDivs[i].getAttribute('subject');

  //  alert(innerDivs[i].hasAttribute('level'));
  //  alert(innerDivs[i].hasAttribute('subject'))

    var tags = innerDivs[i].getElementsByTagName("li")
    var code = tags[0].innerHTML;
    code = code.replace(/\s+/g, '');
    var name = tags[1].innerHTML;
    name = name.replace(/\s+/g, '');
    var prof = tags[2].innerHTML;
    prof = prof.replace(/\s+/g, '');
    if (code && name && prof) {
      if (code.toUpperCase().indexOf(filter) > -1
      || name.toUpperCase().indexOf(filter) > -1
      || prof.toUpperCase().indexOf(filter) > -1) {

          innerDivs[i].style.display = "block";
      } else {
        innerDivs[i].style.display = "none";
      }
    }
  }
  }
  else
    containerDiv.style.display = "none";


  // "No courses found" display
  for(var i=0; i<innerDivs.length; i++){
    if(innerDivs[i].style.display != "none")
      notFound = false;
  }

  if(notFound){
    noResults.style.display = "block";
  }
  else{
    noResults.style.display = "none";
  }

}

//**************** Advanced Filters / Searching by Subject

function clearFilters(){
  var subject = document.getElementById('subject');
  var level = document.getElementById('level');
  subject.value = "def";
  level.value = "def";
  rmCoursesBox();
  //update entry
}

function applyFilters(){
  var subject = $('#subject').find(":selected").val();
  if(subject == "def")
    applyAll();
  else if(subject == "cs"){
    var course = $('#courseBox').find(":selected").text();
    if(course == "(All)")
      applyCriteria("COMP")
    else {
      applyCriteria(course.substring(0,7))
    }
  }
}

function applyAll(){
  var containerDiv = document.getElementById("allSections");
  var innerDivs = containerDiv.getElementsByTagName("div");
  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    innerDivs[i].style.display = "block";
  }
  getRidofSplash();
  var noResults = document.getElementById("noResults");
  noResults.style.display = "none";
}

function applyCriteria(criteria){
  var containerDiv = document.getElementById("allSections");
  var innerDivs = containerDiv.getElementsByTagName("div");

  // clear first
  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    innerDivs[i].style.display = "none";
  }

  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    var tags = innerDivs[i].getElementsByTagName("li")
    var code = tags[0];
    if (code) {
      if (code.innerHTML.toUpperCase().indexOf(criteria) > -1) {
          innerDivs[i].style.display = "block";
          //alert(code.innerHTML.toUpperCase());
      } else {
        innerDivs[i].style.display = "none";
      }
    }
  }
    getRidofSplash();
    var noResults = document.getElementById("noResults");
    noResults.style.display = "none";
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

function getRidofSplash(){
  var getStarted =  document.getElementById("courses");
  getStarted.style.background = "#eee";
}
