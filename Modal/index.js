document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling on the background
});

document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling on the background
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling on the background
  }
});
