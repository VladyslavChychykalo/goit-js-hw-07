const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
