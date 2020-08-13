var likeCounter = 1;

function commentHere() {
  let userComment = document.querySelector("#inputId1").value; // we are not using innerHTML wy bcz this is a form element

  // create new element
  let newElement = document.createElement("div");
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-between";
  newElement.style.marginBottom = "4px";

  let child1 = document.createElement("div");
  child1.textContent = userComment;
  let child2 = document.createElement("button");
  child2.textContent = "Deleted";

  // relationship among newly created elements
  newElement.appendChild(child1);
  newElement.appendChild(child2);

  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  // now we want to add the element at the top.
  commentBox.insertBefore(newElement, commentBox.firstChild);

  // now we want to add the element at the below.
  // commentBox.appendChild(newElement);
  

  // clean the input box
  document.querySelector("#inputId1").value = "";
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}