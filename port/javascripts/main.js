const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.getElementById("menu");
const snsButtons = document.querySelector(".sns-links");
const navbar = document.querySelector(".navbar");

const clickMenu = () => {
  menu.classList.toggle("active");
  snsButtons.classList.toggle("active");
};

toggleMenu.addEventListener("click", clickMenu);

$(".ui.embed").embed();

var list = menu.getElementsByClassName("menu-list");
console.log(list);
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    try {
      current[0].className = current[0].className.replace(" active", "");
    } catch (error) {
      console.log(error);
    }
    this.className += " active";
  });
}

$("#list-1").click(function () {
  const offset = $("#main-content").offset(); //선택한 태그의 위치를 반환
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#list-2").click(function () {
  const offset = $("#skills").offset(); //선택한 태그의 위치를 반환
  $("html").animate({ scrollTop: offset.top - 80 }, 400);
});

$("#list-3").click(function () {
  const offset = $("#project").offset(); //선택한 태그의 위치를 반환
  $("html").animate({ scrollTop: offset.top - 80 }, 400);
});

$("#list-4").click(function () {
  const offset = $("#experience").offset(); //선택한 태그의 위치를 반환
  $("html").animate({ scrollTop: offset.top - 80 }, 400);
});

$("#list-5").click(function () {
  const offset = $("#award").offset(); //선택한 태그의 위치를 반환
  $("html").animate({ scrollTop: offset.top - 80 }, 400);
});

$("#list-6").click(function () {
  const offset = $("#contact").offset(); //선택한 태그의 위치를 반환
  $("html").animate({ scrollTop: offset.top - 80 }, 400);
});
