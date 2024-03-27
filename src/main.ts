import "./style.scss";

const letters =
  document.querySelector<HTMLDivElement>("#app")?.innerText?.split("") ?? [];

document.querySelector<HTMLDivElement>("#app")!.onmouseover = () => {
  let iteration = 0;
  const fun = 20;

  const interval = setInterval(() => {
    if (fun + letters.length < iteration) {
      clearInterval(interval);
    }
    (
      document.querySelector<HTMLDivElement>("#app") as HTMLDivElement
    ).innerText = letters
      .map((letter: string, index: number) => {
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
  return String.fromCharCode(
    "A".charCodeAt(0) + Math.floor(Math.random() * 26)
  );
}
