const nav = document.querySelector("#main-nav");

// remove styles from navigation a tags
const removeActiveNav = () => {
  const navItems = document.querySelectorAll("#main-nav ul li a");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove("active");
  }
};

const addActiveClass = (event) => {
  if (event.target.tagName.toLowerCase() === "a") {
    removeActiveNav();
    const link = event.target;
    link.classList.add("active");
  }
};

nav.addEventListener("click", addActiveClass);
