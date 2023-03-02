const textInput = document.querySelector('#text-input');
const convertedTextOutput = document.querySelector('#converted-text');
const wordCountOutput = document.querySelector('#word-count-value');
const vowelCountOutput = document.querySelector('#vowel-count-value');
const convertToUppercaseBtn = document.querySelector('#convert-to-uppercase');
const convertToLowercaseBtn = document.querySelector('#convert-to-lowercase');
const wordCountBtn = document.querySelector('#word-count');
const vowelCountBtn = document.querySelector('#vowel-count');

function convertToUppercase() {
  const text = textInput.value;
  const convertedText = text.toUpperCase();
  convertedTextOutput.textContent = convertedText;
}

function convertToLowercase() {
  const text = textInput.value;
  const convertedText = text.toLowerCase();
  convertedTextOutput.textContent = convertedText;
}

function countWords() {
  const text = textInput.value;
  const wordCount = text.trim().split(/\s+/).length;
  wordCountOutput.textContent = wordCount;
}

function countVowels() {
  const text = textInput.value;
  const vowelCount = text.match(/[aeiou]/gi)?.length || 0;
  vowelCountOutput.textContent = vowelCount;
}

convertToUppercaseBtn.addEventListener('click', convertToUppercase);
convertToLowercaseBtn.addEventListener('click', convertToLowercase);
wordCountBtn.addEventListener('click', countWords);
vowelCountBtn.addEventListener('click', countVowels);
