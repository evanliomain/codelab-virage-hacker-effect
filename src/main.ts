import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.onmouseover = (
  event: MouseEvent
) => {
  const letters = event?.target?.innerText?.split("") ?? [];
  let iteration = 0;
  const fun = 20;

  const interval = setInterval(() => {
    if (fun + letters.length < iteration) {
      clearInterval(interval);
    }

    event!.target!.innerText = letters
      .map((letter, index) => {
        if (" " === letter || fun + index < iteration) {
          return letter;
        }
        return randomLetter();
      })
      .join("");
      iteration++;

  }, 30);
};
function randomLetter() {
  return String.fromCharCode("A".charCodeAt() + Math.floor(Math.random() * 26));
}
