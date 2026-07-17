const navigation = document.getElementById("navbar");
const toggleButton = document.getElementById("toggle");

function openMenu() {
  navigation.classList.toggle("open");
}

toggleButton.addEventListener("click", openMenu);

// LINKS

const link = document.querySelectorAll(".list-item .item");

link.forEach(function (e) {
  e.addEventListener("click", function () {
    link.forEach((e) => {
      e.classList.remove("active");
    });

    e.classList.add("active");
  });
});
