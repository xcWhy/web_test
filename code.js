document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".wavy");

  texts.forEach(text => {
    const str = text.textContent;
    text.textContent = "";

    for (let i = 0; i < str.length; i++) {
      const span = document.createElement("span");
      span.textContent = str[i];
      span.style.animationDelay = `${i * 0.2}s`;
      text.appendChild(span);
    }
  });
});



