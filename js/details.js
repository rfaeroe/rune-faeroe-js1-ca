const webUrl = document.location.search;

const params = new URLSearchParams(webUrl);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "error.html";
}

const characterUrl = `https://rickandmortyapi.com/api/character/${id}`;

fetch(characterUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.title = json.name;
    characterCards(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function characterCards(json) {
  console.dir(json);
}

function characterCards(data) {
  const characterContainer = document.querySelector(".detail-container");
  let html = ``;
  html += `
  <div class="detail-container">
  <img class="details-image" src="${data.image}" alt="${data.name}" />
  <div class="detail-details">
      <h1>${data.name}</h1>
      <p>Status: <span class="value" id="status">${data.status}</span></p>
      <p>Species: <span class="value" id="species">${data.species}</span></p>
      <p>Origin: <span class="value" id="origin">${data.origin.name}</span></p>
      <p>Location: <span class="value" id="location">${data.location.name}</span></p>                   
  </div>
</div>`;
  characterContainer.innerHTML = html;
}
