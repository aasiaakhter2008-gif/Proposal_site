const question = document.getElementById("question");
const subtitle = document.getElementById("subtitle");
const littleNote = document.getElementById("littleNote");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const buttonArea = document.getElementById("buttonArea");
const card = document.getElementById("card");

let noClicks = 0;


/* =====================================================
   NO BUTTON MESSAGES
===================================================== */

const noMessages = [
  "Are you sure? 🙈",
  "Think again... 😊",
  "Really? 🥺",
  "You made me sad 😭",
  "One more thought? 🤍",
  "I know you're smiling 😏",
  "Your heart said yes! ✨",
  "Don't make me wait 😌",
  "Okay... I'll keep asking 🤭"
];


/* =====================================================
   LITTLE FLIRTY MESSAGES
===================================================== */

const littleNotes = [
  "Hmm... I think you already know the answer. 😊",

  "Take your time... I'll just keep smiling. 🙈",

  "I saw that smile. Don't deny it. 😏",

  "Someone is pretending to think very hard. 🤭",

  "Your heart is giving you away. 🤍",

  "I have a feeling you're going to make me very happy. ✨",

  "Just say yes and make this moment special. 💕",

  "Okay, future husband... enough teasing. 😌"
];


/* =====================================================
   MOVE NO BUTTON
===================================================== */

function moveNoButton() {

  noClicks++;

  const areaWidth = buttonArea.clientWidth;
  const areaHeight = buttonArea.clientHeight;

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;


  /*
   * Calculate the maximum position where
   * the button can safely exist.
   */

  const maxX =
    Math.max(
      0,
      areaWidth - buttonWidth
    );

  const maxY =
    Math.max(
      0,
      areaHeight - buttonHeight
    );


  /*
   * Small safety padding.
   */

  const padding = 4;


  /*
   * Random position.
   */

  const randomX =
    padding +
    Math.random() *
    Math.max(
      0,
      maxX - padding * 2
    );

  const randomY =
    padding +
    Math.random() *
    Math.max(
      0,
      maxY - padding * 2
    );


  /*
   * Change positioning mode.
   */

  noBtn.style.position = "absolute";

  noBtn.style.left =
    `${randomX}px`;

  noBtn.style.top =
    `${randomY}px`;


  /*
   * Change the text.
   */

  const messageIndex =
    Math.min(
      noClicks - 1,
      noMessages.length - 1
    );

  noBtn.textContent =
    noMessages[messageIndex];


  /*
   * Make the YES button slightly more noticeable.
   */

  const scale =
    Math.min(
      1 + noClicks * 0.025,
      1.15
    );

  yesBtn.style.transform =
    `scale(${scale})`;


  /*
   * Change the note.
   */

  const noteIndex =
    Math.min(
      noClicks - 1,
      littleNotes.length - 1
    );

  littleNote.textContent =
    littleNotes[noteIndex];
}


/* =====================================================
   YES BUTTON
===================================================== */

function sayYes() {

  /*
   * Change the main question.
   */

  question.innerHTML =
    "I knew you<br>loved me. 💞";


  /*
   * Change the supporting message.
   */

  subtitle.textContent =
    "You just made this girl's heart incredibly happy. " +
    "May our future be filled with love, laughter, " +
    "kindness and beautiful memories, In Shaa Allah.";


  /*
   * Change the little flirting message.
   */

  littleNote.textContent =
    "Now, my future husband... are you ready for a lifetime of me? 😊";


  /*
   * Remove the buttons.
   */

  yesBtn.remove();
  noBtn.remove();


  /*
   * Celebration animation.
   */

  card.classList.add(
    "celebration"
  );


  /*
   * Create final decoration.
   */

  const finalMessage =
    document.createElement("div");

  finalMessage.className =
    "final-message";

  finalMessage.innerHTML = `
    <span>✦</span>
    <span class="ring">💍</span>
    <span>✦</span>
  `;


  buttonArea.appendChild(
    finalMessage
  );


  /*
   * Start subtle celebration.
   */

  createCelebration();
}


/* =====================================================
   CELEBRATION
===================================================== */

function createCelebration() {

  const symbols = [
    "✦",
    "✧",
    "♡",
    "♥"
  ];


  for (let i = 0; i < 18; i++) {

    const particle =
      document.createElement("span");


    particle.textContent =
      symbols[
      Math.floor(
        Math.random() *
        symbols.length
      )
      ];


    particle.style.position =
      "fixed";

    particle.style.left =
      `${Math.random() * 100}vw`;

    particle.style.top =
      `${55 + Math.random() * 15}vh`;

    particle.style.zIndex =
      "20";

    particle.style.pointerEvents =
      "none";

    particle.style.color =
      "#ffffff";

    particle.style.fontSize =
      `${10 + Math.random() * 15}px`;


    document.body.appendChild(
      particle
    );


    const animation =
      particle.animate(
        [
          {
            transform:
              "translateY(0) scale(.5)",
            opacity: 0
          },

          {
            transform:
              "translateY(-70px) scale(1)",
            opacity: 1
          },

          {
            transform:
              `translateY(-${160 + Math.random() * 200}px)
               translateX(${(Math.random() - 0.5) * 180}px)
               scale(.7)`,
            opacity: 0
          }
        ],
        {
          duration:
            1800 +
            Math.random() * 1000,

          easing:
            "ease-out"
        }
      );


    animation.onfinish = () => {
      particle.remove();
    };
  }
}


/* =====================================================
   EVENTS
===================================================== */

yesBtn.addEventListener(
  "click",
  sayYes
);

noBtn.addEventListener(
  "click",
  moveNoButton
);

/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const backgroundMusic =
  document.getElementById("backgroundMusic");

backgroundMusic.volume = 0.5;

function startBackgroundMusic() {
  backgroundMusic.play().catch(() => {});
}

document.addEventListener(
  "click",
  startBackgroundMusic,
  { once: true }
);
