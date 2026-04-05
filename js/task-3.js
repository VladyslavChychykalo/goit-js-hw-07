const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  nameOutput.textContent = value || "Anonymous";
});
