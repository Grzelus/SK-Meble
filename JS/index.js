const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Check your selector: ${selector} doesn't exist`);
};

const navDropdownBtn = getElement(".nav-dropdown-btn");
const navList = getElement(".nav-list");

navDropdownBtn.addEventListener("click", () => {
  navList.classList.toggle("show-height");
});

const currentYear = new Date().getFullYear();
getElement("#date").textContent = currentYear;
