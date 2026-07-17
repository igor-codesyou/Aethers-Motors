// MOBILE MENU

const navigation = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle");

function openMenu() {
  navigation.classList.toggle("open");
}

toggleButton.addEventListener("click", openMenu);

// LINKS

function headerBefore() {
  const link = document.querySelectorAll(".list-item .item");

  link.forEach(function (e) {
    e.addEventListener("click", function () {
      link.forEach((e) => {
        e.classList.remove("active");
      });

      e.classList.add("active");
      navigation.classList.remove("open");
    });
  });
}
headerBefore();

// HEADER BLUR

const header = document.querySelector(".header");

function headerBlur() {
  if (window.scrollY > 50) {
    header.classList.add("blur");
  } else {
    header.classList.remove("blur");
  }
}

window.addEventListener("scroll", headerBlur);
