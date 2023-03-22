const containerCards = document.querySelector(".container-cards");
let page = 1;
const url = `https://rickandmortyapi.com/api/character?page=${page}`;
const getUrl = async () => {
  const request = await fetch(url);
  const data = await request.json();
  const database = await data.results;
  const templateHtml = database.reduce((acc, item) => {
    acc += `<li class="card-character">
              <img/ class="card-img" alt="${item.name}" src="https://rickandmortyapi.com/api/character/avatar/${item.id}.jpeg" >
               <h2>${item.name}</h2>
            </li>`;
    return acc;
  }, "");
  containerCards.innerHTML += templateHtml;
};
getUrl();
