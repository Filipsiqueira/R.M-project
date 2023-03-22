const containerCards = document.querySelector(".container-cards");
const loaderContainer = document.querySelector(".loarder-container");
let page = 1;
const getUrl = async () => {
  const request = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );
  const data = await request.json();
  return data.results;
};
const insertHtml = async () => {
  const characters = await getUrl();
  const templateHtml = characters.reduce((acc, item) => {
    acc += `<li class="card-character">
              <img/ class="card-img" alt="${item.name}" src="https://rickandmortyapi.com/api/character/avatar/${item.id}.jpeg" >
               <h2>${item.name}</h2>
            </li>`;
    return acc;
  }, "");
  containerCards.innerHTML += templateHtml;
};
insertHtml();

const insertNextCharacters = async () => {
  page++;
  insertHtml();
};

const showLoader = () => {
  loaderContainer.classList.add("show");
  removeLoader();
};

const removeLoader = () => {
  setTimeout(() => {
    loaderContainer.classList.remove("show");
    insertNextCharacters();
  }, 1000);
};

window.addEventListener("scroll", () => {
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  const ispageLimit = scrollTop + clientHeight >= scrollHeight - 10;
  if (ispageLimit) {
    showLoader();
  }
});
