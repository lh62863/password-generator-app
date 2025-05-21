const password = document.querySelector(".password-text");
const pwLength = document.getElementById("num");
const weight = document.querySelector(".weight");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const include = document.querySelectorAll("input[name='include']");
const range = document.querySelectorAll("input[type='range']");

const Upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

generate.addEventListener("click", () => {
    const length = pwLength.value;
    const charset = createCharset();
    let passwordText = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        passwordText += charset[randomIndex];
    }
    
    password.textContent = passwordText;
});

range.addEventListener

createCharset = () => {
    let charset = "";
    include.forEach((checkbox) => {
        if (checkbox.checked) {
            charset += checkbox.value;
        }
    });
    return charset;
};

include.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
        debugger
        const target = e.target;
        target.style.backgroundColor = target.checked ? "#6ddd93" : "rgb(48, 44, 44)";
        target.style.backgroundImage = target.checked ? "url('../starter-code/images/icon-check.svg')" : "";
    })
});





























