
var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    // create new element
    const newElement = document.createElement("div");
    newElement.textContent = document.getElementById("cinput").value; //concatnate the counter

    // add styling to new element
    newElement.style.background = "royalblue"; // values must be in double quotes or single quote
    newElement.style.color = "white";
    newElement.style.margin = "4px";

    // comment box elment
    const commentBox = document.querySelector("#commentBox");


    // append the new element to parent
    // commentBox.appendChild(newElement);


    // add the Element at before the exixting element
    commentBox.insertBefore(newElement, commentBox.firstChild);


    // incremetn the comment counter
    commentCounter++;

    //clean the box
    document.querySelector("#cinput").value=" ";
}

function likeHere() {

    likeCounter++;

    let btnElement = document.querySelector("#likeid");


    btnElement.innerHTML = "Like " + likeCounter;
}