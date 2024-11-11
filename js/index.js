document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelector("#main-menu");
  const idsetters = ["#main-menu1", "#main-menu2", "#main-menu3"];
  const ids = ["resume", "projects", "contact"];
  const sections = ids.map((id) => document.querySelector(`#${id}`));
  const homePage = document.querySelector(".home-page");
  const home = document.querySelector(".home-with-header");
  const original = homePage.innerHTML;

  idsetters.forEach((selector, index) => {
    document.querySelector(selector).dataset.id = ids[index];
  });

  document.querySelector("#home-button").addEventListener("click", function () {
    homePage.innerHTML = original;
    sections.forEach(section => {
        section.classList.remove("active");
        section.style.display = "none";
    });
});

buttons.addEventListener("click", function (e) {
  if (e.target && (e.target.nodeName == "LI" || e.target.nodeName == "A")) {
      homePage.innerHTML = '';
      homePage.classList.remove("active");
      sections.forEach(section => {
          section.classList.remove("active");
          section.style.display = "none";
      });

      const targetId = e.target.dataset.id;
      if (targetId) {
          const targetSection = document.querySelector(`#${targetId}`);
          targetSection.style.display = "block";
          setTimeout(() => targetSection.classList.add("active"), 50); // Delay to trigger transition
      }
  }
});

  //JQuery practice in adding skill points
  $(".skills li .rating").each(function (index, e) {
    // Vars
    var $ratNum = 7,
      $rat = $(e).attr("data-rat"),
      $point = "<span></span>";

    // Append points
    while ($ratNum > 0) {
      $(e).append($point);
      $ratNum--;
    }

    $(e)
      .find("span")
      .each(function (index, e) {
        if (index >= $rat) return false;
        // Append Disabled Rats
        $(e).animate({
          opacity: 1,
        });
      });
  });

  
});
