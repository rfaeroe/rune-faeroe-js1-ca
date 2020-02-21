var replaceText = document.querySelector(".container");

function replacingText() {
  replaceText.innerText = replaceText.innerText.replace(
    new RegExp("the", "g"),
    "replace"
  );
  replaceText.innerText = replaceText.innerText.replace(
    new RegExp("The", "g"),
    "Replaced"
  );
}

setTimeout(replacingText, 4000);
