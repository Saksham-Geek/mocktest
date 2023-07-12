let input = document.querySelector("input");
let submit = document.querySelector("input.submit");
let output = document.querySelector(".output");

submit.addEventListener("click", () => {
  output.innerText = input.value;
  document.body.style.backgroundColor = "#333";
  output.style.backgroundColor = "#999";
  console.log("clicked");
});
