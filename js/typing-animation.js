const text = "Happy Birthday to the Most Special Person in My Life!!! 😁choti bachi💕";
let index = 0;

function type() {
  const typingElement = document.getElementById("typing");
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", type);

