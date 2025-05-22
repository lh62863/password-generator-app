const password = document.querySelector(".password-text");
const pwLength = document.getElementById("num");
const weight = document.getElementById("weight");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const include = document.querySelectorAll("input[name='include']");
const range = document.querySelector("input[type='range']");
const rects = document.querySelectorAll(".rect");

const Upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

generate.addEventListener("click", () => {
    const length = parseInt(pwLength.textContent);
    const charset = createCharset();
    if (charset.length === 0) {
        alert("Please select at least one character set.");
        return;
    }
    let passwordText = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        passwordText += charset[randomIndex];
    }
    
    password.textContent = passwordText;

    const strength = calculateStrength(passwordText);
    weight.textContent = strength;
    populateRect(strength);
});

range.addEventListener("input", (e) => {
    const target = e.target;
    const value = target.value;
    pwLength.textContent = value;
});

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
        const target = e.target;
        target.style.backgroundColor = target.checked ? "#6ddd93" : "rgb(48, 44, 44)";
        target.style.backgroundImage = target.checked ? "url('../starter-code/images/icon-check.svg')" : "";
    })
});

calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (password.length >= 16) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    if (strength <= 2) return "WEAK";
    if (strength <= 4) return "MEDIUM";
    return "STRONG";
}

populateRect = (strength) => {
    if (strength === "WEAK") {
        rects[0].style.backgroundColor = "#ff3d00";
        rects[1].style.backgroundColor = "rgb(48, 44, 44)";
        rects[2].style.backgroundColor = "rgb(48, 44, 44)";
        rects[3].style.backgroundColor = "rgb(48, 44, 44)";
    }
    if (strength === "MEDIUM") {
        rects[0].style.backgroundColor = "#ff3d00";
        rects[1].style.backgroundColor = "#ff3d00";
        rects[2].style.backgroundColor = "rgb(48, 44, 44)";
        rects[3].style.backgroundColor = "rgb(48, 44, 44)";
    }
    if (strength === "STRONG") {
        rects[0].style.backgroundColor = "#ff3d00";
        rects[1].style.backgroundColor = "#ff3d00";
        rects[2].style.backgroundColor = "#ff3d00";
        rects[3].style.backgroundColor = "#ff3d00";
    }
}

copy.addEventListener("click", () => {
    const passwordText = password.textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("Password copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    } else {
        alert("No password to copy!");
    }
})





















