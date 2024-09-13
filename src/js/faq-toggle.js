document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  // Set bagian pertama tanpa tombol + yang terlihat
  const firstSection = sections[0];
  const firstParagraph = firstSection.querySelector("p");
  const firstButton = firstSection.querySelector(".faq-button");

  firstParagraph.style.maxHeight = firstParagraph.scrollHeight + "px";
  firstButton.classList.add("hidden");

  sections.forEach((section) => {
    const button = section.querySelector(".faq-button");
    const paragraph = section.querySelector("p");

    button.addEventListener("click", () => {
      if (paragraph.style.maxHeight) {
        paragraph.style.maxHeight = null;
        button.classList.remove("hidden");
      } else {
        sections.forEach((sec) => {
          const secParagraph = sec.querySelector("p");
          const secButton = sec.querySelector(".faq-button");
          if (secParagraph !== paragraph) {
            secParagraph.style.maxHeight = null;
            secButton.classList.remove("hidden");
          }
        });

        paragraph.style.maxHeight = paragraph.scrollHeight + "px";
        button.classList.add("hidden");
      }
    });
  });
});
