AOS.init({
  once: true, // Animations happen only once
  duration: 800, // Animation duration
  easing: "ease-in-out", // Easing function for animation
});

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

const descriptions = {
  html5: {
    src: "./src/images/html5.svg",
    text: "HTML5: Utilizo há 2 anos. Projetos: Landing pages, websites responsivos. HTML5 é a base da web moderna, proporcionando estrutura e semântica aos sites.",
  },
  css3: {
    src: "./src/images/css3.svg",
    text: "CSS3: Utilizo há 2 anos. Projetos: Estilização avançada, animações, design responsivo. CSS3 permite criar visualizações atraentes e dinâmicas.",
  },
  javascript: {
    src: "./src/images/js.svg",
    text: "JavaScript: Utilizo há 2 anos. Projetos: Funcionalidades interativas, APIs, SPA. JavaScript é essencial para a interatividade na web.",
  },
  react: {
    src: "./src/images/react.svg",
    text: "React: Utilizo há 8 meses. Projetos: Aplicações web modernas, SPA, componentização. React permite desenvolver interfaces de usuário eficientes e dinâmicas.",
  },

  tailwind: {
    src: "./src/images/tailwind.svg",
    text: "Utilizo Tailwind CSS há 5 meses em projetos de aplicações web modernas, SPAs e ele é especialmente útil para estilização baseada em componentes.",
  },

  sass: {
    src: "./src/images/sass.svg",
    text: "Sass: Utilizo há 3 meses. Projetos: Estilização avançada, organização de código, design responsivo. Sass é uma linguagem de folhas de estilo que estende o CSS com características como variáveis, aninhamento e mixins, facilitando a criação e manutenção de estilos complexos e reutilizáveis.",
  },
};

function showDescription(language) {
  const overlay = document.getElementById("overlay");
  const overlayIcon = document.getElementById("overlay-icon");
  const overlayDescription = document.getElementById("overlay-description");

  overlayIcon.src = descriptions[language].src;
  overlayDescription.textContent = descriptions[language].text;

  overlay.style.display = "flex";
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
