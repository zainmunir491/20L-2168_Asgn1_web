document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".toggle-sidebar");
  const closeButton = document.querySelector(".sidebar-close");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector("main");

  openButton.addEventListener("click", () => {
    sidebar.classList.add("open");
    main.classList.add("sidebar-open");
  });
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("open");
    main.classList.remove("sidebar-open");
  });
});
