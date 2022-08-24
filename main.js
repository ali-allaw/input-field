let count = document.querySelector(".count");
let prog = document.querySelector(".progress");
let input = document.querySelector("input");
let maxLength = input.getAttribute("maxlength")

input.oninput = function () {
    count.innerHTML = maxLength - this.value.length
    count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
    prog.style.width = `${(this.value.length * 100) / maxLength}%`
}