var word;
let min = 97;
let max = 122;
var mistake = 0;
var correctCount = 0;
let show = document.getElementById("show");
let input = document.getElementById("type");
let missedWord = document.getElementById("miss");
let correctWord = document.getElementById("correct");
const wpmDisplay = document.getElementById("wpm");
var count = 0;
var showedWord = [];
var typedWord = "";
var isCorrect = true;
function generateWord() {
    showedWord = [];
    count = 0;
    typedWord = "";
    show.innerHTML = "";
    for (let index = 0; index < 5; index++) {
        word = String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
        showedWord[index] = word;
        show.innerHTML += word;
    }
}
/**
 * When you type the key from your keyboard, this key is lighted.
 */
function isActiveKey() {
    document.addEventListener("keydown", function (event) {
        var pressedKey = event.key;
        const virtualKey = document.querySelector(`[key="${pressedKey}"]`);
        if (virtualKey) {
            virtualKey.classList.add("active");
        }
    });
    document.addEventListener("keyup", function (event) {
        const pressedKey = event.key;
        typedWord += pressedKey;
        input.innerHTML = typedWord;
        check(pressedKey);
        const virtualKey = document.querySelector(`[key="${pressedKey}"]`);

        if (virtualKey) {
            virtualKey.classList.remove("active");
        }
    });
}

/** checking the key you typed and showed key */
function check(a) {
    console.log(count);
    count++;
    if (showedWord[count - 1] == a) {
        console.log(a);
    }
    else {
        isCorrect = false;
        mistake++;
        missedWord.innerText = "";
        missedWord.innerText += "Missed Word : " + mistake;
    }
    if (count == 5) {
        count=0;
        if (isCorrect) {
            correctCount++;
            correctWord.innerText = "";
            correctWord.innerText += "Correct Word :  " + correctCount;
            input.innerText = "";
            generateWord();
        }
        else {
            input.innerText = "";
            console.log("enter");
        }
    }
}

/** This funciton is stared first. */
function init() {
    generateWord();
    isActiveKey();
}
init();
