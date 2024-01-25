const toggleBtn = document.querySelector(".toggle_btn");
const toggleSearch = document.querySelector(".toggle_search");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const toggleSearchIcon = document.querySelector(".toggle_search i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const dropDownSearch = document.querySelector(".dropdown_search");

toggleBtn.addEventListener("click", () => {
  dropDownSearch.classList.remove("open");
  toggleSearchIcon.classList = "fa fa-search";
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa fa-times" : "fa fa-bars";
});

toggleSearch.addEventListener("click", () => {
  dropDownMenu.classList.remove("open");
  toggleBtnIcon.classList = "fa fa-bars";
  dropDownSearch.classList.toggle("open");
  const isOpen = dropDownSearch.classList.contains("open");
  toggleSearchIcon.classList = isOpen ? "fa fa-times" : "fa fa-search";
});
