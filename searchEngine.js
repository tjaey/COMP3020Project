function searchEngine() {

  var containerDiv = document.getElementById("allSections");
  var innerDivs = containerDiv.getElementsByTagName("div");
  var input = document.getElementById("searchBar");
  var filter = input.value.toUpperCase();

  if(filter){
  containerDiv.style.display = "block";
  for(var i=0; i<innerDivs.length; i++) // for all sections (div's)
  {
    var tags = innerDivs[i].getElementsByTagName("li")
    var code = tags[0];
    var name = tags[1];
    var prof = tags[2];
    if (code && name && prof) {
      if (code.innerHTML.toUpperCase().indexOf(filter) > -1
      || name.innerHTML.toUpperCase().indexOf(filter) > -1
      || prof.innerHTML.toUpperCase().indexOf(filter) > -1) {
        innerDivs[i].style.display = "block";
      } else {
        innerDivs[i].style.display = "none";
      }
    }
  }
  }
  else
    containerDiv.style.display = "none";
}
