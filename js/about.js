var shitText = document.querySelector(".about");

function replacingShittyText() {
  shitText.innerText = shitText.innerText.replace(
    new RegExp("the", "g"),
    "replace"
  );
  shitText.innerText = shitText.innerText.replace(
    new RegExp("The", "g"),
    "Replaced"
  );
}

setTimeout(replacingShittyText, 4000);