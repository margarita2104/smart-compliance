document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-button");
  const panels = document.querySelectorAll(".accordion-panel");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const panel = panels[index];
      const arrow = this.querySelector(".arrow");

      if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        panels.forEach((p, i) => {
          if (i !== index) {
            p.style.display = "none";
            buttons[i].querySelector(".arrow").style.transform = "rotate(0deg)";
          }
        });

        panel.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });
});