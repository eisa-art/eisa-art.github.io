const nav = document.querySelector("#main-nav");

const removeActiveNav = () => {
  const navItems = document.querySelectorAll("#main-nav ul li a");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("active");
  }
};

nav.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName.toLowerCase() === "a") {
      removeActiveNav();
      const link = event.target;
      link.classList.add("active");
    }
  },
  false
);
