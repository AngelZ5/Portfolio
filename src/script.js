const texts = ["Programador Front-End", "Desenvolvedor de landing pages"];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingTextElement = document.getElementById("typing-text");

function type() {
  if (currentCharIndex < texts[currentTextIndex].length) {
    typingTextElement.textContent +=
      texts[currentTextIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentCharIndex > 0) {
    typingTextElement.textContent = texts[currentTextIndex].substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    setTimeout(erase, 50);
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 500);
});

AOS.init();
