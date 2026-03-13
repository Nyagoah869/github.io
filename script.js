// Typing effect for role phrases
const phrases = [
  "Front-End Web Developer [cite: 7]",
  "Digital Marketing Specialist [cite: 23]",
  "Graphic Designer [cite: 21]",
  "Data Collector & Enumerator [cite: 37]"
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;

function loopPhrases() {
  const typing = document.getElementById("typing");
  if (!typing) return;

  if (phraseIndex >= phrases.length) phraseIndex = 0;
  typing.innerHTML = currentPhrase.join("");

  if (!isDeleting && letterIndex < phrases[phraseIndex].length) {
    currentPhrase.push(phrases[phraseIndex][letterIndex]);
    letterIndex++;
  } else if (isDeleting && letterIndex > 0) {
    currentPhrase.pop();
    letterIndex--;
  }

  if (letterIndex === phrases[phraseIndex].length) {
    isDeleting = true;
    setTimeout(loopPhrases, 2000);
    return;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    currentPhrase = [];
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(loopPhrases, speed);
}

loopPhrases();

// Typing effect for Name
const names = ["Nyagoah", "Lul", "Tuok"]; [cite: 11, 80]
let nameIndex = 0;
let nameLetterIndex = 0;
let currentName = [];
let deletingName = false;

function loopNames() {
  const nameSpan = document.getElementById("name");
  if (!nameSpan) return;

  if (nameIndex >= names.length) nameIndex = 0;
  nameSpan.innerHTML = currentName.join("");

  if (!deletingName && nameLetterIndex < names[nameIndex].length) {
    currentName.push(names[nameIndex][nameLetterIndex]);
    nameLetterIndex++;
  } else if (deletingName && nameLetterIndex > 0) {
    currentName.pop();
    nameLetterIndex--;
  }

  if (nameLetterIndex === names[nameIndex].length) {
    deletingName = true;
    setTimeout(loopNames, 1500);
    return;
  }

  if (deletingName && nameLetterIndex === 0) {
    deletingName = false;
    nameIndex++;
    currentName = [];
  }

  const speed = deletingName ? 50 : 120;
  setTimeout(loopNames, speed);
}

loopNames();

// ... Keep the rest of the original script.js for scroll reveals and mobile nav ...