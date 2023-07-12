let box = document.querySelector(".square");

box.addEventListener("click", () => {
  if ((box.style.backgroundColor = "red")) {
    box.style.backgroundColor = "yellow";
    box.style.width = "600px";
    box.style.height = "600px";
  }

  if ((box.style.backgroundColor = "yellow")) {
    box.style.backgroundColor = "red";
    box.style.width = "300px";
    box.style.height = "300px";
  }
  console.log("clicked");
});

/*
box.style.backgroundColor = "red";
  box.style.width = "600px";
  box.style.height = "600px";
*/
