var list = document.querySelector("#stock-list ul");

//Adding a Stock 
var addForm = document.forms["add-stock"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var value = addForm.querySelector("input[type=text]").value;
  var li = document.createElement("li");
  var stockName = document.createElement("span");
  var deletebtn = document.createElement("span");
  li.appendChild(stockName);
  li.appendChild(deletebtn);
  list.appendChild(li);
  stockName.textContent = value;
  deletebtn.textContent = "remove";
  stockName.classList.add("name");
  deletebtn.classList.add("delete");
  document.getElementById("input").value="";
});

//Hiding the Watchlist
var hideForm = document.querySelector("#add-stock #hide");
hideForm.addEventListener("click", function () {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

//Deleting the Stock
list.addEventListener("click", function (e) {
  if (e.target.classList == "delete") {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
});

//Searching the Stock in the list
var searchForm = document.forms["search-stocks"][0];
searchForm.addEventListener("keyup", function (e) {
  var searchItem = list.querySelectorAll("li");
  for (var i = 0; i < searchItem.length; i++) {
    if (
      searchItem[i].textContent
        .toUpperCase()
        .indexOf(e.target.value.toUpperCase()) > -1
    ) {
      searchItem[i].style.display = "block";
    } else {
      searchItem[i].style.display = "none";
    }
  }
});
