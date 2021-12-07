const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click",() => alert("hello world"));

buttons[1].addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = (5+6).toString();
    document.querySelector("body").appendChild(div)
})

for (let button of buttons) {
    button.addEventListener('mouseenter', () => {button.classList = "enter"});

    button.addEventListener('mouseleave', () => {button.classList = "leave"});

    button.addEventListener('click', () => {button.classList = "click"});
}

document.body.addEventListener('keypress',(e) =>{if (e.key === "Enter"){alert("hello world")}})