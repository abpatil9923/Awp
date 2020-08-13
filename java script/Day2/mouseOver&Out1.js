function handleMouseOver() {
  
    var id2Element = document.querySelector("#id2");
    id2Element.style.background = "pink";
    id2Element.style.color = "royalblue";
  
    id2Element.innerHTML = "Hello Id Selectors!!";

  }
  
  function handleMouseOut() {

    let id2Element = document.querySelector("#id2");
    id2Element.style.background = "black";
    id2Element.style.color = "white";
    id2Element.innerHTML = "Hello World";

  }


  function handleImgMouseOver() {
  
    var imgElement1 = document.querySelector("#idimg");
  
    imgElement1.src = "img2.JPG";

  }
  
  function handleImgMouseOut() {

    var imgElement2 = document.querySelector("#idimg");
  
    imgElement2.src = "img1.JPG";

  }
