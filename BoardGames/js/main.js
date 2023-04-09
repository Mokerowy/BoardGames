const nav = document.querySelector(".mobileNav");
const navBtn = document.querySelector(".burger-btn");

const handleNav = () => {
	nav.classList.toggle("mobileNav--active");
};

navBtn.addEventListener("click", handleNav);
